"use client"

import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"

export function ParallaxSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"])
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"])

  return (
    <div ref={ref} className="h-screen relative overflow-hidden grid place-items-center">
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/section_image.jpg?height=1080&width=1920')",
          backgroundPosition: "center",
          backgroundSize: "cover",
          y: backgroundY,
        }}
      />
      <motion.div className="relative z-10 text-center" style={{ y: textY }}>
        <h2 className="text-5xl md:text-7xl font-bold text-white text-shadow-lg mb-8">Transform Your Life</h2>
        <p className="text-xl md:text-2xl text-white text-shadow-lg max-w-2xl mx-auto px-4">
          Through discipline, respect, and dedication, martial arts can help you achieve your full potential
        </p>
      </motion.div>
      <div className="absolute inset-0 bg-black/50 z-[5]" />
    </div>
  )
}

// "use client"

// import { useRef, useEffect, useState } from "react"

// export function ParallaxSection() {
//   const ref = useRef<HTMLDivElement>(null)
//   const [scrollY, setScrollY] = useState(0)

//   useEffect(() => {
//     const handleScroll = () => {
//       if (ref.current) {
//         const { top, height } = ref.current.getBoundingClientRect()
//         const windowHeight = window.innerHeight
//         const scrollProgress = (windowHeight - top) / (windowHeight + height)
//         setScrollY(Math.min(Math.max(scrollProgress, 0), 1))
//       }
//     }

//     window.addEventListener("scroll", handleScroll)
//     return () => window.removeEventListener("scroll", handleScroll)
//   }, [])

//   const backgroundY = `${scrollY * 100}%`
//   const textY = `${scrollY * 200}%`

//   return (
//     <div ref={ref} className="h-screen relative overflow-hidden grid place-items-center">
//       <div
//         className="absolute inset-0 z-0"
//         style={{
//           backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
//           backgroundPosition: "center",
//           backgroundSize: "cover",
//           transform: `translateY(${backgroundY})`,
//           transition: "transform 0.1s ease-out",
//         }}
//       />
//       <div
//         className="relative z-10 text-center"
//         style={{
//           transform: `translateY(${textY})`,
//           transition: "transform 0.1s ease-out",
//         }}
//       >
//         <h2 className="text-5xl md:text-7xl font-bold text-white text-shadow-lg mb-8">Transform Your Life</h2>
//         <p className="text-xl md:text-2xl text-white text-shadow-lg max-w-2xl mx-auto px-4">
//           Through discipline, respect, and dedication, martial arts can help you achieve your full potential
//         </p>
//       </div>
//       <div className="absolute inset-0 bg-black/50 z-[5]" />
//     </div>
//   )
// }

