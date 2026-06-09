'use client'

import React from 'react'
import { createPortal } from 'react-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { X } from 'lucide-react'
import { FaRegPaperPlane } from 'react-icons/fa'
import { smoothEase } from '@/lib/motion'

const CONTACT_EMAIL = 'hello@mauliktanna.com'

type ContactModalProps = {
  open: boolean
  onClose: () => void
}

type FormState = {
  name: string
  email: string
  subject: string
  message: string
}

const initialForm: FormState = {
  name: '',
  email: '',
  subject: '',
  message: '',
}

export default function ContactModal({ open, onClose }: ContactModalProps) {
  const [mounted, setMounted] = React.useState(false)
  const [form, setForm] = React.useState<FormState>(initialForm)
  const [error, setError] = React.useState<string | null>(null)
  const [submitted, setSubmitted] = React.useState(false)

  React.useEffect(() => setMounted(true), [])

  React.useEffect(() => {
    if (!open) return

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  React.useEffect(() => {
    if (!open) {
      setError(null)
      setSubmitted(false)
      setForm(initialForm)
    }
  }, [open])

  const updateField = (field: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
    setError(null)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      setError('Please fill in your name, email, and message.')
      return
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailPattern.test(form.email.trim())) {
      setError('Please enter a valid email address.')
      return
    }

    const subject = form.subject.trim() || `Portfolio message from ${form.name.trim()}`
    const body = [
      `Name: ${form.name.trim()}`,
      `Email: ${form.email.trim()}`,
      '',
      form.message.trim(),
    ].join('\n')

    const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`
    window.location.href = mailto
    setSubmitted(true)
  }

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25, ease: smoothEase }}
          onClick={onClose}
        >
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="contact-modal-title"
            className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-2xl"
            initial={{ opacity: 0, y: 16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.98 }}
            transition={{ duration: 0.3, ease: smoothEase }}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={onClose}
              className="absolute top-4 right-4 z-10 flex h-8 w-8 items-center justify-center rounded-full text-gray-500 transition-colors hover:bg-gray-100 hover:text-black"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <div className="p-6 md:p-8">
              <div className="mb-6 pr-8">
                <p className="section-eyebrow mb-2">Contact</p>
                <h2
                  id="contact-modal-title"
                  className="text-2xl font-bold text-black"
                  style={{ fontFamily: 'var(--font-gabarito), Gabarito, sans-serif' }}
                >
                  Get in touch
                </h2>
                <p className="mt-2 text-sm text-gray-500">
                  Send me a message — your email app will open with everything filled in.
                </p>
              </div>

              {submitted ? (
                <div className="rounded-xl border border-green-200 bg-green-50 px-4 py-6 text-center">
                  <p className="font-medium text-green-800">
                    Ready to send!
                  </p>
                  <p className="mt-2 text-sm text-green-700">
                    Your email client should open shortly. If it didn&apos;t, email{' '}
                    <a
                      href={`mailto:${CONTACT_EMAIL}`}
                      className="underline underline-offset-2"
                    >
                      {CONTACT_EMAIL}
                    </a>
                  </p>
                  <button
                    type="button"
                    onClick={onClose}
                    className="btn-smooth mt-5 rounded-xl bg-black px-5 py-2.5 text-sm font-medium text-white hover:bg-neutral-800"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <label className="flex flex-col gap-1.5">
                      <span className="text-sm font-medium text-gray-700">
                        Name
                      </span>
                      <input
                        type="text"
                        value={form.name}
                        onChange={(e) => updateField('name', e.target.value)}
                        className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-black outline-none transition-colors focus:border-gray-400"
                        placeholder="Your name"
                      />
                    </label>
                    <label className="flex flex-col gap-1.5">
                      <span className="text-sm font-medium text-gray-700">
                        Email
                      </span>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-black outline-none transition-colors focus:border-gray-400"
                        placeholder="you@email.com"
                      />
                    </label>
                  </div>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-sm font-medium text-gray-700">
                      Subject <span className="font-normal text-gray-400">(optional)</span>
                    </span>
                    <input
                      type="text"
                      value={form.subject}
                      onChange={(e) => updateField('subject', e.target.value)}
                      className="rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-black outline-none transition-colors focus:border-gray-400"
                      placeholder="What's this about?"
                    />
                  </label>

                  <label className="flex flex-col gap-1.5">
                    <span className="text-sm font-medium text-gray-700">
                      Message
                    </span>
                    <textarea
                      value={form.message}
                      onChange={(e) => updateField('message', e.target.value)}
                      rows={5}
                      className="resize-none rounded-xl border border-gray-200 bg-white px-4 py-2.5 text-sm text-black outline-none transition-colors focus:border-gray-400"
                      placeholder="Tell me what you're working on..."
                    />
                  </label>

                  {error && (
                    <p className="text-sm text-red-600">{error}</p>
                  )}

                  <button
                    type="submit"
                    className="btn-smooth mt-1 inline-flex items-center justify-center gap-2 rounded-xl bg-black px-5 py-3 text-sm font-medium text-white hover:bg-neutral-800"
                  >
                    <FaRegPaperPlane className="h-4 w-4" />
                    Send message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  )
}
