import ExperienceSectionAll from "../components/ExperienceSectionAll";
import Navbar from "../components/Navbar";

export default function ExperiencesPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-6xl mx-auto pt-16 px-16 pb-5">
        <ExperienceSectionAll />
      </div>
    </div>
  );
}

