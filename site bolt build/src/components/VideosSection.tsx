import { Play } from 'lucide-react';

const VideosSection = () => {

  const videos = [
    {
      title: 'LokaZ Millau 1 Août 2022 Proud Mary',
      thumbnail: 'https://i.ytimg.com/vi/KBiUkjqczRY/hqdefault.jpg',
      videoId: 'KBiUkjqczRY',
    },
    {
      title: 'LokaZ Millau 1 Août 2022 Hot Stuff',
      thumbnail: 'https://i.ytimg.com/vi/HBCz8yEM6LM/hqdefault.jpg',
      videoId: 'HBCz8yEM6LM',
    },
    {
      title: 'LokaZ Millau 1 Août 2022 Corazon Espinado',
      thumbnail: 'https://i.ytimg.com/vi/tOp3EK7AZbk/hqdefault.jpg',
      videoId: 'tOp3EK7AZbk',
    },
    {
      title: 'LokaZ Millau 1 Août 2022  Baila Morena',
      thumbnail: 'https://i.ytimg.com/vi/skIlb7jcl-E/hqdefault.jpg',
      videoId: 'skIlb7jcl-E',
    },
  ];

  return (
    <section id="videos" className="py-20 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-100 mb-4">
          Vidéos
        </h2>
        <div className="w-24 h-1 bg-[#c0392b] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map((video, index) => (
            <a
              key={index}
              href={`https://www.youtube.com/watch?v=${video.videoId}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-700 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow cursor-pointer group block"
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-50 transition-opacity flex items-center justify-center">
                  <div className="bg-[#c0392b] rounded-full p-4 transform group-hover:scale-110 transition-transform">
                    <Play className="h-8 w-8 text-white fill-white" />
                  </div>
                </div>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-100">{video.title}</h3>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideosSection;
