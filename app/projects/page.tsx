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
      <div className="page-shell">
        <ProjectsSection fullPage />
      </div>
    </div>
  )
}
