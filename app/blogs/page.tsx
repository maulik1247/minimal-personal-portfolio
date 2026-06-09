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
      <div className="mx-auto max-w-6xl px-16 pb-16 pt-16">
        <BlogsSection fullPage />
      </div>
    </div>
  )
}
