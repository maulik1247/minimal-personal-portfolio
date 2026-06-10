import ExperienceSectionAll from "../components/ExperienceSectionAll";
import Navbar from "../components/Navbar";

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="page-shell">
        <ExperienceSectionAll />
      </div>
    </div>
  );
}

