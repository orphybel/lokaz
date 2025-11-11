interface HeroProps {
  scrollToSection: (id: string) => void;
}

const Hero = ({ scrollToSection }: HeroProps) => {
  return (
    <section className="relative h-screen md:h-screen h-[70vh] flex items-center justify-center text-white">
      <div
        className="absolute inset-0 bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(/Affiche_groupe_foule.png)',
          backgroundSize: '300%',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center mt-auto mb-16">
        <img
          src="/logo-okaz-transparent copy.png"
          alt="L'OkaZ"
          className="h-20 md:h-32 lg:h-40 mx-auto mb-4 md:mb-6"
        />
        <p className="text-base md:text-2xl mb-3 md:mb-4">
          Valentine, Pier-O, Laurent, Teddy et PH
        </p>
        <p className="text-sm md:text-xl mb-6 md:mb-8 max-w-2xl mx-auto">
          Groupe de musique variété française et internationale basé en Aveyron.
          Nous animons vos soirées, festivals et événements avec énergie et passion.
        </p>
        <button
          onClick={() => scrollToSection('contact')}
          className="bg-[#c0392b] text-white px-6 py-3 md:px-8 md:py-4 rounded-md text-base md:text-lg font-semibold hover:bg-[#a02e23] transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 transition-all"
        >
          Nous contacter
        </button>
      </div>
    </section>
  );
};

export default Hero;
