export const smoothEase = [0.22, 1, 0.36, 1] as const

export const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
}

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
}

export const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
}

export const defaultTransition = {
  duration: 0.55,
  ease: smoothEase,
}

export const quickTransition = {
  duration: 0.35,
  ease: smoothEase,
}
