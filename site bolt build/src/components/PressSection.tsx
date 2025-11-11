import { Newspaper, ExternalLink } from 'lucide-react';

const PressSection = () => {
  const articles = [
    {
      title: 'L\'OkaZ fait danser le bal des pompiers',
      publication: 'Centre Presse Aveyron',
      date: 'Juillet 2023',
      excerpt: 'Le groupe L\'OkaZ a assuré l\'ambiance musicale du bal des pompiers de Millau devant un public conquis...',
      link: 'https://millavois.com/2024/07/09/le-bal-des-pompiers-cest-le-13-juillet-prochain-place-emma-calve/',
    },
    {
      title: 'Un groupe local qui monte',
      publication: 'La Dépêche du Midi',
      date: 'Août 2022',
      excerpt: 'Avec leur répertoire varié et leur énergie communicative, les cinq musiciens de L\'OkaZ s\'imposent sur la scène régionale...',
      link: '#',
    },
    {
      title: 'Festival d\'été : le public au rendez-vous',
      publication: 'Millavois',
      date: 'Juin 2022',
      excerpt: 'Le festival a battu son plein avec notamment la prestation remarquée du groupe L\'OkaZ qui a su captiver le public...',
      link: '#',
    },
     {
      title: 'Comprégnac,Le rigodon.',
      publication: 'Millavois',
      date: 'Juin 2022',
      excerpt: 'Ce sera l’Okaz de venir danser...',
      link: 'https://millavois.com/2019/01/15/compregnac-le-rigodon-de-la-saint-cochon/',
    },
  ];

  return (
    <section id="la-presse" className="py-20 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-100 mb-4">
          La Presse
        </h2>
        <div className="w-24 h-1 bg-[#c0392b] mx-auto mb-12"></div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-lg shadow-md p-6 hover:shadow-xl transition-shadow"
            >
              <div className="flex items-start mb-4">
                <Newspaper className="h-6 w-6 text-[#c0392b] mr-3 flex-shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-bold text-gray-100 mb-2">{article.title}</h3>
                  <p className="text-sm text-gray-400">
                    {article.publication} • {article.date}
                  </p>
                </div>
              </div>
              <p className="text-gray-300 mb-4">{article.excerpt}</p>
              <a
                href={article.link}
                className="inline-flex items-center text-[#c0392b] hover:text-[#a02e23] font-medium transition-colors"
              >
                Lire l'article
                <ExternalLink className="h-4 w-4 ml-2" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PressSection;
