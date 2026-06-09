'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { quickTransition } from '@/lib/motion'

export default function Template({ children }: { children: React.ReactNode }) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <>{children}</>
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={quickTransition}
    >
      {children}
    </motion.div>
  )
}
