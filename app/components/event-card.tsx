"use client"

import { motion } from "framer-motion"
import { CalendarDays } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"

interface EventCardProps {
  title: string
  date: string
  description: string
  index: number
}

export function EventCard({ title, date, description, index }: EventCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <Card className="overflow-hidden h-full bg-gradient-to-br from-gray-900 to-black text-white">
        <CardContent className="p-6 relative">
          <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400 rounded-bl-full" />
          <CalendarDays className="w-8 h-8 mb-4 text-yellow-400" />
          <h3 className="text-xl font-bold mb-2">{title}</h3>
          <p className="text-sm font-semibold text-yellow-400 mb-4">{date}</p>
          <p className="text-gray-300 mb-6">{description}</p>
          <Button className="w-full bg-yellow-400 hover:bg-yellow-500 text-black">Register Now</Button>
        </CardContent>
      </Card>
    </motion.div>
  )
}

