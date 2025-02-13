"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"
import { Card } from "@/app/components/ui/card"
import { Badge } from "@/app/components/ui/badge"
import { Users, Award, Trophy, Star } from "lucide-react"

const stats = [
  { icon: Users, label: "Students Trained", value: "1000+" },
  { icon: Award, label: "Years of Experience", value: "20+" },
  { icon: Trophy, label: "Championships", value: "50+" },
  { icon: Star, label: "Black Belts Produced", value: "250+" },
]

const leaders = [
  {
    name: "Somnath Karate & Fitness Academy",
    position: "Instructor In-charge  : Sensei Somnath Kari",
    image: "/organization/image8.jpg?height=400&width=400",
    achievements: ["2nd Dan Black Belt"],
    // experience: "25+ years",
  },
  {
    name: "Ayan’s Institute Of Karate",
    position: "Instructor In-charge  : Sensei Ayan Adhikary",
    image: "/organization/image7.jpg?height=400&width=400",
    achievements: ["1st Dan Black Belt"],
    // experience: "18+ years",
  },
  {
    name: "Inzul’s Karate Academy",
    position: "Instructor In-charge  : Sensei Sk Inzul Haque ",
    image: "/organization/image3.jpg?height=400&width=400",
    achievements: ["1st Dan Black Belt"],
    // experience: "30+ years",
  },
  {
    name: "Subhas Karate Academy",
    position: "Instructor In-charge  : Sensei Subhas Pandit",
    image: "/organization/image4.jpg?height=400&width=400",
    achievements: ["1st Dan Black Belt"],
    // experience: "25+ years",
  },
  {
    name: "Trideep Karate Academy",
    position: " Instructor In-charge  : Sensei Trideep Kumar Maji",
    image: "/organization/image5.jpg?height=400&width=400",
    achievements: ["1st Dan Black Belt"],
    // experience: "18+ years",
  },
  {
    name: "Bhabesh Karate Academy",
    position: "Instructor In-charge  : Sensei Bhabesh Dalui",
    image: "/organization/image6.jpg?height=400&width=400",
    achievements: ["1st Dan Black Belt"],
    // experience: "30+ years",
  },
  {
    name: "Surojit’s  Shotokan School of Karate",
    position: "Instructor In-charge  : Sensei Surojit Mondal",
    image: "/organization/image1.jpg?height=400&width=400",
    achievements: ["1st Dan Black Belt"],
    // experience: "25+ years",
  },
  {
    name: "Pratik Karate Academy – South 24 PGS",
    position: "Instructor In-charge  : Sensei Pratik Naskar",
    image: "/organization/image2.jpg?height=400&width=400",
    achievements: ["2nd Dan Black Belt"],
    // experience: "18+ years",
  },
  {
    name: "Sriza Karate Academy",
    position: "Instructor In-charge  : Sensei Sriza Jana",
    image: "/organization/image9.jpg?height=400&width=400",
    achievements: ["2nd Dan Black Belt"],
    // experience: "30+ years",
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

export default function LeadershipPage() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"])

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <div ref={ref} className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <motion.div style={{ y }} className="absolute inset-0 z-0">
          <Image
            src="/images/banner2.jpg?height=1080&width=1920"
            alt="Leadership Banner"
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
            Our Leadership
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Decades of Experience, Lifetime of Excellence
          </motion.p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-black/50 backdrop-blur-sm py-16">
        <div className="container mx-auto px-4">
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat) => (
              <motion.div key={stat.label} variants={item} className="text-center text-white">
                <stat.icon className="w-8 h-8 mx-auto mb-4 text-yellow-400" />
                <div className="text-3xl md:text-4xl font-bold mb-2">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

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
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  {/* <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                    <div className="text-white">
                      <div className="font-semibold mb-2">Experience</div>
                      <div className="text-sm">{leader.experience}</div>
                    </div>
                  </div> */}
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">{leader.name}</h3>
                  <p className="text-yellow-400 mb-4">{leader.position}</p>
                  <div className="space-y-2">
                    {leader.achievements.map((achievement) => (
                      <Badge
                        key={achievement}
                        variant="secondary"
                        className="mr-2 bg-yellow-400/10 text-yellow-400 hover:bg-yellow-400/20"
                      >
                        {achievement}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

