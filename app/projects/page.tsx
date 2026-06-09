import Navbar from '../components/Navbar'
import ProjectsSection from '../components/ProjectsSection'

export const metadata = {
  title: 'Projects | Maulik Tanna',
  description: 'Selected projects — study platforms, MCP servers, and real-time apps.',
}

export default function ProjectsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="mx-auto max-w-6xl px-16 pb-16 pt-16">
        <ProjectsSection fullPage />
      </div>
    </div>
  )
}
