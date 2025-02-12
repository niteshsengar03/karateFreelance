"use client"

import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { Card } from "@/app/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { MapPin, Users, Award, Calendar } from "lucide-react"
import ComingSoon from "../components/commingsoon"

const stateMembers = [
  {
    id: 1,
    name: "Elite Martial Arts Academy",
    image: "/placeholder.svg?height=400&width=400",
    location: "New York",
    members: 250,
    achievements: ["State Champion 2023", "Best Training Center"],
    yearEstablished: 2010,
  },
  {
    id: 2,
    name: "Warrior's Path Dojo",
    image: "/placeholder.svg?height=400&width=400",
    location: "California",
    members: 300,
    achievements: ["National Tournament Host", "Community Outreach Award"],
    yearEstablished: 2008,
  },
  // Add more state members...
]

const affiliatedMembers = [
  {
    id: 1,
    name: "Dragon Warriors Dojo",
    image: "/placeholder.svg?height=400&width=400",
    location: "Toronto, Canada",
    members: 180,
    achievements: ["International Partner", "Excellence Award"],
    yearEstablished: 2015,
  },
  {
    id: 2,
    name: "Rising Sun Martial Arts",
    image: "/placeholder.svg?height=400&width=400",
    location: "Tokyo, Japan",
    members: 220,
    achievements: ["Cultural Exchange Program", "Youth Development Award"],
    yearEstablished: 2012,
  },
  // Add more affiliated members...
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

export default function MembersPage() {
  const [selectedTab, setSelectedTab] = useState("state")

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Our Network</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our extensive network of state members and affiliated dojos across the globe.
          </p>
        </motion.div>

        <Tabs defaultValue="state" value={selectedTab} onValueChange={setSelectedTab} className="w-full">
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-900/50 backdrop-blur-sm border border-gray-800">
              <TabsTrigger value="state" className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black">
                State Members
              </TabsTrigger>
              <TabsTrigger
                value="affiliated"
                className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
              >
                Affiliated Members
              </TabsTrigger>
            </TabsList>
          </div>

          {/* <AnimatePresence mode="wait">
            <TabsContent value="state" className="mt-0">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {stateMembers.map((member) => (
                  <motion.div key={member.id} variants={item}>
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
                        <h3 className="text-xl font-bold text-white mb-4">{member.name}</h3>
                        <div className="space-y-3 text-gray-400">
                          <div className="flex items-center">
                            <MapPin className="w-5 h-5 mr-2 text-yellow-400" />
                            {member.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-5 h-5 mr-2 text-yellow-400" />
                            {member.members} Active Members
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-5 h-5 mr-2 text-yellow-400" />
                            Est. {member.yearEstablished}
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-800">
                          <div className="text-sm font-semibold text-gray-400 mb-2">Achievements</div>
                          <div className="space-y-1">
                            {member.achievements.map((achievement) => (
                              <div key={achievement} className="flex items-center text-sm text-gray-500">
                                <Award className="w-4 h-4 mr-2 text-yellow-400" />
                                {achievement}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="affiliated" className="mt-0">
              <motion.div
                variants={container}
                initial="hidden"
                animate="show"
                exit={{ opacity: 0, transition: { duration: 0.2 } }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
              >
                {affiliatedMembers.map((member) => (
                  <motion.div key={member.id} variants={item}>
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
                        <h3 className="text-xl font-bold text-white mb-4">{member.name}</h3>
                        <div className="space-y-3 text-gray-400">
                          <div className="flex items-center">
                            <MapPin className="w-5 h-5 mr-2 text-yellow-400" />
                            {member.location}
                          </div>
                          <div className="flex items-center">
                            <Users className="w-5 h-5 mr-2 text-yellow-400" />
                            {member.members} Active Members
                          </div>
                          <div className="flex items-center">
                            <Calendar className="w-5 h-5 mr-2 text-yellow-400" />
                            Est. {member.yearEstablished}
                          </div>
                        </div>
                        <div className="mt-4 pt-4 border-t border-gray-800">
                          <div className="text-sm font-semibold text-gray-400 mb-2">Achievements</div>
                          <div className="space-y-1">
                            {member.achievements.map((achievement) => (
                              <div key={achievement} className="flex items-center text-sm text-gray-500">
                                <Award className="w-4 h-4 mr-2 text-yellow-400" />
                                {achievement}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </AnimatePresence> */}
          
        </Tabs>
      </div>
      <ComingSoon/>
    </div>
  )
}

