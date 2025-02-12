"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function ComingSoon() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden">
      {/* Eclipse/Black Hole Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="w-[600px] h-[600px] rounded-full bg-gradient-to-b from-blue-500/20 to-transparent relative">
          <div className="absolute inset-0 rounded-full bg-black transform scale-[0.85]" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-t from-blue-500/20 to-transparent blur-xl animate-pulse" />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center space-y-8">
        <motion.h1
          className="text-6xl md:text-8xl font-bold tracking-[0.3em] text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          COMING
        </motion.h1>
        <motion.h1
          className="text-6xl md:text-8xl font-bold tracking-[0.3em] text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          SOON
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.1 }}
        >
          <p className="text-blue-400 tracking-[0.6em] text-xl md:text-2xl">SHOTOKAN TRADITIONAL </p>
        </motion.div>
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
    </div>
  )
}

