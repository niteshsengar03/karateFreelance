"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Button } from "@/app/components/ui/button"

const galleryImages = [
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
  // {
  //   title: "Adult Class",
  //   src: "/placeholder.svg?height=400&width=600&text=Adult+Class",
  // },
  // {
  //   title: "Belt Testing",
  //   src: "/placeholder.svg?height=400&width=600&text=Belt+Testing",
  // },
  // {
  //   title: "Sparring",
  //   src: "/placeholder.svg?height=400&width=600&text=Sparring",
  // },
  // {
  //   title: "Meditation",
  //   src: "/placeholder.svg?height=400&width=600&text=Meditation",
  // },
  // {
  //   title: "Team Building",
  //   src: "/placeholder.svg?height=400&width=600&text=Team+Building",
  // },
  // {
  //   title: "Special Events",
  //   src: "/placeholder.svg?height=400&width=600&text=Special+Events",
  // },
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
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {galleryImages.map((image, index) => (
            <motion.div
              key={index}
              variants={item}
              className="group relative bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-square">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <p className="text-white text-lg font-semibold">{image.title}</p>
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
            variant="outline"
            className="bg-transparent text-yellow-400 border-yellow-400 hover:bg-yellow-400 hover:text-black transition-colors"
          >
            VIEW MORE
          </Button>
        </motion.div>
      </div>
    </main>
  )
}

