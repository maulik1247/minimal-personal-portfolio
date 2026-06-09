"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { AnimatePresence, motion } from 'framer-motion'
import { quickTransition, smoothEase } from '@/lib/motion'
import { Home, User, Briefcase, FolderKanban, BookOpen, FileText } from "lucide-react"
import { FaRegPaperPlane } from "react-icons/fa"
import { useContactModal } from './AppProviders'

export default function Navbar() {
  const pathname = usePathname()
  const { openContactModal } = useContactModal()

  return (
    <div className="sticky top-4 z-50 mt-4 flex w-auto justify-center overflow-visible px-1.5">
      <motion.div 
        className="flex items-center gap-3.5 rounded-[20px] border border-gray-300 bg-white/70 p-3 font-[family-name:var(--font-gabarito)] backdrop-blur-md transition-all duration-300 ease-smooth hover:bg-white hover:shadow-lg"
        initial={{ opacity: 0, y: -12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={quickTransition}
      >
        <Link href="/" aria-label="Home">
          <DockIcon tooltip="Home" active={pathname === '/'}>
            <Home className="h-5 w-5 text-gray-700 transition-colors hover:text-gray-900" />
          </DockIcon>
        </Link>

        <Link href="/about" aria-label="About">
          <DockIcon tooltip="About" active={pathname === '/about'}>
            <User className="h-5 w-5 text-gray-700 transition-colors hover:text-gray-900" />
          </DockIcon>
        </Link>

        <Link href="/experiences" aria-label="Work">
          <DockIcon tooltip="Work" active={pathname === '/experiences'}>
            <Briefcase className="h-5 w-5 text-gray-700 transition-colors hover:text-gray-900" />
          </DockIcon>
        </Link>

        <Link href="/projects" aria-label="Projects">
          <DockIcon tooltip="Projects" active={pathname === '/projects' || pathname.startsWith('/projects/')}>
            <FolderKanban className="h-5 w-5 text-gray-700 transition-colors hover:text-gray-900" />
          </DockIcon>
        </Link>

        <Link href="/blogs" aria-label="Blogs">
          <DockIcon tooltip="Blogs" active={pathname.startsWith('/blogs')}>
            <BookOpen className="h-5 w-5 text-gray-700 transition-colors hover:text-gray-900" />
          </DockIcon>
        </Link>
        
        <div className="h-6 w-px bg-gray-300" />
        
        <DockIcon tooltip="My CV">
          <FileText className="h-5 w-5 text-gray-700 transition-colors hover:text-gray-900" />
        </DockIcon>
        
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
