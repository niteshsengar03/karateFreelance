"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@/app/components/ui/button"

const allGalleryImages = [
  {
    title: "Special Events",
    src: "/gallary6.jpg?height=400&width=600&text=Training",
  },
  {
    title: "Competition",
    src: "/gallary7.jpg?height=400&width=600&text=Competition",
  },
  {
    title: "Myself",
    src: "/gallary8.jpg?height=400&width=600&text=Kids+Class",
  },
  {
    title: "Adult Class",
    src: "/gallary1.jpg?height=400&width=600&text=Adult+Class",
  },
  {
    title: "Belt Testing",
    src: "/gallary2.jpg?height=400&width=600&text=Belt+Testing",
  },
  {
    title: "Sparring",
    src: "/gallary3.jpg?height=400&width=600&text=Sparring",
  },
  {
    title: "Meditation",
    src: "/gallary4.jpg?height=400&width=600&text=Meditation",
  },
  {
    title: "Team Building",
    src: "/gallary5.jpg?height=400&width=600&text=Team+Building",
  },
  {
    title: "Special Training",
    src: "/gallary9.jpg?height=400&width=600&text=Special+Events",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function GalleryPage() {
  const [showMore, setShowMore] = useState(false)
  const displayedImages = showMore ? allGalleryImages : allGalleryImages.slice(0, 3)

  return (
    <main className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-32 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-white">Gallery</h1>
          <p className="text-yellow-400 italic text-lg">"You can do anything you set your mind to."</p>
          <p className="text-gray-400 text-sm">- Benjamin Franklin</p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4"
        >
          {displayedImages.map((image: any, index: number) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-video">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-xs sm:text-sm font-semibold text-center px-2">{image.title}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center mt-12"
        >
          <Button
            onClick={() => setShowMore(!showMore)}
            variant="outline"
            className="bg-transparent text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors"
          >
            {showMore ? "VIEW LESS" : "VIEW MORE"}
          </Button>
        </motion.div>
      </div>
    </main>
  )
}

