import { useState } from 'react';
import { Mail, Phone, Send, Facebook } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage('');

    const subject = encodeURIComponent(`Message de ${formData.name} depuis lokaz.net`);
    const body = encodeURIComponent(
      `Nom: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    const mailtoLink = `mailto:legroupe@lokaz.net?subject=${subject}&body=${body}`;

    window.location.href = mailtoLink;

    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-100 mb-4">
          Nous contacter
        </h2>
        <div className="w-24 h-1 bg-[#c0392b] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-gray-100 mb-6">
              Contactez-nous pour vos événements
            </h3>
            <p className="text-gray-300 mb-8">
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
                    href="https://facebook.com"
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

          <div className="bg-gray-700 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-100 mb-6">Envoyez-nous un message</h3>

            {submitMessage && (
              <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-md">
                {submitMessage}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-200 mb-2">
                  Nom
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-md focus:ring-2 focus:ring-[#c0392b] focus:border-transparent outline-none transition-all bg-gray-800 text-gray-100"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-200 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-600 rounded-md focus:ring-2 focus:ring-[#c0392b] focus:border-transparent outline-none transition-all bg-gray-800 text-gray-100"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-200 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-600 rounded-md focus:ring-2 focus:ring-[#c0392b] focus:border-transparent outline-none transition-all resize-none bg-gray-800 text-gray-100"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#c0392b] text-white px-6 py-3 rounded-md hover:bg-[#a02e23] transition-colors font-medium flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  'Envoi en cours...'
                ) : (
                  <>
                    <Send className="h-5 w-5 mr-2" />
                    Envoyer le message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
