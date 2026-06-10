import Navbar from '../components/Navbar'
import BlogsSection from '../components/BlogsSection'

export const metadata = {
  title: 'Blogs | Maulik Tanna',
  description: 'Case studies, notes, and writing on product, engineering, and learning.',
}

export default function BlogsPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="page-shell">
        <BlogsSection fullPage />
      </div>
    </div>
  )
}
