"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Card } from "@/app/components/ui/card"
import { Mail, Phone, Award } from "lucide-react"
import { useInView } from "react-intersection-observer"
import ComingSoon from "../components/commingsoon"

const officials = [
  {
    name: "John Smith",
    position: "President",
    image: "/placeholder.svg?height=400&width=400",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    qualifications: ["7th Dan Black Belt", "International Referee", "Technical Committee Chair"],
  },
  {
    name: "Sarah Johnson",
    position: "Vice President",
    image: "/placeholder.svg?height=400&width=400",
    email: "sarah.johnson@example.com",
    phone: "+1 (555) 234-5678",
    qualifications: ["6th Dan Black Belt", "National Coach", "Education Committee Head"],
  },
  {
    name: "Michael Chen",
    position: "Secretary General",
    image: "/placeholder.svg?height=400&width=400",
    email: "michael.chen@example.com",
    phone: "+1 (555) 345-6789",
    qualifications: ["5th Dan Black Belt", "Tournament Director", "Administration Expert"],
  },
]

const executives = [
  {
    name: "David Wilson",
    position: "Technical Director",
    image: "/placeholder.svg?height=400&width=400",
    email: "david.wilson@example.com",
    phone: "+1 (555) 456-7890",
    qualifications: ["6th Dan Black Belt", "Master Instructor", "Performance Analyst"],
  },
  {
    name: "Emily Brown",
    position: "Competition Director",
    image: "/placeholder.svg?height=400&width=400",
    email: "emily.brown@example.com",
    phone: "+1 (555) 567-8901",
    qualifications: ["5th Dan Black Belt", "International Judge", "Event Management"],
  },
]

const allMembers = [...officials, ...executives]

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

export default function OfficialsPage() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Officials & Executive Committee</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Meet our dedicated team of officials and executive committee members who lead and guide our organization
          </p>
        </motion.div>

        {/* All Members Section */}
        {/* <section>
          <motion.div
            ref={ref}
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5 }}
          >
            <motion.div
              className="h-1 bg-yellow-400 mb-8"
              initial={{ width: "0%" }}
              animate={inView ? { width: "100%" } : {}}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <motion.div
              variants={container}
              initial="hidden"
              animate="show"
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {allMembers.map((member, index) => (
                <motion.div key={member.name} variants={item} custom={index} whileHover={{ scale: 1.05 }}>
                  <Card className="bg-gray-900/50 backdrop-blur-sm border-gray-800 overflow-hidden group">
                    <div className="relative aspect-video overflow-hidden">
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                      <p className="text-yellow-400 mb-4">{member.position}</p>
                      <div className="space-y-2 mb-4">
                        <a
                          href={`mailto:${member.email}`}
                          className="flex items-center text-gray-400 hover:text-white transition-colors"
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          {member.email}
                        </a>
                        <div className="flex items-center text-gray-400">
                          <Phone className="w-4 h-4 mr-2" />
                          {member.phone}
                        </div>
                      </div>
                      <div className="space-y-2">
                        {member.qualifications.map((qual) => (
                          <div key={qual} className="flex items-center text-gray-400">
                            <Award className="w-4 h-4 mr-2 text-yellow-400" />
                            {qual}
                          </div>
                        ))}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </section> */}
        
      </div>
      <ComingSoon/>
    </div>
  )
}

