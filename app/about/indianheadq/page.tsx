"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
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
      <div className="relative h-[62vh] overflow-hidden flex items-center justify-center">
        {/* <Image
          src="/images/banner2.jpg?height=1080&width=1920&text=Martial+Arts+Instructors"
          alt="Martial Arts Instructors"
          fill
          className="object-cover opacity-50"
        /> */}
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            INDIA NATIONAL HEAD QUARTERS
          </motion.h1>
        </div>
      </div>
      {/* <section className="py-16">
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
                    className="w-full h-48 object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section> */}

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
