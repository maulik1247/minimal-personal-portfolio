import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SpotifyCarousel from "./components/SpotifyCarousel";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/Testimonials";
import BlogsSection from "./components/BlogsSection";

export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'white', overflow: 'visible', position: 'relative' }}>
      <Navbar />
      <HeroSection />
      <SpotifyCarousel />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <BlogsSection />
    </div>
  );
}
