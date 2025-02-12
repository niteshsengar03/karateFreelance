"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"

export function ParallaxHero() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0])

  return (
    <div ref={ref} className="relative h-screen overflow-hidden">
      <motion.div style={{ y, opacity }} className="absolute inset-0">
        <Image
          src="/home_image.jpg?height=1080&width=1920&text=Martial+Arts+Background"
          alt="Martial Arts Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </motion.div>
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-bold mb-4 "
        >
          WELCOME TO
          <br />
          SHOTOKAN TRADITIONAL KARATE-DO ASSOCIATION
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-xl mb-8"
        >
          HOWRAH, INDIA
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button
            size="lg"
            className="bg-yellow-500 hover:bg-yellow-600"
            onClick={() => window.open("https://docs.google.com/forms/d/e/1FAIpQLScH5spqprIEfRYNCykDuoVDVfBwsJqcyVstkyqnTZY0-IapIw/viewform?usp=sharing", "_blank")}
          >
           CONTACT US
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

// import Image from "next/image"
// import { Button } from "@/app/components/ui/button"

// interface ParallaxHeroProps {
//   backgroundImage: string
// }

// export function ParallaxHero({ backgroundImage }: ParallaxHeroProps) {
//   return (
//     <div className="relative h-screen overflow-hidden">
//       <div className="absolute inset-0">
//         <Image
//           src={backgroundImage || "/placeholder.svg"}
//           alt="Martial Arts Background"
//           fill
//           className="object-cover"
//           priority
//         />
//         <div className="absolute inset-0 bg-black/50" />
//       </div>
//       <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center">
//         <h1 className="text-4xl md:text-6xl font-bold mb-4">
//           WELCOME TO
//           <br />
//           THRESHOLD MARTIAL ARTS
//         </h1>
//         <p className="text-xl mb-8">Martial Arts for Kids & Adults in Des Plaines, IL</p>
//         <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600">
//           GET YOUR FREE TRIAL
//         </Button>
//       </div>
//     </div>
//   )
// }

