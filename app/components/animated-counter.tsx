"use client"

import { useInView, useMotionValue, useSpring } from "framer-motion"
import { useEffect, useRef } from "react"

export function AnimatedCounter({
  value,
  direction = "up",
  label,
}: {
  value: number
  direction?: "up" | "down"
  label: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const motionValue = useMotionValue(direction === "down" ? value : 0)
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  })
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView) {
      motionValue.set(direction === "down" ? 0 : value)
    }
  }, [motionValue, isInView, value, direction])

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(Math.floor(latest))
      }
    })
  }, [springValue])

  return (
    <div className="flex flex-col items-center gap-2">
      <span ref={ref} className="text-4xl md:text-5xl font-bold tabular-nums" />
      <span className="text-sm md:text-base text-muted-foreground text-center">{label}</span>
    </div>
  )
}

// "use client"

// import { useEffect, useRef, useState } from "react"

// export function AnimatedCounter({
//   value,
//   direction = "up",
//   label,
// }: {
//   value: number
//   direction?: "up" | "down"
//   label: string
// }) {
//   const ref = useRef<HTMLSpanElement>(null)
//   const [isInView, setIsInView] = useState(false)
//   const [displayValue, setDisplayValue] = useState(direction === "down" ? value : 0)

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsInView(true)
//         }
//       },
//       { threshold: 0.1 },
//     )

//     if (ref.current) {
//       observer.observe(ref.current)
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current)
//       }
//     }
//   }, [])

//   useEffect(() => {
//     if (isInView) {
//       const start = direction === "down" ? value : 0
//       const end = direction === "down" ? 0 : value
//       const duration = 2000 // 2 seconds
//       const startTime = performance.now()

//       const animate = (currentTime: number) => {
//         const elapsedTime = currentTime - startTime
//         const progress = Math.min(elapsedTime / duration, 1)
//         const currentValue = Math.round(start + (end - start) * progress)

//         setDisplayValue(currentValue)

//         if (progress < 1) {
//           requestAnimationFrame(animate)
//         }
//       }

//       requestAnimationFrame(animate)
//     }
//   }, [isInView, value, direction])

//   return (
//     <div className="flex flex-col items-center gap-2">
//       <span ref={ref} className="text-4xl md:text-5xl font-bold tabular-nums">
//         {displayValue.toLocaleString()}
//       </span>
//       <span className="text-sm md:text-base text-muted-foreground text-center">{label}</span>
//     </div>
//   )
// }

