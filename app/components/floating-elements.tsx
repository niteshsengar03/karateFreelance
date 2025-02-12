"use client"

import { useEffect, useRef } from "react"
import { motion, useAnimation, useInView } from "framer-motion"

export function FloatingElements() {
  const controls = useAnimation()
  const ref = useRef(null)
  const isInView = useInView(ref)

  useEffect(() => {
    if (isInView) {
      controls.start("visible")
    }
  }, [controls, isInView])

  const elements = Array.from({ length: 20 }, (_, i) => ({
    x: Math.random() * 100 - 50,
    y: Math.random() * 100 - 50,
    scale: Math.random() * 0.5 + 0.5,
    rotation: Math.random() * 360,
  }))

  return (
    <div ref={ref} className="relative h-40 overflow-hidden">
      {elements.map((element, i) => (
        <motion.div
          key={i}
          className="absolute left-1/2 top-1/2 w-4 h-4 bg-yellow-400 rounded-full"
          initial="hidden"
          animate={controls}
          variants={{
            hidden: { opacity: 0, x: "-50%", y: "-50%" },
            visible: {
              opacity: [0, 1, 0],
              x: ["-50%", `calc(-50% + ${element.x}px)`, "-50%"],
              y: ["-50%", `calc(-50% + ${element.y}px)`, "-50%"],
              scale: [1, element.scale, 1],
              rotate: [0, element.rotation, 0],
              transition: {
                duration: 4,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 0.2,
              },
            },
          }}
        />
      ))}
    </div>
  )
}

// "use client"

// import { useEffect, useRef } from "react"

// export function FloatingElements() {
//   const ref = useRef<HTMLDivElement>(null)

//   useEffect(() => {
//     const elements = Array.from({ length: 20 }, (_, i) => ({
//       x: Math.random() * 100 - 50,
//       y: Math.random() * 100 - 50,
//       scale: Math.random() * 0.5 + 0.5,
//       rotation: Math.random() * 360,
//     }))

//     const animate = () => {
//       if (ref.current) {
//         const children = ref.current.children
//         for (let i = 0; i < children.length; i++) {
//           const element = children[i] as HTMLElement
//           const progress = (Date.now() / 1000) % 4 // 4-second loop
//           const t = progress / 4

//           const x = elements[i].x * Math.sin(Math.PI * 2 * t)
//           const y = elements[i].y * Math.sin(Math.PI * 2 * t)
//           const scale = 1 + (elements[i].scale - 1) * Math.sin(Math.PI * t)
//           const rotation = elements[i].rotation * Math.sin(Math.PI * 2 * t)

//           element.style.transform = `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotation}deg)`
//           element.style.opacity = `${Math.sin(Math.PI * t)}`
//         }
//       }
//       requestAnimationFrame(animate)
//     }

//     animate()
//   }, [])

//   return (
//     <div ref={ref} className="relative h-40 overflow-hidden">
//       {Array.from({ length: 20 }).map((_, i) => (
//         <div
//           key={i}
//           className="absolute left-1/2 top-1/2 w-4 h-4 bg-yellow-400 rounded-full"
//           style={{ transform: "translate(-50%, -50%)" }}
//         />
//       ))}
//     </div>
//   )
// }

