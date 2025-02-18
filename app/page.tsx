// "use client"

// import { motion } from "framer-motion"
// import Image from "next/image"
// import {
//   MapPin,
//   Phone,
//   Mail,
//   Award,
//   CheckCircle,
//   Globe,
//   Users,
//   Shield,
//   Trophy,
//   Info,
//   Globe2,
//   Map,
//   Crown,
// } from "lucide-react"
// import { Button } from "@/app/components/ui/button"
// import { Card, CardContent } from "@/app/components/ui/card"
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
// import { Navigation } from "@/app/components/navigation"
// import { ParallaxSection } from "@/app/components/parallax-section"
// import { AnimatedCounter } from "@/app/components/animated-counter"
// import { FloatingElements } from "@/app/components/floating-elements"
// import { ParallaxHero } from "@/app/components/parallax-hero"
// import { TechniqueShowcase } from "@/app/components/technique-showcase"
// import { LogoBanner } from "./components/logo-banner"

// const teamMembers = [
//   {
//     image: "/image2.jpg?height=400&width=300",
//     name: "Mr.NITESH PATRA",
//     post: "President",
//   },
//   {
//     image: "/image3.jpg?height=600&width=300",
//     name: "SHIHAN AMIN ALI",
//     post: "General Secretary , Chairman & Founder",
//   },
// ]

// export default function Home() {
//   return (
//     <div className="min-h-screen bg-white">
//       {/* <DynamicBackground /> */}

//       {/* Header */}
//       <header className="fixed top-0 w-full bg-black/90 text-white z-50">
//         <div className="container mx-auto px-4">
//           <div className="flex items-center justify-between h-20">
//             <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5 }}>
//               <Image
//                 src="/home_image.jpg"
//                 alt="Threshold Martial Arts Logo"
//                 width={150}
//                 height={50}
//                 className="h-12 w-auto"
//               />
//             </motion.div>
//             <Navigation />
//           </div>
//         </div>
//       </header>

//       {/* Hero Section with Parallax */}
//       <ParallaxHero />

//       {/* Animated Counter Section */}
//       <section className="py-16 bg-black text-white relative z-10">
//         <div className="container mx-auto px-4">
//           <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
//             <AnimatedCounter value={1000} label="Students Trained" />
//             <AnimatedCounter value={20} label="Years of Experience" />
//             <AnimatedCounter value={35} label="Expert Instructors" />
//             <AnimatedCounter value={50} label="Awards Won" />
//           </div>
//         </div>
//       </section>

//       {/* Parallax Section */}
//       <ParallaxSection />

//       {/* Technique Showcase */}
//       <TechniqueShowcase />

//       {/* About Section with Video */}
//       <section className="py-16 relative z-10">
//         <div className="container mx-auto px-4">
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//             >
//               <h2 className="text-3xl font-bold mb-4">Shotokan Karate</h2>
//               <p className="text-gray-600 mb-4">
//                 It is a traditional Japanese martial art founded by Gichin Funakoshi. It emphasizes strong stances,
//                 powerful strikes, and precise movements, focusing on kihon (basics), kata (forms), and kumite
//                 (sparring).
//               </p>
//               <p className="text-gray-600">
//                 Known for its deep stances and linear techniques, Shotokan develops discipline, speed, and power.
//               </p>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0, x: 20 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className="relative aspect-video bg-gray-200 rounded-lg overflow-hidden group"
//             >
//               <Image
//                 src="/image1.jpg?height=400&width=800&text=Martial+Arts+Video"
//                 alt="Martial Arts Video"
//                 width={800} // Increased width
//                 height={533} // Maintain aspect ratio
//                 className="object-cover"
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Video Section */}
//       <section className="py-16 bg-gray-900 text-white relative z-10">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold text-center mb-12"
//           >
//             Watch Us in Action
//           </motion.h2>
//           <div className="max-w-4xl mx-auto">
//             <motion.div
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className="relative aspect-video bg-gray-800 rounded-lg overflow-hidden group"
//             >
//               <video
//                 src="/video-thumbnail.mp4"
//                 poster="images/banner3.jpg"
//                 className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-10"
//                 controls
//               />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Instructors Section */}
//       <section className="py-16 bg-gray-900 text-white relative z-10">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold text-center mb-12"
//           >
//             MEET OUR LEADERS
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-3xl mx-auto">
//             {teamMembers.map((member, index) => (
//               <div key={index} className="flex flex-col items-center space-y-4">
//                 <div className="relative w-full aspect-[4/4] overflow-hidden rounded-lg">
//                   <Image
//                     src={member.image || "/placeholder.svg"}
//                     alt={member.name}
//                     fill
//                     className="object-cover hover:scale-105 transition-transform duration-300"
//                   />
//                 </div>
//                 <h3 className="font-bold">{member.name}</h3>
//                 <h3 className="font-bold text-yellow-500 ">{member.post}</h3>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Logo Showcase */}
//       <LogoBanner />
//       {/* Memberships and Affiliations Section */}
//       <section className="py-24 bg-gradient-to-b from-white to-gray-100 relative z-10 overflow-hidden">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-4xl font-bold text-center mb-16 text-gray-800"
//           >
//             Our Prestigious Memberships & Affiliations
//           </motion.h2>

//           <Tabs defaultValue="overview" className="w-full">
//             <TabsList className="w-full justify-center mb-8">
//               <TabsTrigger value="overview">Overview</TabsTrigger>
//               <TabsTrigger value="jtk">JTK</TabsTrigger>
//               <TabsTrigger value="kio">KIO</TabsTrigger>
//               <TabsTrigger value="government">Government Trust</TabsTrigger>
//             </TabsList>

//             <TabsContent value="overview">
//               <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
//                 <AffiliationCard
//                   icon={<Globe className="w-12 h-12 text-blue-500" />}
//                   title="International Reach"
//                   description="Connected to global karate organizations, ensuring world-class training standards."
//                 />
//                 <AffiliationCard
//                   icon={<Users className="w-12 h-12 text-green-500" />}
//                   title="Community"
//                   description="Part of a vast network of karate practitioners and experts worldwide."
//                 />
//                 <AffiliationCard
//                   icon={<Shield className="w-12 h-12 text-red-500" />}
//                   title="Credibility"
//                   description="Recognized by official bodies, validating our expertise and methods."
//                 />
//                 <AffiliationCard
//                   icon={<Award className="w-12 h-12 text-yellow-500" />}
//                   title="Excellence"
//                   description="Committed to maintaining the highest standards in Shotokan Karate."
//                 />
//               </div>
//             </TabsContent>

//             <TabsContent value="jtk">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-white p-8 rounded-lg shadow-lg"
//               >
//                 <div className="grid md:grid-cols-2 gap-8 items-start">
//                   <div>
//                     <div className="flex items-center gap-4 mb-6">
//                       <Trophy className="w-12 h-12 text-yellow-500" />
//                       <h3 className="text-2xl font-semibold">Japan Traditional Karate Association (JTK)</h3>
//                     </div>
//                     <p className="text-gray-700 mb-4">
//                       As an Affiliated Member of JTK HQ Japan, we are part of an international Shotokan organization
//                       with worldwide branches. This affiliation ensures that our training is deeply rooted in authentic
//                       Shotokan traditions.
//                     </p>
//                     <ul className="list-disc list-inside text-gray-700">
//                       <li>Access to international training resources</li>
//                       <li>Participation in global JTK events and tournaments</li>
//                       <li>Direct connection to the birthplace of Shotokan Karate</li>
//                     </ul>
//                   </div>
//                   <motion.div
//                     initial={{ opacity: 0, scale: 0.95 }}
//                     animate={{ opacity: 1, scale: 1 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                     className="relative aspect-[3/4] w-full max-w-md mx-auto"
//                   >
//                     <Image
//                       src="/affilation-certificate.jpg"
//                       alt="JTK Affiliation Certificate"
//                       fill
//                       className="object-contain rounded-lg shadow-lg"
//                       priority
//                     />
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </TabsContent>

//             <TabsContent value="kio">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-white p-8 rounded-lg shadow-lg"
//               >
//                 <div className="flex items-center gap-4 mb-6">
//                   <Trophy className="w-12 h-12 text-yellow-500" />
//                   <h3 className="text-2xl font-semibold">Karate India Organisation (KIO)</h3>
//                 </div>
//                 <p className="text-gray-700 mb-8 flex items-center gap-2">
//                   <Info className="w-5 h-5 text-blue-500 flex-shrink-0" />
//                   As an Associate Member of KIO, we are connected to a broader network of karate organizations. KIO's
//                   affiliations extend our reach and recognition.
//                 </p>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
//                   <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: 0.1 }}
//                     className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
//                   >
//                     <div className="flex items-center gap-4">
//                       <Globe2 className="w-10 h-10 text-blue-600" />
//                       <div>
//                         <h4 className="font-semibold">World Karate Federation (WKF)</h4>
//                         <p className="text-sm text-gray-600">Global Governing Body</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                   <motion.div
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: 0.2 }}
//                     className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
//                   >
//                     <div className="flex items-center gap-4">
//                       <Map className="w-10 h-10 text-green-600" />
//                       <div>
//                         <h4 className="font-semibold">Asian Karate Federation (AKF)</h4>
//                         <p className="text-sm text-gray-600">Continental Leadership</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                   <motion.div
//                     initial={{ opacity: 0, x: -20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: 0.3 }}
//                     className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
//                   >
//                     <div className="flex items-center gap-4">
//                       <Users className="w-10 h-10 text-purple-600" />
//                       <div>
//                         <h4 className="font-semibold">South Asian Karate Federation (SAKF)</h4>
//                         <p className="text-sm text-gray-600">Regional Excellence</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                   <motion.div
//                     initial={{ opacity: 0, x: 20 }}
//                     animate={{ opacity: 1, x: 0 }}
//                     transition={{ duration: 0.5, delay: 0.4 }}
//                     className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
//                   >
//                     <div className="flex items-center gap-4">
//                       <Crown className="w-10 h-10 text-yellow-600" />
//                       <div>
//                         <h4 className="font-semibold">Commonwealth Karate Federation (CKF)</h4>
//                         <p className="text-sm text-gray-600">International Partnership</p>
//                       </div>
//                     </div>
//                   </motion.div>
//                 </div>
//               </motion.div>
//             </TabsContent>

//             <TabsContent value="government">
//               <motion.div
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5 }}
//                 className="bg-white p-8 rounded-lg shadow-lg"
//               >
//                 <h3 className="text-2xl font-semibold mb-4 flex items-center">
//                   <Award className="w-10 h-10 mr-4 text-yellow-500" />
//                   Government Trust Act Registration
//                 </h3>
//                 <p className="text-gray-700 mb-6">
//                   We are proud to be registered under the Government Trust Act, a testament to our commitment to
//                   integrity, transparency, and excellence in Shotokan Karate instruction.
//                 </p>
//                 <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
//                   <p className="text-sm text-yellow-700">
//                     This registration ensures that our organization adheres to strict governmental standards and
//                     operates with full legal compliance.
//                   </p>
//                 </div>
//                 <ul className="space-y-2 text-gray-700">
//                   <li className="flex items-center">
//                     <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
//                     Legally recognized institution
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
//                     Adherence to financial transparency
//                   </li>
//                   <li className="flex items-center">
//                     <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
//                     Commitment to ethical practices
//                   </li>
//                 </ul>
//               </motion.div>
//             </TabsContent>
//           </Tabs>
//         </div>
//       </section>
//       {/* CTA Section */}
//       <section className="py-16 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden z-10">
//         <FloatingElements />
//         <div className="container mx-auto px-4 text-center relative z-10">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             className="text-3xl md:text-5xl font-bold mb-8"
//           >
//             Start Your Journey Today
//           </motion.h2>
//           <motion.p
//             initial={{ opacity: 0 }}
//             whileInView={{ opacity: 1 }}
//             transition={{ duration: 0.5, delay: 0.2 }}
//             className="text-lg md:text-xl mb-8 max-w-2xl mx-auto"
//           >
//             Join our community and discover the transformative power of martial arts
//           </motion.p>
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: 0.4 }}
//           >
//             <Button
//               size="lg"
//               className="bg-yellow-500 hover:bg-yellow-600"
//               onClick={() => window.open("https://forms.gle/7TArc6KcGSptMWhk8", "_blank")}
//             >
//               CONTACT US
//             </Button>
//           </motion.div>
//         </div>
//       </section>

//       {/* Photo Gallery Section */}
//       <section className="py-16 bg-black relative z-10">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-3xl font-bold text-white text-center mb-12"
//           >
//             PHOTO GALLERY
//           </motion.h2>
//           <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[200px]">
//             <motion.div
//               initial={{
//                 opacity: 0,
//               }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5 }}
//               viewport={{ once: true }}
//               className="relative md:col-span-2 md:row-span-2 group"
//             >
//               <Image
//                 src="/gallary1.jpg?height=600&width=800"
//                 alt="Gallery Image 1"
//                 fill
//                 className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.1 }}
//               viewport={{ once: true }}
//               className="relative group"
//             >
//               <Image
//                 src="/gallary2.jpg?height=500&width=400"
//                 alt="Gallery Image 2"
//                 fill
//                 className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               viewport={{ once: true }}
//               className="relative group"
//             >
//               <div className="relative w-[320px] h-[420px] group">
//                 <Image
//                   src="/gallary3.jpg"
//                   alt="Gallery Image 3"
//                   width={320}
//                   height={420}
//                   className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
//                 />
//                 <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
//               </div>
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.3 }}
//               viewport={{ once: true }}
//               className="relative group"
//             >
//               <Image
//                 src="/gallary4.jpg?height=300&width=400"
//                 alt="Gallery Image 4"
//                 fill
//                 className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
//             </motion.div>
//             <motion.div
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 0.5, delay: 0.4 }}
//               viewport={{ once: true }}
//               className="relative group"
//             >
//               <Image
//                 src="/gallary5.jpg?height=300&width=400"
//                 alt="Gallery Image 5"
//                 fill
//                 className="object-cover rounded-lg transition-transform duration-300 group-hover:scale-105"
//               />
//               <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg" />
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Upcoming Events Section */}
//       <section className="py-16 bg-white relative z-10">
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-4xl font-bold text-center text-black-400 mb-12"
//           >
//             🚀 UPCOMING EVENTS
//           </motion.h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "National Tournament",
//                 date: "Yet to be announced",
//                 description: "Annual tournament for all skill levels.",
//               },
//               {
//                 title: "Open Tournament",
//                 date: "Yet to be announced",
//                 description: "Competitive event open to all participants.",
//               },
//               {
//                 title: "Karate Training Camp",
//                 date: "Yet to be announced",
//                 description: "Special workshop focusing on self-defense.",
//               },
//             ].map((event, index) => (
//               <motion.div
//                 key={event.title}
//                 initial={{ opacity: 0, y: 20 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 0.5, delay: index * 0.2 }}
//                 viewport={{ once: true }}
//                 className="bg-gradient-to-r from-yellow-500 to-yellow-300 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300 text-black"
//               >
//                 <h3 className="text-2xl font-semibold mb-3">{event.title}</h3>
//                 <p className="text-gray-800 text-lg mb-2">{event.date}</p>
//                 <p className="text-gray-900 mb-6">{event.description}</p>
//                 <div className="flex justify-center items-center gap-3">
//                   <a
//                     href="tel:+919830451446"
//                     className="bg-black text-yellow-400 px-4 py-2 rounded-full font-semibold hover:bg-gray-900 transition duration-300"
//                   >
//                     📞 Call Now: +91 9830451446
//                   </a>
//                 </div>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Us Section */}
//       <section
//         id="contact"
//         className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative z-10 overflow-hidden"
//       >
//         <div className="container mx-auto px-4">
//           <motion.h2
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5 }}
//             viewport={{ once: true }}
//             className="text-4xl font-bold text-center mb-12"
//           >
//             Contact Us
//           </motion.h2>
//           <div className="grid md:grid-cols-2 gap-12 items-center">
//             <motion.div
//               initial={{ opacity: 0, x: -50 }}
//               whileInView={{ opacity: 1, x: 0 }}
//               transition={{ duration: 0.5, delay: 0.2 }}
//               viewport={{ once: true }}
//             >
//               <h3 className="text-2xl font-semibold mb-6">Get in Touch</h3>
//               <p className="text-gray-300 mb-8">
//                 Have questions about our programs or want to start your martial arts journey? We're here to help!
//               </p>
//               <div className="space-y-4">
//                 <div className="flex items-center">
//                   <MapPin className="w-6 h-6 mr-4 text-yellow-400" />
//                   <span>18/2/2 Benod Behari Aditya Lane , BAKSARA Howrah,Pin - 711110</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Phone className="w-6 h-6 mr-4 text-yellow-400" />
//                   <span>(+91) 9830451446</span>
//                 </div>
//                 <div className="flex items-center">
//                   <Mail className="w-6 h-6 mr-4 text-yellow-400" />
//                   <span>stkaindia@gmail.com</span>
//                 </div>
//               </div>
//             </motion.div>
//           </div>
//         </div>
//       </section>

//       {/* Web Specials Section */}
//       <section className="bg-yellow-400 relative z-10">
//         <div className="container mx-auto px-4 py-8">
//           <div className="flex flex-col md:flex-row items-center justify-between">
//             <h2 className="text-2xl font-bold mb-4 md:mb-0">SHOTOKAN TRADITIONAL KARATE-DO ASSOCIATION</h2>
//             <div className="flex flex-col md:flex-row items-center gap-4">
//               <span className="font-bold text-center md:text-left">FOR ENQUIRY</span>
//               <Button variant="destructive">stkaindia@gmail.com</Button>
//             </div>
//           </div>
//         </div>
//       </section>
//     </div>
//   )
// }

// function AffiliationCard({ icon, title, description }) {
//   return (
//     <Card>
//       <CardContent className="flex flex-col items-center text-center p-6">
//         {icon}
//         <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
//         <p className="text-gray-600">{description}</p>
//       </CardContent>
//     </Card>
//   )
// }

"use client"

import type React from "react"

import { motion } from "framer-motion"
import Image from "next/image"
import {
  MapPin,
  Phone,
  Mail,
  Award,
  CheckCircle,
  Globe,
  Users,
  Shield,
  Trophy,
  Info,
  Globe2,
  Map,
  Crown,
} from "lucide-react"
import { Button } from "@/app/components/ui/button"
import { Card, CardContent } from "@/app/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/app/components/ui/tabs"
import { Navigation } from "@/app/components/navigation"
import { ParallaxSection } from "@/app/components/parallax-section"
import { AnimatedCounter } from "@/app/components/animated-counter"
import { FloatingElements } from "@/app/components/floating-elements"
import { ParallaxHero } from "@/app/components/parallax-hero"
import { TechniqueShowcase } from "@/app/components/technique-showcase"
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

interface AffiliationCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

function AffiliationCard({ icon, title, description }: AffiliationCardProps) {
  return (
    <Card>
      <CardContent className="flex flex-col items-center text-center p-6">
        {icon}
        <h3 className="text-xl font-semibold mt-4 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

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
                It is a traditional Japanese martial art founded by Gichin Funakoshi. It emphasizes strong stances,
                powerful strikes, and precise movements, focusing on kihon (basics), kata (forms), and kumite
                (sparring).
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
      {/* Memberships and Affiliations Section */}
      <section className="py-24 bg-gradient-to-b from-white to-gray-100 relative z-10 overflow-hidden">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="text-4xl font-bold text-center mb-16 text-gray-800"
          >
            Our Prestigious Memberships & Affiliations
          </motion.h2>

          <Tabs defaultValue="overview" className="w-full">
            <TabsList className="w-full justify-center mb-8">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="jtk">JTK</TabsTrigger>
              <TabsTrigger value="kio">KIO</TabsTrigger>
              <TabsTrigger value="government">Government Trust</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                <AffiliationCard
                  icon={<Globe className="w-12 h-12 text-blue-500" />}
                  title="International Reach"
                  description="Connected to global karate organizations, ensuring world-class training standards."
                />
                <AffiliationCard
                  icon={<Users className="w-12 h-12 text-green-500" />}
                  title="Community"
                  description="Part of a vast network of karate practitioners and experts worldwide."
                />
                <AffiliationCard
                  icon={<Shield className="w-12 h-12 text-red-500" />}
                  title="Credibility"
                  description="Recognized by official bodies, validating our expertise and methods."
                />
                <AffiliationCard
                  icon={<Award className="w-12 h-12 text-yellow-500" />}
                  title="Excellence"
                  description="Committed to maintaining the highest standards in Shotokan Karate."
                />
              </div>
            </TabsContent>

            <TabsContent value="jtk">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="grid md:grid-cols-2 gap-8 items-start">
                  <div>
                    <div className="flex items-center gap-4 mb-6">
                      <Trophy className="w-12 h-12 text-yellow-500" />
                      <h3 className="text-2xl font-semibold">Japan Traditional Karate Association (JTK)</h3>
                    </div>
                    <p className="text-gray-700 mb-4">
                      As an Affiliated Member of JTK HQ Japan, we are part of an international Shotokan organization
                      with worldwide branches. This affiliation ensures that our training is deeply rooted in authentic
                      Shotokan traditions.
                    </p>
                    <ul className="list-disc list-inside text-gray-700">
                      <li>Access to international training resources</li>
                      <li>Participation in global JTK events and tournaments</li>
                      <li>Direct connection to the birthplace of Shotokan Karate</li>
                    </ul>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="relative aspect-[3/4] w-full max-w-md mx-auto"
                  >
                    <Image
                      src="/affilation-certificate.jpg"
                      alt="JTK Affiliation Certificate"
                      fill
                      className="object-contain rounded-lg shadow-lg"
                      priority
                    />
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="kio">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <div className="flex items-center gap-4 mb-6">
                  <Trophy className="w-12 h-12 text-yellow-500" />
                  <h3 className="text-2xl font-semibold">Karate India Organisation (KIO)</h3>
                </div>
                <p className="text-gray-700 mb-8 flex items-center gap-2">
                  <Info className="w-5 h-5 text-blue-500 flex-shrink-0" />
                  As an Associate Member of KIO, we are connected to a broader network of karate organizations. KIO's
                  affiliations extend our reach and recognition.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <Globe2 className="w-10 h-10 text-blue-600" />
                      <div>
                        <h4 className="font-semibold">World Karate Federation (WKF)</h4>
                        <p className="text-sm text-gray-600">Global Governing Body</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <Map className="w-10 h-10 text-green-600" />
                      <div>
                        <h4 className="font-semibold">Asian Karate Federation (AKF)</h4>
                        <p className="text-sm text-gray-600">Continental Leadership</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <Users className="w-10 h-10 text-purple-600" />
                      <div>
                        <h4 className="font-semibold">South Asian Karate Federation (SAKF)</h4>
                        <p className="text-sm text-gray-600">Regional Excellence</p>
                      </div>
                    </div>
                  </motion.div>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <div className="flex items-center gap-4">
                      <Crown className="w-10 h-10 text-yellow-600" />
                      <div>
                        <h4 className="font-semibold">Commonwealth Karate Federation (CKF)</h4>
                        <p className="text-sm text-gray-600">International Partnership</p>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            </TabsContent>

            <TabsContent value="government">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-lg shadow-lg"
              >
                <h3 className="text-2xl font-semibold mb-4 flex items-center">
                  <Award className="w-10 h-10 mr-4 text-yellow-500" />
                  Government Trust Act Registration
                </h3>
                <p className="text-gray-700 mb-6">
                  We are proud to be registered under the Government Trust Act, a testament to our commitment to
                  integrity, transparency, and excellence in Shotokan Karate instruction.
                </p>
                <div className="bg-yellow-100 border-l-4 border-yellow-500 p-4 mb-6">
                  <p className="text-sm text-yellow-700">
                    This registration ensures that our organization adheres to strict governmental standards and
                    operates with full legal compliance.
                  </p>
                </div>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    Legally recognized institution
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    Adherence to financial transparency
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                    Commitment to ethical practices
                  </li>
                </ul>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>
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
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600"
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
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-black to-gray-900 text-white relative z-10 overflow-hidden"
      >
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
          </div>
        </div>
      </section>

      {/* Web Specials Section */}
      <section className="bg-yellow-400 relative z-10">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <h2 className="text-2xl font-bold mb-4 md:mb-0">SHOTOKAN TRADITIONAL KARATE-DO ASSOCIATION</h2>
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

