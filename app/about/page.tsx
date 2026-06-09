import Navbar from '../components/Navbar'
import AboutSection from '../components/AboutSection'
import MusicPlayerProvider from '../components/MusicPlayerProvider'
import MusicCarousel from '../components/MusicCarousel'
import ToolkitSection from '../components/ToolkitSection'
import MoviesCarousel from '../components/MoviesCarousel'

export const metadata = {
  title: 'About | Maulik Tanna',
  description: 'More about Maulik — background, music, and favorite films.',
}

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <AboutSection />
      <MusicPlayerProvider>
        <MusicCarousel />
      </MusicPlayerProvider>
      <MoviesCarousel />
      <ToolkitSection />
    </div>
  )
}
