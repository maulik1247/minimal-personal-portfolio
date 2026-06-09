'use client'

import { motion, useReducedMotion } from 'framer-motion'
import { defaultTransition, fadeUp } from '@/lib/motion'

type MotionRevealProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  y?: number
  once?: boolean
}

export default function MotionReveal({
  children,
  className,
  delay = 0,
  y = 24,
  once = true,
}: MotionRevealProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: '-60px' }}
      transition={{ ...defaultTransition, delay }}
    >
      {children}
    </motion.div>
  )
}

type MotionStaggerProps = {
  children: React.ReactNode
  className?: string
  stagger?: number
}

export function MotionStagger({ children, className, stagger = 0.1 }: MotionStaggerProps) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger } },
      }}
    >
      {children}
    </motion.div>
  )
}

export function MotionStaggerItem({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  const reduceMotion = useReducedMotion()

  if (reduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div className={className} variants={fadeUp} transition={defaultTransition}>
      {children}
    </motion.div>
  )
}
