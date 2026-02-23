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

          {/* New Alternating Layout */}
          <AnimatePresence mode="wait">
            <TabsContent value="state" className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {stateMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center"
                  >
                    {/* Image - Big Left Side */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative group md:col-span-1"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-yellow-400/30 bg-gray-900 w-72 md:w-80">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>

                    {/* Text Content - Small Right Side */}
                    <motion.div className="md:col-span-2">
                      <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-lg p-4">
                        <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                        <div className="w-6 h-0.5 bg-yellow-400 mb-2"></div>
                        
                        <div className="space-y-1.5 text-gray-300 mb-2">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                            <span className="text-xs">{member.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                            <span className="text-xs">{member.members} Members</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                            <span className="text-xs">Est. {member.yearEstablished}</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-gray-700">
                          <h4 className="text-xs font-semibold text-yellow-400 mb-1 uppercase tracking-wider">Achievements</h4>
                          <div className="space-y-0.5">
                            {member.achievements.slice(0, 1).map((achievement) => (
                              <div key={achievement} className="flex items-start gap-1.5">
                                <Award className="w-2 h-2 text-yellow-400 flex-shrink-0 mt-0.5" />
                                <span className="text-xs text-gray-400">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>

            <TabsContent value="affiliated" className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {affiliatedMembers.map((member, index) => (
                  <motion.div
                    key={member.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-0 items-center"
                  >
                    {/* Image - Big Left Side */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="relative group md:col-span-1"
                    >
                      <div className="relative aspect-square overflow-hidden rounded-lg border-2 border-yellow-400/30 bg-gray-900 w-72 md:w-80">
                        <Image
                          src={member.image || "/placeholder.svg"}
                          alt={member.name}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>

                    {/* Text Content - Right Side - Compact */}
                    <motion.div className="md:col-span-2">
                      <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-lg p-4">
                        <h3 className="text-lg font-bold text-white mb-1">{member.name}</h3>
                        <div className="w-6 h-0.5 bg-yellow-400 mb-2"></div>
                        
                        <div className="space-y-1.5 text-gray-300 mb-2">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                            <span className="text-xs">{member.location}</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Users className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                            <span className="text-xs">{member.members} Members</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                            <span className="text-xs">Est. {member.yearEstablished}</span>
                          </div>
                        </div>

                        <div className="pt-2 border-t border-gray-700">
                          <h4 className="text-xs font-semibold text-yellow-400 mb-1 uppercase tracking-wider">Achievements</h4>
                          <div className="space-y-0.5">
                            {member.achievements.slice(0, 1).map((achievement) => (
                              <div key={achievement} className="flex items-start gap-1.5">
                                <Award className="w-2 h-2 text-yellow-400 flex-shrink-0 mt-0.5" />
                                <span className="text-xs text-gray-400">{achievement}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </motion.div>
            </TabsContent>
          </AnimatePresence>
        </Tabs>
      </div>
    </div>
  )
}

