"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { Send, MapPin, Phone, Mail, PlayCircle, PhoneCall } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Navigation } from "@/app/components/navigation"
import { ParallaxSection } from "@/app/components/parallax-section"
import { AnimatedCounter } from "@/app/components/animated-counter"
import { FloatingElements } from "@/app/components/floating-elements"
import { EventCard } from "@/app/components/event-card"
import { ParallaxHero } from "@/app/components/parallax-hero"
// import { DynamicBackground } from "@/app/components/dynamic-background"
import { FeatureCard } from "@/app/components/feature-card"
import { TechniqueShowcase } from "@/app/components/technique-showcase"
import { Input } from "@/app/components/ui/input"
import { Textarea } from "@/app/components/ui/textarea"
import { LogoBanner } from "./components/logo-banner"

const teamMembers = [
  {
    image: "/image2.jpg?height=400&width=300",
    name: "Mr.NITESH PATRA",
    post: "President",
  },
  {
    image: "/image3.jpg?height=600&width=300",
    name: "SHIHAN AMIN ALI",
    post: "General Secretary , Chairman & Founder",
  },
]

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* <DynamicBackground /> */}

      {/* Header */}
      <header className="fixed top-0 w-full bg-black/90 text-white z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-20">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
              <Image
                src="/home_image.jpg"
                alt="Threshold Martial Arts Logo"
                width={150}
                height={50}
                className="h-12 w-auto"
              />
            </motion.div>
            <Navigation />
          </div>
        </div>
      </header>

      {/* Hero Section with Parallax */}
      <ParallaxHero />

      {/* Animated Counter Section */}
      <section className="py-16 bg-black text-white relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <AnimatedCounter value={1000} label="Students Trained" />
            <AnimatedCounter value={20} label="Years of Experience" />
            <AnimatedCounter value={35} label="Expert Instructors" />
            <AnimatedCounter value={50} label="Awards Won" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      {/* <section className="py-16 bg-gray-100 relative z-10">
  <div className="container mx-auto px-4">
    <h2 className="text-3xl font-bold text-center mb-12">Our Programs</h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-center">
      {[
        { title: "TINY TIGERS", image: "/coming-soon.png" },
        { title: "SUMMER LEADERSHIP", image: "/coming-soon.png" },
        { title: "ADULT", image: "/coming-soon.png" },
      ].map((feature, i) => (
        <div key={feature.title} className="bg-white shadow-lg rounded-lg overflow-hidden text-center p-6">
          <img
            src={feature.image} 
            alt={feature.title} 
            className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
          />
          <h3 className="text-xl font-semibold mt-4">{feature.title}</h3>
        </div>
      ))}
    </div>
  </div>
</section> */}


      {/* Parallax Section */}
      <ParallaxSection />

      {/* Technique Showcase */}
      <TechniqueShowcase />

      {/* About Section with Video */}
      <section className="py-16 relative z-10">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Shotokan Karate</h2>
              <p className="text-gray-600 mb-4">
              It is a traditional Japanese martial art founded by Gichin Funakoshi. It emphasizes strong stances, powerful strikes, and precise movements, focusing on kihon (basics), kata (forms), and kumite (sparring). 
              </p>
              <p className="text-gray-600">
              Known for its deep stances and linear techniques, Shotokan develops discipline, speed, and power.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden group"
            >
              <Image
                src="/image1.jpg?height=400&width=800&text=Martial+Arts+Video"
                alt="Martial Arts Video"
                width={800} // Increased width
                height={533} // Maintain aspect ratio
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-900 text-white relative z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Watch Us in Action
          </motion.h2>
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden group"
            >
            <video 
              src="/video-thumbnail.mp4" 
              poster="images/banner3.jpg" 
              className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-10"
              controls
            />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Instructors Section */}
      <section className="py-16 bg-gray-900 text-white relative z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            MEET OUR LEADERS
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center space-y-4">
                <div className="relative w-full aspect-[4/4] overflow-hidden rounded-lg">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-bold">{member.name}</h3>
                <h3 className="font-bold text-yellow-500 ">{member.post}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Logo Showcase */}
      <LogoBanner />
      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden z-10">
        <FloatingElements />
        <div className="container mx-auto px-4 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-5xl font-bold mb-8"
          >
            Start Your Journey Today
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
          >
            Join our community and discover the transformative power of martial arts
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600" 
            onClick={() => window.open("https://forms.gle/7TArc6KcGSptMWhk8", "_blank")}
            >
             CONTACT US
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-black relative z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-white text-center mb-12"
          >
            PHOTO GALLERY
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
            <motion.div
              initial={{
                opacity: 0,
              }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="relative md:col-span-2 md:row-span-2 group"
            >
              <Image
                src="/gallary1.jpg?height=600&width=800"
                alt="Gallery Image 1"
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <Image
                src="/gallary2.jpg?height=500&width=400"
                alt="Gallery Image 2"
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <div className="relative w-[320px] h-[420px] group">
                <Image
                  src="/gallary3.jpg"
                  alt="Gallery Image 3"
                  width={320}
                  height={420}
                  className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <Image
                src="/gallary4.jpg?height=300&width=400"
                alt="Gallery Image 4"
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
              className="relative group"
            >
              <Image
                src="/gallary5.jpg?height=300&width=400"
                alt="Gallery Image 5"
                fill
                className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Upcoming Events Section */}
      {/* <section className="py-16 bg-gray-100 relative z-10">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            UPCOMING EVENTS
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "National Tournament",
                date: "Yet to be announced",
                description: "Annual tournament all levels",
              },
              {
                title: " Open Tournament",
                date: "Yet to be announced",
                description: "Annual tournament all levels",
              },
              {
                title: "Karate Training Camp",
                date: "Yet to be announced",
                description: "Special workshop focusing on practical self-defense techniques",
              },
            ].map((event, index) => (
              <EventCard key={event.title} {...event} index={index} />
            ))}
          </div>
        </div>
      </section> */}
      {/* <section className="py-16 bg-gray-100 relative z-10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          UPCOMING EVENTS
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "National Tournament",
              date: "Yet to be announced",
              description: "Annual tournament all levels",
            },
            {
              title: "Open Tournament",
              date: "Yet to be announced",
              description: "Annual tournament all levels",
            },
            {
              title: "Karate Training Camp",
              date: "Yet to be announced",
              description: "Special workshop focusing on practical self-defense techniques",
            },
          ].map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
              <p className="text-gray-600 mb-1">{event.date}</p>
              <p className="text-gray-700 mb-4">{event.description}</p>
              <div className="flex items-center gap-2 text-blue-600 font-medium">
                <PhoneCall className="w-5 h-5" />
                <a href="tel:+919876543210" className="hover:underline">
                  Call Now: +91 9830451446
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section> */}
    <section className="py-16 bg-white relative z-10">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center text-black-400 mb-12"
        >
          🚀 UPCOMING EVENTS
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "National Tournament",
              date: "Yet to be announced",
              description: "Annual tournament for all skill levels.",
            },
            {
              title: "Open Tournament",
              date: "Yet to be announced",
              description: "Competitive event open to all participants.",
            },
            {
              title: "Karate Training Camp",
              date: "Yet to be announced",
              description: "Special workshop focusing on self-defense.",
            },
          ].map((event, index) => (
            <motion.div
              key={event.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-yellow-500 to-yellow-300 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 text-black"
            >
              <h3 className="text-2xl font-semibold mb-3">{event.title}</h3>
              <p className="text-gray-800 text-lg mb-2">{event.date}</p>
              <p className="text-gray-900 mb-6">{event.description}</p>
              <div className="flex justify-center items-center gap-3">
                <a
                  href="tel:+919830451446"
                  className="bg-black text-yellow-400 px-4 py-2 rounded-full font-semibold hover:bg-gray-900 transition duration-300"
                >
                  📞 Call Now: +91 9830451446
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

      {/* Contact Us Section */}
      <section  id="contact" className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative z-10 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-12"
          >
            Contact Us
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
              <p className="text-gray-300 mb-8">
                Have questions about our programs or want to start your martial arts journey? We're here to help!
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-yellow-400" />
                  <span>18/2/2 Benod Behari Aditya Lane , BAKSARA Howrah,Pin - 711110</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-yellow-400" />
                  <span>(+91) 9830451446</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-yellow-400" />
                  <span>stkaindia@gmail.com</span>
                </div>
              </div>
            </motion.div>
            {/* <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <form className="space-y-6 bg-gray-800 p-8 rounded-lg shadow-lg">
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                      Name
                    </label>
                    <Input id="name" name="name" required className="bg-gray-700 text-white border-gray-600" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      className="bg-gray-700 text-white border-gray-600"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                    Subject
                  </label>
                  <Input id="subject" name="subject" required className="bg-gray-700 text-white border-gray-600" />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    required
                    className="bg-gray-700 text-white border-gray-600"
                  />
                </div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button type="submit" className="w-full bg-yellow-500 hover:bg-yellow-600 text-black">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </motion.div>
              </form>
            </motion.div> */}
          </div>
        </div>
      </section>

      {/* Web Specials Section */}
      <section className="bg-yellow-400 relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">SHOTOKAN TRADITIONAL
            KARATE-DO ASSOCIATION</h2>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <span className="font-bold text-center md:text-left">FOR ENQUIRY</span>
              <Button variant="destructive">stkaindia@gmail.com</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

