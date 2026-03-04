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
    role: "Supreme Master : 8th Dan Black Belt",
    image: "/history/mashiko.jpg?height=400&width=300",
    description:
      "He is a renowned master known as Hasha for his power and trust. A winner of the All Japan Karatedo Championships and IAKF World Championship, he has played a key role in spreading traditional Karate worldwide. As a respected instructor, he emphasizes discipline, respect, and personal growth, inspiring generations of Karate practitioners.",
  },
  {
    id: 2,
    name: "YUKO TAKAHASHI  ",
    role: "President : 7th Dan Black Belt",
    image: "/history/yoko.jpg?height=400&width=300",
    description:
      "She is celebrated for her expertise, dedication, and contributions to the Karate community. As a respected instructor, she is committed to preserving traditional values while fostering discipline, respect, and personal growth. Her teachings inspire students to reach their full potential in both Karate and life, making a lasting impact on practitioners worldwide.",
  },
  // {
  //   id: 3,
  //   name: "MINORU KAWAWADA",
  //   role: "Technical Advisor : 8th Dan Black Belt",
  //   image: "/history/minoro.jpeg?height=400&width=300",
  //   description: "He is renowned for his leadership, dedication, and contributions to the Karate community. As the owner of Hoitsukan Dojo and head of Kawawada Dojo, he preserves traditional values while promoting discipline, respect, and personal growth. His teachings inspire students to embrace the true spirit of Karate, making a lasting impact on practitioners worldwide.",
  // },
  {
    id: 3,
    name: "AYANO TAKAKI",
    role: "Headquarters Instructor",
    image: "/history/ayano.jpg?height=400&width=300",
    description:
      "She is a skilled and respected Shotokan Karate practitioner, is known for her dedication to teaching and promoting the core values of discipline, respect, and perseverance. While not as widely recognized as some, her commitment to the martial art has made a lasting impact on her students and the broader Karate community.",
  },
  {
    id: 4,
    name: "KATSUHIDE NAKAMURA",
    role: "Headquarters Instructor",
    image: "/history/kat.jpg?height=400&width=300",
    description:
      "He is a prominent figure in the Japan Traditional Karate Association (JTKA), is highly respected for his contributions to Shotokan Karate. His leadership has helped preserve and promote the authentic teachings of Karate, focusing on discipline, respect, and personal growth.He inspires practitioners worldwide. ",
  },
  {
    id: 5,
    name: "ASUKA SASA",
    role: "Headquarters Instructor",
    image: "/history/asuka.jpg?height=400&width=300",
    description:
      "She is a skilled Shotokan Karate practitioner, is known for her technical proficiency and dedication to traditional Karate values. She emphasizes discipline, respect, and perseverance, inspiring students and preserving the rich traditions of Shotokan Karate.Her commitment continues to shape and influence the Karate community.",
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
      <div className="relative h-[70vh] overflow-hidden flex items-center justify-center">
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
            JAPAN HEAD QUARTERS
          </motion.h1>
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

      {/* Vision & Mission Section */}
      {/* <section className="py-16 bg-[#131B2E]">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-[#0B1120] border-[#1F2937]">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Our Vision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">
                  Our vision is to spread the values of traditional karate across India, nurturing individuals who excel
                  both on and off the mat.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-[#0B1120] border-[#1F2937]">
              <CardHeader>
                <CardTitle className="text-2xl text-white">Our Mission</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc list-inside space-y-2 text-gray-400">
                  <li>Provide authentic Shotokan Karate training aligned with JTKA standards.</li>
                  <li>Develop disciplined and skilled karateka who embody respect, perseverance, and humility.</li>
                  <li>Promote the cultural and philosophical essence of traditional Japanese karate.</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section> */}

      {/* What We Offer Section */}
      {/* <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">What We Offer</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {offerings.map((offering, index) => (
              <Card key={index} className="bg-[#131B2E] border-[#1F2937]">
                <CardHeader>
                  <offering.icon className="w-10 h-10 mb-4 text-yellow-400" />
                  <CardTitle className="text-xl text-white">{offering.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{offering.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}
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
      {/* Why Choose Us Section */}
      {/* <section className="py-16 bg-[#131B2E]">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Why Choose Shotokan Traditional Karate-Do Association?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <Card key={index} className="bg-[#0B1120] border-[#1F2937]">
                <CardHeader>
                  <reason.icon className="w-10 h-10 mb-4 text-yellow-400" />
                  <CardTitle className="text-xl text-white">
                    {reason.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-400">{reason.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

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
