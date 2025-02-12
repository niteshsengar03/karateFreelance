"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card, CardContent } from "@/app/components/ui/card"

interface FeatureCardProps {
  title: string
  image: string
  index: number
}

export function FeatureCard({ title, image, index }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05 }}
      className="h-full"
    >
      <Card className="overflow-hidden h-full transition-shadow duration-300 hover:shadow-xl">
        <div className="relative h-48">
          <Image
            src={`/placeholder.svg?height=200&width=  ${image}`}
            alt={title}
            fill
            className="object-cover transition-transform duration-300 hover:scale-110"
          />
        </div>
        <CardContent className="p-4 bg-gradient-to-br from-yellow-400 to-yellow-600">
          <h3 className="text-center font-bold text-white">{title}</h3>
        </CardContent>
      </Card>
    </motion.div>
  )
}

