import { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import BandSection from './components/BandSection';
import EventsSection from './components/EventsSection';
import PhotosSection from './components/PhotosSection';
import VideosSection from './components/VideosSection';
import PressSection from './components/PressSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Lightbox from './components/Lightbox';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);
  const [selectedPhotoAlbum, setSelectedPhotoAlbum] = useState<string | undefined>(undefined);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isMenuOpen]);

  const scrollToSection = (id: string, albumTitle?: string) => {
    if (albumTitle) {
      setSelectedPhotoAlbum(albumTitle);
    } else {
      setSelectedPhotoAlbum(undefined);
    }

    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToSection={scrollToSection}
      />

      <main>
        <Hero scrollToSection={scrollToSection} />
        <BandSection />
        <EventsSection />
        <PhotosSection onImageClick={setLightboxImage} selectedAlbum={selectedPhotoAlbum} />
        <VideosSection />
        <PressSection />
        <ContactSection />
      </main>

      <Footer />

      {lightboxImage && (
        <Lightbox
          imageUrl={lightboxImage}
          onClose={() => setLightboxImage(null)}
        />
      )}
    </div>
  );
}

export default App;
