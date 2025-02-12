"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { ScrollArea, ScrollBar } from "@/app/components/ui/scroll-area"
import { Badge } from "@/app/components/ui/badge"
import { CalendarDays, MapPin } from "lucide-react"
import ComingSoon from "../components/commingsoon"

const categories = [
  "All",
  "Tournament",
  "Training",
  "Workshop",
  "Seminar",
  "Competition",
  "Grading",
  "Special",
  "Other",
]

const events = [
  {
    id: 1,
    title: "National Karate Championship",
    date: "March 15, 2024",
    location: "Sports Complex, New York",
    category: "Tournament",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Join us for the biggest karate tournament of the year featuring top athletes from across the country.",
  },
  {
    id: 2,
    title: "Advanced Belt Training Camp",
    date: "April 5-7, 2024",
    location: "Main Dojo, Los Angeles",
    category: "Training",
    image: "/placeholder.svg?height=400&width=600",
    description: "Intensive training camp for brown and black belt holders focusing on advanced techniques.",
  },
  {
    id: 3,
    title: "Youth Development Program",
    date: "March 20, 2024",
    location: "Community Center, Chicago",
    category: "Workshop",
    image: "/placeholder.svg?height=400&width=600",
    description: "Special workshop designed for young martial artists to develop their skills and character.",
  },
]

export default function EventsPage() {
  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Upcoming <span className="text-yellow-400">Events</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400"
          >
            Join us at our upcoming events and be part of our martial arts community
          </motion.p>
        </div>

        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <ScrollArea className="w-full whitespace-nowrap pb-4">
            <div className="flex gap-2">
              {categories.map((category) => (
                <Badge key={category} variant="yellow" className="cursor-pointer">
                  {category}
                </Badge>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </motion.div> */}

        {/* <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {events.map((event, index) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * (index + 1) }}
              className="group"
            >
              <div className="bg-gray-900 rounded-lg overflow-hidden">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={event.image || "/placeholder.svg"}
                    alt={event.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 right-4">
                    <Badge variant="yellow">{event.category}</Badge>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{event.title}</h3>
                  <div className="space-y-2 mb-4">
                    <div className="flex items-center text-gray-400">
                      <CalendarDays className="w-4 h-4 mr-2 text-yellow-400" />
                      {event.date}
                    </div>
                    <div className="flex items-center text-gray-400">
                      <MapPin className="w-4 h-4 mr-2 text-yellow-400" />
                      {event.location}
                    </div>
                  </div>
                  <p className="text-gray-400 text-sm">{event.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div> */}
      </div>
      <ComingSoon/>
    </div>
  )
}

