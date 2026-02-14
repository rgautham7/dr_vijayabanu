import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Quote from '@/components/Quote';
import About from '@/components/About';
import Services from '@/components/Services';
import Events from '@/components/Events';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import SocialGallery from '@/components/SocialGallery';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Quote />
      <About />
      <Services />
      <Events />
      <Testimonials />
      <Contact />
      <SocialGallery />
      <Footer />
    </main>
  );
}