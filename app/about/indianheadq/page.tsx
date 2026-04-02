"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight, Crown } from "lucide-react";
import {
  Award,
  Trophy,
  Users,
  BookOpen,
  Globe,
  Shield,
  Star,
  Heart,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/app/components/ui/card";

const instructors = [
  {
    id: 1,
    name: "SHIHAN TAPAN DHARA",
    role: "President",
    image: "/image2.jpg?height=400&width=300",
    description:
      "Shihan Tapan Dhara is a highly respected and senior Karate master with decades of experience in traditional Shotokan Karate. As the President of JTK India, he plays a pivotal role in providing technical guidance, discipline, and strategic leadership to the association. Known for his deep technical knowledge, traditional approach, and dedication to Karate-Do ethics, Shihan Tapan Dhara has contributed significantly to the growth of quality Karate instruction in India. His leadership ensures that Indian practitioners remain connected to authentic Japanese standards while upholding integrity, discipline, and respect within the martial arts community.",
  },
  {
    id: 2,
    name: "SHIHAN AMIN ALI",
    role: "General Secretary & Chairman",
    image: "/Shihan.jpg?height=400&width=300",
    description:
      "He is serving as the General Secretary & Chairman of Shotokan Traditional Karate-Do Association, is a dynamic Karate instructor, administrator, and organizer committed to the structured development of traditional Shotokan Karate in India. With a strong focus on organizational growth, legal compliance, transparency, and youth development, he has played a key role in strengthening the association’s national framework. Under his leadership, the association has expanded its activities in instructor education, student certification, championships, and international coordination with JTK Japan.Shihan Amin Ali is known for his disciplined approach, modern administrative vision, and dedication to maintaining the dignity and authenticity of traditional Karate-Do while creating opportunities for Indian Karateka at national and international levels.",
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

export default function InstructorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Hero Section */}
      <div className="relative h-[70vh] overflow-hidden flex items-center justify-center bg-gradient-to-b from-gray-900 to-black">
        {/* Decorative background elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-40 h-40 bg-yellow-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-40 h-40 bg-yellow-600 rounded-full blur-3xl"></div>
        </div>

        <div className="relative z-10 text-center text-white px-4">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block mb-6"
          >
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold mb-6 text-white"
          >
            INDIA NATIONAL
            <br />
            <span className="text-yellow-400">HEAD QUARTERS</span>
          </motion.h1>

          {/* Subtitle with animation */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-8"
          >
            Official National Headquarters of Shotokan Traditional Karate-Do
            Association
          </motion.p>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-transparent mx-auto"
          />
        </div>
      </div>

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-white mb-2">
              Shotokan Traditional Karate-Do Association <br />
              Affiliated to: Japan Traditional Karate Association
            </h2>
            <p className="text-gray-400 mb-6 leading-relaxed">
              The Shotokan Traditional Karate-Do Association – National
              Headquarters functions as the central governing and administrative
              body for the promotion, development, and regulation of traditional
              Shotokan Karate across India. The association is committed to
              preserving the authentic Japanese Karate-Do lineage, discipline,
              and values while nurturing technically sound and ethically strong
              practitioners nationwide.
            </p>

            <p className="text-gray-400 leading-relaxed">
              Under the guidance of experienced leadership, the organization
              works to standardize training, examinations, certifications,
              championships, and instructor development programs in alignment
              with the principles and technical framework of Japan Traditional
              Karate Association (JTK).
            </p>
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
                      className="object-contain transition-transform duration-300 group-hover:scale-105"
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
  );
}
