import { Mail, Phone, Facebook } from 'lucide-react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-100 mb-4">
          Nous contacter
        </h2>
        <div className="w-24 h-1 bg-[#c0392b] mx-auto mb-12"></div>

        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold text-gray-100 mb-6 text-center">
            Contactez-nous pour vos événements
          </h3>
          <p className="text-gray-300 mb-12 text-center">
            Vous organisez un festival, un bal ou une soirée privée ?
            N'hésitez pas à nous contacter pour discuter de votre projet. Nous serons ravis
            de vous accompagner pour faire de votre événement un moment inoubliable.
          </p>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-[#c0392b] bg-opacity-10 p-3 rounded-full mr-4">
                <Mail className="h-6 w-6 text-[#c0392b]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-100 mb-1">Email</h4>
                <a
                  href="mailto:legroupe@lokaz.net"
                  className="text-[#c0392b] hover:text-[#a02e23] transition-colors"
                >
                  legroupe@lokaz.net
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#c0392b] bg-opacity-10 p-3 rounded-full mr-4">
                <Phone className="h-6 w-6 text-[#c0392b]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-100 mb-1">Téléphone</h4>
                <a
                  href="tel:+33664913029"
                  className="text-[#c0392b] hover:text-[#a02e23] transition-colors"
                >
                  06.64.91.30.29
                </a>
              </div>
            </div>

            <div className="flex items-start">
              <div className="bg-[#c0392b] bg-opacity-10 p-3 rounded-full mr-4">
                <Facebook className="h-6 w-6 text-[#c0392b]" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-100 mb-1">Facebook</h4>
                <a
                  href="https://www.facebook.com/legroupe.lokaz.7"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#c0392b] hover:text-[#a02e23] transition-colors inline-flex items-center"
                >
                  Rejoignez-nous sur Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
