import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import ProjectsSection from "./components/ProjectsSection";
import TestimonialsSection from "./components/Testimonials";
import BlogsSection from "./components/BlogsSection";
import GitaQuoteSection from "./components/GitaQuoteSection";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <TestimonialsSection />
      <BlogsSection />
      <GitaQuoteSection />
    </div>
  );
}
