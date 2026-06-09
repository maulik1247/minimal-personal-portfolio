'use client'

import React from 'react'
import ContactModal from './ContactModal'

type ContactModalContextValue = {
  openContactModal: () => void
  closeContactModal: () => void
}

const ContactModalContext = React.createContext<ContactModalContextValue | null>(null)

export default function AppProviders({ children }: { children: React.ReactNode }) {
  const [contactOpen, setContactOpen] = React.useState(false)

  const value = React.useMemo(
    () => ({
      openContactModal: () => setContactOpen(true),
      closeContactModal: () => setContactOpen(false),
    }),
    []
  )

  return (
    <ContactModalContext.Provider value={value}>
      {children}
      <ContactModal open={contactOpen} onClose={() => setContactOpen(false)} />
    </ContactModalContext.Provider>
  )
}

export function useContactModal() {
  const context = React.useContext(ContactModalContext)
  if (!context) {
    throw new Error('useContactModal must be used within AppProviders')
  }
  return context
}
