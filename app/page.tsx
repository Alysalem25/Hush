import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import MenuSection from '@/components/MenuSection';
import GallerySection from '@/components/GallerySection';
import BranchesSection from '@/components/BranchesSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 text-gray-900 scroll-smooth">
      <HeroSection />
      <AboutSection />
      <MenuSection />
      <GallerySection />
      <BranchesSection />
      <ContactSection />
      <Footer />
    </main>
  );
}