"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import { Card } from "@/app/components/ui/card";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/app/components/ui/tabs";
import { MapPin, Users, Award, Calendar } from "lucide-react";
import ComingSoon from "../components/commingsoon";

const stateMembers = [
  {
    id: 1,
    name: "Sensei Mrinmoy Acharya",
    image: "/stateAffliated/SenseiMrinmoyAcharya.jpg?height=400&width=400",
    position: "General Secretary",
    achievements: ["Shotokan Traditional Karate-Do Association (West Bengal)"],
  },
  {
    id: 2,
    name: "Sensei MD Ali Raza",
    image: "/stateAffliated/SenseiMdAliRaza.jpg?height=400&width=400",
    position: "President",
    achievements: ["Shotokan Traditional Karate-Do Association (Jharkhand)"],
  },
  {
    id: 3,
    name: "Sensei Imyuangdang",
    image: "/stateAffliated/Senseiimyuangdang.jpg?height=400&width=400",
    position: "President",
    achievements: ["Shotokan Traditional Karate-Do Association (Nagaland)"],
  },
];

// add future affiliated Members Here
// const affiliatedMembers = [
//   // {
//   //   id: 1,
//   //   name: "Dragon Warriors Dojo",
//   //   image: "/placeholder.svg?height=400&width=400",
//   //   location: "Toronto, Canada",
//   //   // members: 180,
//   //   achievements: ["International Partner", "Excellence Award"],
//   //   yearEstablished: 2015,
//   // },
//   // {
//   //   id: 2,
//   //   name: "Rising Sun Martial Arts",
//   //   image: "/placeholder.svg?height=400&width=400",
//   //   location: "Tokyo, Japan",
//   //   members: 220,
//   //   achievements: ["Cultural Exchange Program", "Youth Development Award"],
//   //   yearEstablished: 2012,
//   // },
//   // Add more affiliated members...
// ]

const affiliatedMembers = [
  {
    id: 1,
    name: "Shihan Amin Ali",
    image: "/groupAffiliated/Shihan Amin Ali.jpeg?height=400&width=400",
    location: "",
    members: null,
    achievements: ["Elite Shotokan Karate Academy"],
    yearEstablished: null,
  },
  {
    id: 2,
    name: "Shihan Tapan Dhara",
    image: "/groupAffiliated/Shihan Tapan Dhara.jpeg?height=400&width=400",
    location: "",
    members: null,
    achievements: ["Indian Traditional Karate Academy"],
    yearEstablished: null,
  },
  {
    id: 3,
    name: "Shihan Debnath Chakraborty",
    image:
      "/groupAffiliated/SHIHAN DEBNATH CHAKRABORTY .jpg?height=400&width=400",
    location: "",
    members: null,
    achievements: ["Bengal Shotokan Karate Academy"],
    yearEstablished: null,
  },
  {
    id: 4,
    name: "Sensei Trideep Kumar Maji",
    image:
      "/groupAffiliated/Sensei Trideep Kumar Maji.jpeg?height=400&width=400",
    location: "",
    members: null,
    achievements: ["Trideep Karate Academy"],
    yearEstablished: null,
  },
  {
    id: 5,
    name: "Sensei Inzul Haque",
    image: "/groupAffiliated/Sensei Inzul Haque.jpeg?height=400&width=400",
    location: "",
    members: null,
    achievements: ["Inzul's Karate Academy"],
    yearEstablished: null,
  },
  {
    id: 6,
    name: "Sensei Bhabesh Dalui",
    image: "/groupAffiliated/Sensei Bhabesh Dalui.jpeg?height=400&width=400",
    location: "",
    members: null,
    achievements: ["Bhabesh Karate Academy"],
    yearEstablished: null,
  },
  {
    id: 7,
    name: "Sensei Subhas Pandit",
    image: "/groupAffiliated/Sensei Subhas Pandit.jpeg?height=400&width=400",
    location: "",
    members: null,
    achievements: ["Subhas Karate Academy"],
    yearEstablished: null,
  },
  {
    id: 8,
    name: "Sensei Pratik Naskar",
    image: "/groupAffiliated/Sensei Pratik Naskar.jpeg?height=400&width=400",
    location: "",
    members: null,
    achievements: ["Pratik Karate Academy - South 24 Parganas"],
    yearEstablished: null,
  },
  {
    id: 9,
    name: "Sensei MD Hasanur Khan",
    image: "/groupAffiliated/Sensei MD Hasanur Khan.jpeg?height=400&width=400",
    location: "",
    members: null,
    achievements: ["HK Shotokan Karate-Do School"],
    yearEstablished: null,
  },
  {
    id: 10,
    name: "Sensei Ayan Adhikary",
    image: "/groupAffiliated/Sensei Ayan Adhikary.jpeg?height=400&width=400",
    location: "",
    members: null,
    achievements: ["Ayan's Institute of Karate"],
    yearEstablished: null,
  },
  {
    id: 11,
    name: "Sensei Somnath Kari",
    image: "/groupAffiliated/Sensei Somnath Kari.jpeg?height=400&width=400",
    location: "",
    members: null,
    achievements: ["Somnath Karate & Fitness Academy"],
    yearEstablished: null,
  },
  {
    id: 12,
    name: "Sensei Surajit Mondal",
    image: "/groupAffiliated/Sensei Surajit Mondal.jpeg?height=400&width=400",
    location: "",
    members: null,
    achievements: ["Surajit Shotokan School of Karate"],
    yearEstablished: null,
  },
  {
    id: 13,
    name: "Shihan Mrinmoy Acharya",
    image: "/groupAffiliated/Shihan Mrinmoy Acharya.jpeg?height=400&width=400",
    location: "",
    members: null,
    achievements: ["Aryan Self Defence and Karate Academy"],
    yearEstablished: null,
  },
  {
    id: 14,
    name: "Shihan Dudhkumar Samantha",
    image:
      "/groupAffiliated/SHIHAN DUDHKUMAR SAMANTA.jpg?height=400&width=400",
    location: "",
    members: null,
    achievements: ["Jaugaur Karate Association of Indian"],
    yearEstablished: null,
  },
  {
    id: 15,
    name: "Shihan Rajkumar Bag",
    image: "/groupAffiliated/SHIHAN RAJKUMAR BAG .jpg?height=400&width=400",
    location: "",
    members: null,
    achievements: ["Tatarkhan Tiger Karate Club"],
    yearEstablished: null,
  },
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function MembersPage() {
  const [selectedTab, setSelectedTab] = useState("state");

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900 pt-24">
      <div className="container mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Network
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Discover our extensive network of state members and affiliated dojos
            across the globe.
          </p>
        </motion.div>

        <Tabs
          defaultValue="state"
          value={selectedTab}
          onValueChange={setSelectedTab}
          className="w-full"
        >
          <div className="flex justify-center mb-8">
            <TabsList className="bg-gray-900/50 backdrop-blur-sm border border-gray-800">
              <TabsTrigger
                value="state"
                className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
              >
                State Affliated
              </TabsTrigger>
              <TabsTrigger
                value="affiliated"
                className="data-[state=active]:bg-yellow-400 data-[state=active]:text-black"
              >
                Group Affliated
              </TabsTrigger>
            </TabsList>
          </div>

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
                    key={`state-${member.id}`}
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
                          className="object-contain bg-white transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>

                    {/* Text Content - Small Right Side */}
                    <motion.div className="md:col-span-2">
                      <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-lg p-4">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {member.name}
                        </h3>
                        <div className="w-6 h-0.5 bg-yellow-400 mb-2"></div>

                        <div className="space-y-1.5 text-gray-300 mb-2">
                          <div className="flex items-center gap-2">
                            {/* <MapPin className="w-3 h-3 text-yellow-400 flex-shrink-0" /> */}
                            <span className="text-xs">{member.position}</span>
                          </div>
                          {/* <div className="flex items-center gap-2">
                            <Users className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                            <span className="text-xs">{member.members} Members</span>
                          </div> */}
                          {/* <div className="flex items-center gap-2">
                            <Calendar className="w-3 h-3 text-yellow-400 flex-shrink-0" />
                            <span className="text-xs">Est. {member.yearEstablished}</span>
                          </div> */}
                        </div>

                        <div className="pt-2 border-t border-gray-700">
                          <h4 className="text-xs font-semibold text-yellow-400 mb-1 uppercase tracking-wider">
                            Location
                          </h4>
                          <div className="space-y-0.5">
                            {member.achievements
                              .slice(0, 1)
                              .map((achievement, ai) => (
                                <div
                                  key={`state-${member.id}-ach-${ai}`}
                                  className="flex items-start gap-1.5"
                                >
                                  <Award className="w-2 h-2 text-yellow-400 flex-shrink-0 mt-0.5" />
                                  <span className="text-xs text-gray-400">
                                    {achievement}
                                  </span>
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

            <TabsContent key="affiliated" value="affiliated" className="mt-0">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="space-y-12"
              >
                {affiliatedMembers.map((member, index) => (
                  <motion.div
                    key={`affiliated-${member.id}`}
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
                          className="object-contain bg-white transition-transform duration-500 group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                    </motion.div>

                    {/* Text Content - Right Side - Compact */}
                    <motion.div className="md:col-span-2">
                      <div className="bg-gray-900/50 backdrop-blur-sm border border-yellow-400/20 rounded-lg p-4">
                        <h3 className="text-lg font-bold text-white mb-1">
                          {member.name}
                        </h3>
                        <div className="w-6 h-0.5 bg-yellow-400 mb-2"></div>

                        <div className="space-y-1.5 text-gray-300 mb-2"></div>

                        <div className="pt-2 border-t border-gray-700">
                          <h4 className="text-xs font-semibold text-yellow-400 mb-1 uppercase tracking-wider">
                            Instructor-In-Charge
                          </h4>
                          <div className="space-y-0.5">
                            {member.achievements
                              .slice(0, 1)
                              .map((achievement, ai) => (
                                <div
                                  key={`affiliated-${member.id}-ach-${ai}`}
                                  className="flex items-start gap-1.5"
                                >
                                  <Award className="w-2 h-2 text-yellow-400 flex-shrink-0 mt-0.5" />
                                  <span className="text-xs text-gray-400">
                                    {achievement}
                                  </span>
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
  );
}
