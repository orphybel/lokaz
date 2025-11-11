import { Calendar, MapPin, Clock } from 'lucide-react';

const EventsSection = () => {
  const events = [
    {
      date: '21 Juin',
      title: 'Fête de la Musique',
      location: 'Le Bouche à Oreille (BO) à Millau',
      time: '20h00',
      year: 2025
    },
    {
      date: '23 Août',
      title: 'Fête de Laissac',
      location: 'Laissac',
      time: '20h30',
      year: 2025
    },
  ];

  const eventsByYear = events.reduce((acc, event) => {
    if (!acc[event.year]) {
      acc[event.year] = [];
    }
    acc[event.year].push(event);
    return acc;
  }, {} as Record<number, typeof events>);

  const sortedYears = Object.keys(eventsByYear).sort((a, b) => Number(b) - Number(a));

  return (
    <section id="evenements" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-100 mb-4">
          Événements
        </h2>
        <div className="w-24 h-1 bg-[#c0392b] mx-auto mb-12"></div>

        <div className="space-y-12">
          {sortedYears.map((year) => (
            <div key={year}>
              <h3 className="text-3xl font-bold text-gray-100 mb-6 flex items-center">
                <Calendar className="h-8 w-8 text-[#c0392b] mr-3" />
                {year}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {eventsByYear[Number(year)].map((event, index) => (
                  <div
                    key={index}
                    className="bg-gray-700 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow border-l-4 border-[#c0392b]"
                  >
                    <div className="flex items-center text-[#c0392b] font-bold text-lg mb-3">
                      <Calendar className="h-5 w-5 mr-2" />
                      <span>{event.date}</span>
                    </div>
                    <h4 className="text-2xl font-bold text-gray-100 mb-4">{event.title}</h4>
                    <div className="space-y-2">
                      <div className="flex items-center text-gray-300">
                        <MapPin className="h-5 w-5 mr-2 text-[#c0392b]" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-300">
                        <Clock className="h-5 w-5 mr-2 text-[#c0392b]" />
                        <span>Dès {event.time}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
