"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/app/components/ui/scroll-area"
import { Tabs, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import ComingSoon from "@/app/components/commingsoon"

const categories = ["All", "1st Dan", "2nd Dan", "3rd Dan", "4th Dan", "5th Dan"]

const blackBelts = [
  {
    name: "Alex Thompson",
    rank: "5th Dan",
    specialization: "Traditional Forms",
    achievements: ["National Champion 2022", "Master Instructor"],
    image: "/placeholder.svg?height=400&width=400",
  },
  // Add more black belt holders...
]

export default function BlackBeltHoldersPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      {/* <div ref={ref} className="relative h-[80vh] overflow-hidden flex items-center justify-center">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src="/images/banner6.jpg?height=1080&width=1920"
            alt="Black Belt Holders Banner"
            fill
            className="object-cover opacity-50"
          />
        </motion.div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Black Belt Holders
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Excellence Through Dedication and Perseverance
          </motion.p>
        </div>
      </div> */}

      {/* Filter Section */}
      {/* <div className="container mx-auto px-4 py-12">
        <ScrollArea className="w-full whitespace-nowrap">
          <Tabs defaultValue="All" className="w-full">
            <TabsList className="bg-gray-900/50 backdrop-blur-sm border border-gray-800">
              {categories.map((category) => (
                <TabsTrigger
                  key={category}
                  value={category}
                  className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
                >
                  {category}
                </TabsTrigger>
              ))}
            </TabsList>
            <ScrollBar orientation="horizontal" />
          </Tabs>
        </ScrollArea>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12"
        >
          {blackBelts.map((belt, index) => (
            <motion.div
              key={belt.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <Card className="overflow-hidden bg-gray-900/50 backdrop-blur-sm border-gray-800 group">
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={belt.image || "/placeholder.svg"}
                    alt={belt.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="text-white">
                      {belt.achievements.map((achievement) => (
                        <div key={achievement} className="text-sm mb-1">
                          • {achievement}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{belt.name}</h3>
                  <Badge className="bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20">{belt.rank}</Badge>
                  <p className="text-gray-400 mt-2">{belt.specialization}</p>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div> */}
      <ComingSoon />
    </div>
  )
}

