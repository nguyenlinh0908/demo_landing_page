import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyDesignHive from "./components/WhyDesignHive";
import Showcase from "./components/Showcase";
import GallerySection from "./components/GallerySection";
import Project from "./components/Project";
import Projects from "./components/Projects";
import AboutSection from "./components/AboutSection";
import HeroGallery from "./components/HeroGallery";
import HeroServices from "./components/HeroServices";
import OurTeamSection from "./components/OurTeamSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Navbar />
      <Hero />
      <WhyDesignHive />
      <Showcase />
      <GallerySection />
      <Project />
      <Projects url="/project2.png" page={2} />
      <Projects url="/project3.jpg" page={3} />
      <AboutSection />
      <HeroGallery />
      <HeroServices />
      <OurTeamSection />
      <Footer />
    </main>
  );
}
