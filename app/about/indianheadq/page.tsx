// import Image from "next/image"
// import Link from "next/link"

// const instructors = [
//   {
//     id: 1,
//     name: "Master Lee",
//     role: "Head Instructor",
//     image: "/placeholder.svg?height=400&width=300",
//     description: "25+ years of experience in martial arts instruction",
//   },
//   {
//     id: 2,
//     name: "Sensei Sarah",
//     role: "Senior Instructor",
//     image: "/placeholder.svg?height=400&width=300",
//     description: "Specializes in youth programs and self-defense techniques",
//   },
//   {
//     id: 3,
//     name: "Coach Mike",
//     role: "Fitness Instructor",
//     image: "/placeholder.svg?height=400&width=300",
//     description: "Expert in combining martial arts with fitness training",
//   },
//   {
//     id: 4,
//     name: "Master Lee",
//     role: "Head Instructor",
//     image: "/placeholder.svg?height=400&width=300",
//     description: "25+ years of experience in martial arts instruction",
//   },
//   {
//     id: 5,
//     name: "Sensei Sarah",
//     role: "Senior Instructor",
//     image: "/placeholder.svg?height=400&width=300",
//     description: "Specializes in youth programs and self-defense techniques",
//   },
//   {
//     id: 6,
//     name: "Coach Mike",
//     role: "Fitness Instructor",
//     image: "/placeholder.svg?height=400&width=300",
//     description: "Expert in combining martial arts with fitness training",
//   },
// ]

// export default function AboutPage() {
//   return (
//     <div className="min-h-screen bg-white">
//       <div className="container mx-auto px-4 py-12">
//         <h1 className="text-4xl font-bold mb-8 text-gray-800">About Our Academy</h1>
//         <p className="text-xl mb-12 text-gray-600">
//           Our academy is dedicated to teaching traditional martial arts while incorporating modern training methods. We
//           focus on developing both physical skills and mental discipline.
//         </p>

//         <h2 className="text-3xl font-bold mb-6 text-gray-800">Our Instructors</h2>
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {instructors.map((instructor) => (
//             <Link key={instructor.id} href={`/about/instructors/${instructor.id}`}>
//               <div className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1">
//                 <Image
//                   src={instructor.image || "/placeholder.svg"}
//                   alt={instructor.name}
//                   width={300}
//                   height={400}
//                   className="w-full h-64 object-cover"
//                 />
//                 <div className="p-4">
//                   <h3 className="text-xl font-bold mb-2 text-gray-800">{instructor.name}</h3>
//                   <p className="text-gray-600 mb-2">{instructor.role}</p>
//                   <p className="text-gray-500">{instructor.description}</p>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { Award, Trophy, Users, BookOpen, Globe, Shield, Star, Heart } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/app/components/ui/card"



const instructors = [
  {
    id: 1,
    name: "Mr. Nitish Patra",
    role: "President",
    image: "/image2.jpg?height=400&width=300",
    description: "Mr. Nitish Patra is the President of the Shotokan Traditional Karate-Do Association. As a visionary leader, he has been instrumental in the growth and development of the association, guiding it towards excellence. His dedication to promoting traditional martial arts, fostering a strong sense of community, and upholding the core values of respect, discipline, and integrity has shaped the direction of the organization.",
  },
  {
    id: 2,
    name: "SHIHAN AMIN ALI",
    role: "General Secretary , Chairman & Founder",
    image: "/image4.jpg?height=400&width=300",
    description: "Shihan Amin Ali is the General Secretary and Chairman of the Shotokan Traditional Karate-Do Association. With a strong dedication to traditional Shotokan Karate, he leads the association in promoting excellence, discipline, and personal development. His leadership continues to inspire practitioners, guiding them to embrace the core values of respect and integrity in their karate journey..",
  },
  
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

export default function InstructorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <div className="relative h-[62vh] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/banner2.jpg?height=1080&width=1920&text=Martial+Arts+Instructors"
          alt="Martial Arts Instructors"
          fill
          className="object-cover opacity-50"
        />
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            INDIA HEAD QUARTERS
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl max-w-3xl mx-auto"
          >
            Meet the masters who will guide you on your martial arts journey
          </motion.p>
        </div>
      </div>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">Who We Are</h2>
              <p className="text-gray-400 mb-6">
                The JTK India Branch - Shotokan Traditional Karate-Do Association is the official representative of the
                Japan Traditional Karate Association (JTKA) in India. Dedicated to the practice, preservation, and
                promotion of traditional Shotokan Karate, our mission is to provide authentic training and foster a
                community of disciplined, skilled, and respectful practitioners.
              </p>
              <p className="text-gray-400">
                As a proud affiliate of JTK Japan, we follow the highest standards of karate instruction, ensuring that
                our members gain a deep understanding of the art and its philosophy.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Card className="bg-[#131B2E] border-[#1F2937]">
                <CardContent className="p-0">
                  <img
                    src="/images/image3.jpg?height=300&width=400"
                    alt="Karate training session"
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
              <Card className="bg-[#131B2E] border-[#1F2937]">
                <CardContent className="p-0">
                  <img
                    src="/images/image4.jpg?height=300&width=400"
                    alt="Karate competition"
                    className="w-full h-full object-cover"
                  />
                </CardContent>
              </Card>
              <Card className="bg-[#131B2E] border-[#1F2937] col-span-2">
                <CardContent className="p-0">
                  <img
                    src="/images/image5.jpg?height=300&width=800"
                    alt="Group training"
                    className="w-full h-48 object-cover"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
      {/* Instructors Grid */}
      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {instructors.map((instructor) => (
            <motion.div key={instructor.id} variants={item}>
              <Link href={`/about/instructors/${instructor.id}`}>
                <div className="bg-gray-800 rounded-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-lg hover:-translate-y-1 group">
                  <div className="relative w-full h-96">
                    <Image
                      src={instructor.image || "/placeholder.svg"}
                      alt={instructor.name}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-0 group-hover:opacity-100 flex items-center justify-center">
                      <ChevronRight className="w-8 h-8 text-yellow-400" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-white group-hover:text-yellow-400 transition-colors">
                      {instructor.name}
                    </h3>
                    <p className="text-yellow-400 mb-2">{instructor.role}</p>
                    <p className="text-gray-400">{instructor.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

