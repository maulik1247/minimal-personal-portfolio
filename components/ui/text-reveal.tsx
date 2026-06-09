"use client"

import {
  useRef,
  type ComponentPropsWithoutRef,
  type FC,
  type ReactNode,
} from "react"
import { motion, MotionValue, useScroll, useTransform } from "motion/react"

import { cn } from "@/lib/utils"

export interface TextRevealProps extends ComponentPropsWithoutRef<"div"> {
  children: string
  compact?: boolean
}

export const TextReveal: FC<TextRevealProps> = ({ children, className, compact = false }) => {
  const sectionRef = useRef<HTMLDivElement | null>(null)
  const { scrollYProgress } = useScroll({
    target: sectionRef,
  })

  if (typeof children !== "string") {
    throw new Error("TextReveal: children must be a string")
  }

  const words = children.split(" ")

  return (
    <div
      ref={sectionRef}
      className={cn("relative z-0", compact ? "h-[100vh]" : "h-[200vh]", className)}
    >
      <div
        className={cn(
          "sticky top-0 mx-auto flex bg-transparent",
          compact
            ? "h-auto items-start py-0"
            : "h-[50%] max-w-4xl items-center px-4 py-20"
        )}
      >
        <span
          className={cn(
            "flex flex-wrap",
            compact
              ? "text-base leading-relaxed font-normal text-gray-400 md:text-lg"
              : "p-5 text-2xl font-bold text-black/20 md:p-8 md:text-3xl lg:p-10 lg:text-4xl xl:text-5xl dark:text-white/20"
          )}
        >
          {words.map((word, i) => {
            const start = i / words.length
            const end = start + 1 / words.length
            return (
              <Word key={i} progress={scrollYProgress} range={[start, end]} compact={compact}>
                {word}
              </Word>
            )
          })}
        </span>
      </div>
    </div>
  )
}

interface WordProps {
  children: ReactNode
  progress: MotionValue<number>
  range: [number, number]
  compact?: boolean
}

const Word: FC<WordProps> = ({ children, progress, range, compact = false }) => {
  const opacity = useTransform(progress, range, [0, 1])
  return (
    <span className={cn("relative", compact ? "mx-0.5" : "mx-1 lg:mx-1.5")}>
      <span className="absolute opacity-30">{children}</span>
      <motion.span
        style={{ opacity: opacity }}
        className={cn(compact ? "text-gray-600" : "text-black dark:text-white")}
      >
        {children}
      </motion.span>
    </span>
  )
}
