import ExperienceSectionAll from "../components/ExperienceSectionAll";
import Navbar from "../components/Navbar";

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'white', overflow: 'visible', position: 'relative' }}>
      <Navbar />
      <div className="max-w-6xl mx-auto px-16 py-16">
        <ExperienceSectionAll />
      </div>
    </div>
  );
}

