"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Users, Award, Trophy, Star } from "lucide-react"

const stats = [
  { icon: Users, label: "Student Trained", value: "1000+" },
  { icon: Award, label: "Years of Experience", value: "20+" },
  { icon: Trophy, label: "Championships", value: "50+" },
  { icon: Star, label: "Black Belts Produced", value: "250+" },
]

const leaders = [
  {
    name: "Sensei Sriza Jana",
    image: "/organization/image9.jpg?height=400&width=400",
  },
  {
    name: "Sensei Aadi Ghosh",
    image: "/organization/Sensei Aadi Ghosh.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Anamoy Santra",
    image: "/organization/Sensei Anamoy Santra.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Ankan Bhuinya",
    image: "/organization/Sensei Ankan Bhuinya.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Arkaprabha Baul",
    image: "/organization/Sensei Arkaprabha Baul.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Avrin Guchait",
    image: "/organization/Sensei Avrin Guchait.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Bhumika Ghosh",
    image: "/organization/Sensei Bhumika Ghosh.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Debdutta Barui",
    image: "/organization/Sensei Debdutta Barui.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Diptopal Das",
    image: "/organization/Sensei Diptopal Das.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Eishika Mondal",
    image: "/organization/Sensei Eishika Mondal.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Ishanjit Das",
    image: "/organization/Sensei Ishanjit Das.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Monalisa Dhara",
    image: "/organization/Sensei Monalisa Dhara.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Neha Dey",
    image: "/organization/Sensei Neha Dey.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Parno Majumdar",
    image: "/organization/Sensei Parno Majumdar.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Piu Patra",
    image: "/organization/Sensei Piu Patra.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Priyanshi Das",
    image: "/organization/Sensei Priyanshi Das.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Ritam Saha",
    image: "/organization/Sensei Ritam Saha.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Sabia Khatun",
    image: "/organization/Sensei Sabia Khatun.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Sangita Santra",
    image: "/organization/Sensei Sangita Santra.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Satirtha Patra",
    image: "/organization/Sensei Satirtha Patra.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Sharmi Bera",
    image: "/organization/Sensei Sharmi Bera.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Shreya Ghosh",
    image: "/organization/Sensei Shreya Ghosh.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Sk Akibul",
    image: "/organization/Sensei Sk Akibul 2.jpg?height=400&width=400",
  },
  {
    name: "Sensei Soujatya Deyashi",
    image: "/organization/Sensei Soujatya Deyashi.jpeg?height=400&width=400",
  },
  {
    name: "Sensei Surangana Bose",
    image: "/organization/Sensei Surangana Bose.jpeg?height=400&width=400",
  },
]

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
}

export default function LegalPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">


      {/* Leaders Grid */}
      <div className="container mx-auto px-4 py-24">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {leaders.map((leader, index) => (
            <motion.div key={leader.name} variants={item} className="group">
              <Card className="overflow-hidden bg-gray-900/50 backdrop-blur-sm border-gray-800">
                <div className="relative aspect-[1/1] overflow-hidden">
                  <Image
                    src={leader.image || "/placeholder.svg"}
                    alt={leader.name}
                    fill
                    className="object-contain bg-white transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

