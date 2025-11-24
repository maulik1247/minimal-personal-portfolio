"use client"

import React from 'react'
import { motion } from 'framer-motion'
import { Home, X, Instagram, FileText, Sun, Moon } from "lucide-react"
import { FaRegPaperPlane } from "react-icons/fa"

export default function Navbar() {
  const [isDarkMode, setIsDarkMode] = React.useState(false)

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return (
    <div className="sticky top-4 z-50 flex justify-center w-auto mt-4" style={{ paddingLeft: '6px', paddingRight: '6px', overflow: 'visible', backgroundColor: 'transparent' }}>
      <motion.div 
        className="backdrop-blur-md border border-gray-300 flex items-center hover:bg-white hover:shadow-lg transition-all duration-300"
        style={{ 
          borderRadius: '20px', 
          backgroundColor: '#ffffffb3', 
          gap: '14px', 
          padding: '12px', 
          height: 'min-content', 
          width: 'min-content', 
          overflow: 'visible', 
          fontFamily: 'Switzer, sans-serif' 
        }}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* First Icon */}
        <div>
          <DockIcon tooltip="Home">
            <Home className="w-5 h-5 text-gray-700 hover:text-gray-900 transition-colors" />
          </DockIcon>
        </div>
        
        {/* Vertical Separator */}
        <div className="w-px h-6 bg-gray-300"></div>
        
        {/* Rest of the Icons */}
        <div className="flex items-center" style={{ gap: '6px' }}>
          <DockIcon tooltip="X (Twitter)">
            <svg className="w-5 h-5 text-gray-700 hover:text-gray-900 transition-colors" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
          </DockIcon>
          
          <DockIcon tooltip="Instagram">
            <Instagram className="w-5 h-5 text-gray-700 hover:text-gray-900 transition-colors" />
          </DockIcon>
          
          <DockIcon tooltip="My CV">
            <FileText className="w-5 h-5 text-gray-700 hover:text-gray-900 transition-colors" />
          </DockIcon>
          
          <DockIcon tooltip={isDarkMode ? "Light Mode" : "Dark Mode"}>
            <motion.div
              onClick={toggleDarkMode}
              className="cursor-pointer"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5 text-gray-700 hover:text-gray-900 transition-colors" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700 hover:text-gray-900 transition-colors" />
              )}
            </motion.div>
          </DockIcon>
        </div>
        
        {/* Vertical Separator */}
        <div className="w-px h-6 bg-gray-300"></div>
        
        {/* Get in touch Button */}
        <div>
          <motion.button 
            className="bg-black text-white px-6 py-3.5 font-medium hover:bg-gray-800 transition-colors inline-flex items-center gap-2"
            style={{ 
              borderRadius: '14px', 
              height: 'min-content', 
              width: 'min-content', 
              overflow: 'visible', 
              display: 'flex', 
              flexDirection: 'row', 
              whiteSpace: 'nowrap', 
              fontSize: '16px', 
              fontFamily: 'Switzer, sans-serif' 
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaRegPaperPlane className="w-4 h-4" />
            Get in touch
          </motion.button>
        </div>
      </motion.div>
    </div>
  )
}

function DockIcon({ children, tooltip }: { children: React.ReactNode, tooltip: string }) {
  const [showTooltip, setShowTooltip] = React.useState(false)

  return (
    <div className="relative">
      <motion.div
        className="hover:bg-gray-100 cursor-pointer transition-all duration-200 group"
        style={{ padding: '15px', borderRadius: '12px' }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.95 }}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        {children}
      </motion.div>
      
      {showTooltip && (
        <div 
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-2 py-1 bg-black text-white rounded whitespace-nowrap"
          style={{ 
            fontSize: '16px',
            fontFamily: 'Switzer, sans-serif',
            zIndex: 9999,
            pointerEvents: 'none'
          }}
        >
          {tooltip}
        </div>
      )}
    </div>
  )
}