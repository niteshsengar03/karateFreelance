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
import { Button } from "@/app/components/ui/button";

const offerings = [
  {
    icon: BookOpen,
    title: "Comprehensive Training",
    description:
      "Covering Kihon (fundamentals), Kata (forms), and Kumite (sparring)",
  },
  {
    icon: Award,
    title: "International Certification",
    description: "Grading and ranks recognized globally under JTK standards",
  },
  {
    icon: Trophy,
    title: "Competitions",
    description:
      "Opportunities to participate in local, national, and international tournaments",
  },
  {
    icon: Users,
    title: "Seminars & Workshops",
    description:
      "Regular training events led by expert instructors from India and Japan",
  },
];

const reasons = [
  {
    icon: Shield,
    title: "Authenticity",
    description:
      "Direct affiliation with JTK Japan ensures training that adheres to traditional standards",
  },
  {
    icon: Star,
    title: "Expert Guidance",
    description:
      "Our instructors are certified and experienced, with extensive knowledge of Shotokan Karate",
  },
  {
    icon: Globe,
    title: "Global Opportunities",
    description:
      "Access to international championships, seminars, and cultural exchanges",
  },
  {
    icon: Heart,
    title: "Holistic Growth",
    description:
      "Beyond physical skills, we focus on character building, mental discipline, and personal development",
  },
];

const instructors = [
  {
    id: 1,
    name: "MASAHIKO TANAKA",
    role: "Supreme Master",
    image: "/history/mashiko.jpg?height=400&width=300",
    description:
      "Japan Traditional Karate Association (JTK) World Head Quarter Tokyo, Japan",
  },
  {
    id: 2,
    name: "YUKO TAKAHASHI  ",
    role: "President",
    image: "/history/yoko.jpg?height=400&width=300",
    description:
      "Japan Traditional Karate Association(JTK) World Head Quarter Tokyo,Japan",
  },
  {
    id: 3,
    name: "AYANO TAKAKI",
    role: "Headquarters Instructor",
    image: "/history/ayano.jpg?height=400&width=300",
    description: "",
  },
  {
    id: 4,
    name: "KATSUHIDE NAKAMURA",
    role: "Headquarters Instructor",
    image: "/history/kat.jpg?height=400&width=300",
    description: "",
  },
  {
    id: 5,
    name: "ASUKA SASA",
    role: "Headquarters Instructor",
    image: "/history/asuka.jpg?height=400&width=300",
    description: "",
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
            JAPAN
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
            Official World Headquarters of Japan Traditional Karate Association
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
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-white">
                Japan Traditional Karate Association – World Headquarters (JTK
                HQ Japan)
              </h2>
              <p className="text-gray-400 mb-4">
                The Japan Traditional Karate Association (JTK HQ Japan) is the
                global governing body of traditional Shotokan Karate. Renowned
                for preserving the art, discipline, and techniques of karate,
                JTK HQ Japan maintains the highest international standards for
                training, grading, and competitions.
              </p>
              <p className="text-gray-400 mb-4">
                Affiliated worldwide, JTK HQ Japan ensures that all its member
                associations uphold the core values of discipline, respect, and
                excellence in martial arts.
              </p>
              <p className="text-gray-400 mb-4 text-white">
                Japan World Headquarters
              </p>
              <p className="text-gray-400">
                Located in Japan, the World Headquarters serves as the central
                hub for training, seminars, grading, and international
                coordination. The facility is equipped to host world-class
                events and is the epicenter of traditional karate education.
              </p>
            </div>
            <div>
              <Card className="bg-[#131B2E] border-[#1F2937]">
                <CardContent className="p-0">
                  <img
                    src="/images/JapanseGroup.jpeg"
                    alt="Japan HQ group"
                    className="w-full h-auto object-cover"
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
                  <div className="relative h-64">
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

      {/* Our Presence & Join Us Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-6 text-white">
              Our Presence in India
            </h2>
            <p className="text-gray-400 mb-12">
              The Shotokan Traditional Karate-Do Association has a growing
              network of dojos and instructors across the country. Whether you
              are in a major city or a smaller town, we are dedicated to
              bringing traditional karate training closer to you.
            </p>

            <div className="bg-[#131B2E] p-8 rounded-lg border border-[#1F2937]">
              <h3 className="text-2xl font-bold mb-4 text-white">Join Us</h3>
              <p className="text-gray-400 mb-6">
                Be a part of the Shotokan Traditional Karate-Do Association
                family and embark on a journey of growth, discipline, and
                excellence in Shotokan Karate. Whether you are a beginner, an
                advanced practitioner, or a dojo seeking affiliation, we welcome
                you to join us.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-yellow-500 hover:bg-yellow-600 text-white">
                  Contact Us
                </Button>
                <Button className="bg-yellow-500 hover:bg-yellow-600">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
