"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { quickTransition, smoothEase } from '@/lib/motion'
import {
  Home,
  User,
  Briefcase,
  FolderKanban,
  BookOpen,
  FileText,
  Menu,
  X,
  type LucideIcon,
} from 'lucide-react'
import { FaRegPaperPlane } from 'react-icons/fa'
import { resumeUrl } from '@/lib/resumeData'
import { useContactModal } from './AppProviders'
import SiteLogo from './SiteLogo'

type NavItem = {
  href: string
  label: string
  icon: LucideIcon
  isActive: (pathname: string) => boolean
}

const navItems: NavItem[] = [
  { href: '/', label: 'Home', icon: Home, isActive: (p) => p === '/' },
  { href: '/about', label: 'About', icon: User, isActive: (p) => p === '/about' },
  { href: '/experiences', label: 'Work', icon: Briefcase, isActive: (p) => p === '/experiences' },
  {
    href: '/projects',
    label: 'Projects',
    icon: FolderKanban,
    isActive: (p) => p === '/projects' || p.startsWith('/projects/'),
  },
  { href: '/blogs', label: 'Blogs', icon: BookOpen, isActive: (p) => p.startsWith('/blogs') },
]

export default function Navbar() {
  const pathname = usePathname()
  const { openContactModal } = useContactModal()
  const [menuOpen, setMenuOpen] = React.useState(false)

  React.useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  React.useEffect(() => {
    if (!menuOpen) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMenuOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const handleContact = () => {
    setMenuOpen(false)
    openContactModal()
  }

  return (
    <>
      {/* Mobile */}
      <div className="relative sticky top-2 z-50 mt-2 px-3 md:hidden">
        <motion.div
          className="flex items-center justify-between rounded-2xl border border-gray-300 bg-white/80 px-4 py-3 font-[family-name:var(--font-gabarito)] backdrop-blur-md"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={quickTransition}
        >
          <SiteLogo onClick={() => setMenuOpen(false)} />
          <button
            type="button"
            onClick={() => setMenuOpen((open) => !open)}
            className="flex h-10 w-10 items-center justify-center rounded-xl text-gray-700 transition-colors hover:bg-gray-100"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </motion.div>

        <AnimatePresence>
          {menuOpen && (
            <>
              <motion.button
                type="button"
                aria-label="Close menu"
                className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                onClick={() => setMenuOpen(false)}
              />
              <motion.nav
                className="absolute left-3 right-3 top-[calc(100%+0.5rem)] z-50 overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-xl"
                initial={{ opacity: 0, y: -8, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.98 }}
                transition={{ duration: 0.25, ease: smoothEase }}
              >
                <ul className="flex flex-col p-2">
                  {navItems.map((item) => {
                    const active = item.isActive(pathname)
                    const Icon = item.icon
                    return (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          onClick={() => setMenuOpen(false)}
                          className={`flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium transition-colors ${
                            active
                              ? 'bg-gray-100 text-black'
                              : 'text-gray-700 hover:bg-gray-50 hover:text-black'
                          }`}
                        >
                          <Icon className="h-5 w-5 shrink-0" />
                          {item.label}
                        </Link>
                      </li>
                    )
                  })}
                  <li>
                    <a
                      href={resumeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 rounded-xl px-4 py-3 text-base font-medium text-gray-700 transition-colors hover:bg-gray-50 hover:text-black"
                    >
                      <FileText className="h-5 w-5 shrink-0" />
                      My CV
                    </a>
                  </li>
                </ul>
                <div className="border-t border-gray-100 p-3">
                  <button
                    type="button"
                    onClick={handleContact}
                    className="btn-smooth flex w-full items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-sm font-medium text-white hover:bg-gray-800"
                  >
                    <FaRegPaperPlane className="h-4 w-4" />
                    Get in touch
                  </button>
                </div>
              </motion.nav>
            </>
          )}
        </AnimatePresence>
      </div>

      {/* Desktop */}
      <div className="sticky top-4 z-50 mt-4 hidden justify-center px-1.5 md:flex">
        <motion.div
          className="flex items-center gap-3.5 rounded-[20px] border border-gray-300 bg-white/70 p-3 font-[family-name:var(--font-gabarito)] backdrop-blur-md transition-all duration-300 ease-smooth hover:bg-white hover:shadow-lg"
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={quickTransition}
        >
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} aria-label={item.label}>
              <DockIcon tooltip={item.label} active={item.isActive(pathname)}>
                <item.icon className="h-5 w-5 text-gray-700 transition-colors hover:text-gray-900" />
              </DockIcon>
            </Link>
          ))}

          <div className="h-6 w-px bg-gray-300" />

          <a
            href={resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="My CV"
          >
            <DockIcon tooltip="My CV">
              <FileText className="h-5 w-5 text-gray-700 transition-colors hover:text-gray-900" />
            </DockIcon>
          </a>

          <div className="h-6 w-px bg-gray-300" />

          <motion.button
            type="button"
            onClick={openContactModal}
            className="btn-smooth inline-flex items-center gap-2 rounded-[14px] bg-black px-6 py-3.5 text-base font-medium text-white hover:bg-gray-800"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRegPaperPlane className="h-4 w-4" />
            Get in touch
          </motion.button>
        </motion.div>
      </div>
    </>
  )
}

function DockIcon({
  children,
  tooltip,
  active = false,
}: {
  children: React.ReactNode
  tooltip: string
  active?: boolean
}) {
  const [showTooltip, setShowTooltip] = React.useState(false)

  return (
    <div className="relative">
      <motion.div
        className={`cursor-pointer rounded-xl p-[15px] transition-colors duration-300 ease-smooth group ${
          active ? 'bg-gray-100' : 'hover:bg-gray-100'
        }`}
        whileHover={{ scale: 1.08, y: -4 }}
        whileTap={{ scale: 0.96 }}
        transition={{ type: 'spring', stiffness: 400, damping: 22 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </motion.div>

      <AnimatePresence>
        {showTooltip && (
          <motion.div
            initial={{ opacity: 0, y: 4, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.96 }}
            transition={{ duration: 0.2, ease: smoothEase }}
            className="absolute top-full left-1/2 z-[9999] mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-black px-2 py-1 text-base text-white"
            style={{
              fontFamily: 'var(--font-gabarito), Gabarito, sans-serif',
              pointerEvents: 'none',
            }}
          >
            {tooltip}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
