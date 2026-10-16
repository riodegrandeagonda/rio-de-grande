import { useEffect, useState } from 'react';
import { initAnalytics } from './analytics';
import Preloader from './components/Preloader';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import About from './components/About';
import Rooms from './components/Rooms';
import Breakfast from './components/Breakfast';
import Cafe from './components/Cafe';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFab from './components/WhatsAppFab';
import Lightbox from './components/Lightbox';
import ThankYou from './components/ThankYou';

function isThankYouPath() {
  const path = window.location.pathname.replace(/\/+$/, '') || '/';
  return path === '/thank-you';
}

function App() {
  const [lightboxImage, setLightboxImage] = useState(null);
  const thankYou = isThankYouPath();

  useEffect(() => {
    initAnalytics();
  }, []);

  const openLightbox = (src, alt) => setLightboxImage({ src, alt });
  const closeLightbox = () => setLightboxImage(null);

  if (thankYou) {
    return <ThankYou />;
  }

  return (
    <>
      <Preloader />
      <Navbar />
      <Hero />
      <StatsStrip />
      <About />
      <Rooms onImageClick={openLightbox} />
      <Breakfast />
      <Cafe onImageClick={openLightbox} />
      <Gallery onImageClick={openLightbox} />
      <Contact />
      <Footer />
      <WhatsAppFab />
      <Lightbox image={lightboxImage} onClose={closeLightbox} />
    </>
  );
}

export default App;
