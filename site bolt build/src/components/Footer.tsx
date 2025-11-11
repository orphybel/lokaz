const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-6 md:mb-0">
            <img src="/logo-okaz-transparent.png" alt="L'OkaZ" className="h-12" />
          </div>

          <div className="text-center md:text-right">
            <p className="text-gray-400 mb-2">
              © {currentYear} L'OkaZ. Tous droits réservés.
            </p>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors text-sm"
            >
              Mentions légales
            </a>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400 text-sm">
            Groupe de musique variété française et internationale basé en Aveyron
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
