// "use client"

// import { motion, useScroll } from "framer-motion"
// import { useRef } from "react"
// import Image from "next/image"

// const timeline = [
//   {
//     year: "6th Century AD",
//     title: "Origins in India",
//     description: "Buddhist monks develop systematic methods of self-defense, which later spread to China.",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "1300s",
//     title: "Development in Okinawa",
//     description: "Integration of Chinese kung fu with indigenous fighting methods leads to the birth of 'te' (hand).",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "1800s",
//     title: "Modern Karate Emerges",
//     description: "Systematic teaching of karate begins in Okinawan schools.",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "1922",
//     title: "Spread to Mainland Japan",
//     description: "Gichin Funakoshi introduces karate to mainland Japan.",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "1950s",
//     title: "Global Recognition",
//     description: "Karate spreads internationally, gaining worldwide recognition.",
//     image: "/placeholder.svg?height=300&width=400",
//   },
//   {
//     year: "Present Day",
//     title: "Olympic Sport",
//     description: "Karate makes its debut as an Olympic sport, marking a new chapter in its history.",
//     image: "/placeholder.svg?height=300&width=400",
//   },
// ]

// export default function HistoryPage() {
//   const containerRef = useRef<HTMLDivElement>(null)
//   const { scrollYProgress } = useScroll({
//     target: containerRef,
//     offset: ["start start", "end end"],
//   })

//   return (
//     <div className="min-h-screen bg-black pt-24">
//       <div className="container mx-auto px-4 py-12">
//         <div className="text-center mb-16">
//           <motion.h1
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             className="text-4xl md:text-5xl font-bold text-white mb-4"
//           >
//             History of <span className="text-yellow-400">Karate</span>
//           </motion.h1>
//           <motion.p
//             initial={{ opacity: 0, y: 20 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.1 }}
//             className="text-gray-400 max-w-2xl mx-auto"
//           >
//             Journey through time and discover the rich history and evolution of karate
//           </motion.p>
//         </div>

//         <div ref={containerRef} className="relative">
//           <motion.div
//             className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white"
//             style={{
//               scaleY: scrollYProgress,
//               originY: 0,
//             }}
//           />

//           {timeline.map((item, index) => (
//             <motion.div
//               key={item.year}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ delay: 0.1 * index }}
//               className="relative mb-24 last:mb-0"
//             >
//               <div className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
//                 <div className="w-1/2">
//                   <div className="bg-gray-900 rounded-lg overflow-hidden">
//                     <div className="relative aspect-video">
//                       <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
//                     </div>
//                   </div>
//                 </div>

//                 <div className="w-1/2 relative">
//                   <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full left-0 transform -translate-x-1/2" />
//                   <div className={`p-6 bg-gray-900 rounded-lg ${index % 2 === 0 ? "ml-8" : "mr-8"}`}>
//                     <div className="text-yellow-400 font-bold mb-2">{item.year}</div>
//                     <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
//                     <p className="text-gray-400">{item.description}</p>
//                   </div>
//                 </div>
//               </div>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </div>
//   )
// }

"use client"

import { motion, useScroll } from "framer-motion"
import { useRef } from "react"
import Image from "next/image"

const timeline = [
  {
    year: "14th Century",
    title: "Chinese Influence",
    description:
      "Chinese martial arts, particularly kung fu, were introduced to Okinawa through cultural exchanges and trade.",
    image: "/history/image1.jpg?height=300&width=400",
  },
  {
    year: "17th Century",
    title: "Development of Te",
    description:
      "Under Japanese rule, Okinawans developed and refined unarmed combat techniques, evolving into the martial art known as Te (hand).",
    image: "/history/image2.jpg?height=300&width=400",
  },
  {
    year: "Late 19th Century",
    title: "Birth of Modern Karate",
    description:
      "Master Gichin Funakoshi, born in 1868, trained in Shuri-te and later became known as the father of modern Karate.",
    image: "/history/image6.jpg",
  },
  // {
  //   year: "1922",
  //   title: "Karate in Mainland Japan",
  //   description:
  //     "Gichin Funakoshi demonstrated Karate in Tokyo, marking the beginning of Karate's formal introduction to Japan.",
  //   image: "/history/image5.jpg",
  // },
  {
    year: "1936",
    title: "Shotokan Established",
    description: "Funakoshi founded the Shotokan style of Karate and opened his first dojo in Tokyo.",
    image: "/history/image9.jpg",
  },
  // {
  //   year: "1949",
  //   title: "Japan Karate Association",
  //   description:
  //     "The Japan Karate Association (JKA) holds a unique position in Japan and globally, defining itself as the ‘Keeper of Karate’s Highest Tradition’ for its historical significance and contributions to the development and promotion of traditional Shotokan karate.",
  //   image: "/history/image10.jpg",
  // },
  // {
  //   year: "1950s-1960s",
  //   title: "Global Expansion",
  //   description: "Karate began to spread worldwide, with the JKA teaching students across the globe.",
  //   image: "/placeholder.svg?height=300&width=400",
  // },
  {
    year: "1970",
    title: "World Karate Federation",
    description: "The World Karate Federation (WKF) was established, helping to organize international competitions.",
    image: "/history/image11.jpg?height=300&width=400",
  },
  {
    year: "2020",
    title: "Olympic Inclusion",
    description:
      "Karate was officially included in the Tokyo Olympics, marking a major milestone in its global recognition.",
    image: "/history/image12.jpg",
  },
]

export default function HistoryPage() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  })

  return (
    <div className="min-h-screen bg-black pt-24">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            History of <span className="text-yellow-400">Karate</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-gray-400 max-w-2xl mx-auto"
          >
            Journey through time and discover the rich history and evolution of karate, from its origins in Okinawa to
            its global recognition as an Olympic sport.
          </motion.p>
        </div>

        <div ref={containerRef} className="relative">
          <motion.div
            className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-white"
            style={{
              scaleY: scrollYProgress,
              originY: 0,
            }}
          />

          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * index }}
              className="relative mb-24 last:mb-0"
            >
              <div className={`flex items-center gap-8 ${index % 2 === 0 ? "flex-row" : "flex-row-reverse"}`}>
                <div className="w-1/2">
                  <div className="bg-gray-900 rounded-lg overflow-hidden">
                    <div className="relative aspect-video">
                      <Image src={item.image || "/placeholder.svg"} alt={item.title} fill className="object-cover" />
                    </div>
                  </div>
                </div>

                <div className="w-1/2 relative">
                  <div className="absolute top-1/2 -translate-y-1/2 w-4 h-4 bg-yellow-400 rounded-full left-0 transform -translate-x-1/2" />
                  <div className={`p-6 bg-gray-900 rounded-lg ${index % 2 === 0 ? "ml-8" : "mr-8"}`}>
                    <div className="text-yellow-400 font-bold mb-2">{item.year}</div>
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400">{item.description}</p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <h2 className="text-3xl font-bold text-white mb-8">Key Masters in Karate History</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Master Gichin Funakoshi",
                description:
                  "Considered the father of modern Karate, Funakoshi played a crucial role in bringing Karate from Okinawa to mainland Japan.",
                image: "/history/image4.jpg",
              },
              {
                name: "Master Masatoshi Nakayama",
                description:
                  "A senior student of Funakoshi, Nakayama was instrumental in modernizing and popularizing Shotokan Karate.",
                image: "/history/image3.jpg",
              },
              {
                name: "Master Masahiko Tanaka",
                description:
                  "An 8th Dan black belt, Tanaka Sensei has been influential in preserving traditional Shotokan Karate while adapting it for modern times.",
                image: "/history/mashiko.jpg",
              },
            ].map((master, index) => (
              <motion.div
                key={master.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * index }}
                className="bg-gray-900 rounded-lg overflow-hidden"
              >
                <div className="relative aspect-square">
                  <Image src={master.image || "/placeholder.svg"} alt={master.name} fill className="object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{master.name}</h3>
                  <p className="text-gray-400">{master.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

