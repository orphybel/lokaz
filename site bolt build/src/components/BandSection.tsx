import { Mic, Drum, Piano, Guitar, Music } from 'lucide-react';

const BandSection = () => {
  const members = [
    { name: 'Valentine', role: 'Voix', icon: Mic },
    { name: 'Pier-O', role: 'Batterie', icon: Drum },
    { name: 'Laurent', role: 'Clavier', icon: Piano },
    { name: 'Teddy', role: 'Guitare', icon: Guitar },
    { name: 'PH', role: 'Basse', icon: Guitar },
  ];

  return (
    <section id="le-groupe" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-100 mb-4">
          Le groupe
        </h2>
        <div className="w-24 h-1 bg-[#c0392b] mx-auto mb-12"></div>

        <div className="mb-12 flex justify-center">
          <img
            src="/Lokaz tetes.avif"
            alt="Les 5 musiciens du groupe L'OkaZ"
            className="rounded-lg shadow-lg max-w-full h-auto"
          />
        </div>

        <div className="grid grid-cols-5 md:grid-cols-2 lg:grid-cols-5 gap-2 md:gap-8 mb-12">
          {members.map((member, index) => {
            const Icon = member.icon;
            return (
              <div
                key={index}
                className="bg-gray-800 rounded-lg shadow-md p-2 md:p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="flex justify-center mb-1 md:mb-4">
                  <div className="bg-[#c0392b] bg-opacity-10 p-2 md:p-4 rounded-full">
                    <Icon className="h-6 w-6 md:h-12 md:w-12 text-[#c0392b]" />
                  </div>
                </div>
                <h3 className="text-xs md:text-xl font-bold text-gray-100 mb-0 md:mb-2">{member.name}</h3>
                <p className="text-[10px] md:text-base text-gray-300">{member.role}</p>
              </div>
            );
          })}
        </div>

        <div className="bg-gray-800 rounded-lg shadow-md p-8 md:p-12">
          <p className="text-lg text-gray-300 leading-relaxed mb-6">
            L'OkaZ est un groupe de musique varié qui propose un répertoire riche mêlant les plus grands succès
            de la variété française et internationale. Avec une énergie communicative et une passion pour la scène,
            nous animons vos événements avec professionnalisme et convivialité.
          </p>
          <p className="text-lg text-gray-300 leading-relaxed">
            De la chanson française aux tubes internationaux, notre répertoire s'adapte à tous les publics et toutes
            les générations. Que ce soit pour un festival, un bal ou une soirée privée, nous mettons
            notre talent et notre expérience au service de votre événement pour créer des moments inoubliables.
          </p>
        </div>
      </div>
    </section>
  );
};

export default BandSection;
