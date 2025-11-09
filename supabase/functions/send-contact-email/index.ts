import { createClient } from 'npm:@supabase/supabase-js@2';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type, Authorization, X-Client-Info, Apikey',
};

interface ContactMessage {
  name: string;
  email: string;
  message: string;
}

const RESEND_API_KEY = 're_jizQQBwy_CHAaTp7KLsB24Av8zxcb4P1M';

Deno.serve(async (req: Request) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const { name, email, message }: ContactMessage = await req.json();

    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: 'Tous les champs sont requis' }),
        {
          status: 400,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseServiceKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const supabase = createClient(supabaseUrl, supabaseServiceKey);

    const { error: dbError } = await supabase
      .from('contact_messages')
      .insert([{ name, email, message, status: 'pending' }]);

    if (dbError) {
      console.error('Database error:', dbError);
      return new Response(
        JSON.stringify({ error: 'Erreur lors de l\'enregistrement du message' }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    console.log('Sending email to Resend API...');
    
    const emailPayload = {
      from: 'Lokaz Contact <onboarding@resend.dev>',
      to: ['legroupe@lokaz.net'],
      subject: `Nouveau message de ${name}`,
      html: `
        <h2>Nouveau message de contact</h2>
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
        <hr>
        <p><em>Envoy&eacute; depuis le site web Lokaz</em></p>
      `,
    };

    console.log('Email payload:', JSON.stringify(emailPayload));

    const emailResponse = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify(emailPayload),
    });

    const responseText = await emailResponse.text();
    console.log('Resend API response status:', emailResponse.status);
    console.log('Resend API response:', responseText);

    if (!emailResponse.ok) {
      console.error('Resend error - Status:', emailResponse.status);
      console.error('Resend error - Body:', responseText);
      
      await supabase
        .from('contact_messages')
        .update({ status: 'failed' })
        .eq('email', email)
        .eq('name', name)
        .order('created_at', { ascending: false })
        .limit(1);

      return new Response(
        JSON.stringify({ error: `Erreur Resend: ${responseText}` }),
        {
          status: 500,
          headers: { ...corsHeaders, 'Content-Type': 'application/json' },
        }
      );
    }

    await supabase
      .from('contact_messages')
      .update({ status: 'sent' })
      .eq('email', email)
      .eq('name', name)
      .order('created_at', { ascending: false })
      .limit(1);

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Message envoy\u00e9 avec succ\u00e8s!' 
      }),
      {
        status: 200,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: `Une erreur est survenue: ${error.message}` }),
      {
        status: 500,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});