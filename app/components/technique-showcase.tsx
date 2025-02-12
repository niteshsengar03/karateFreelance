// "use client"

// import { useState } from "react"
// import { motion } from "framer-motion"
// import Image from "next/image"

// const techniques = [
//   { name: "Roundhouse Kick", image: "roundhouse-kick" },
//   { name: "Jab Cross", image: "jab-cross" },
//   { name: "Arm Bar", image: "arm-bar" },
//   { name: "Kata", image: "kata" },
// ]

// export function TechniqueShowcase() {
//   const [selectedTechnique, setSelectedTechnique] = useState(0)

//   return (
//     <section className="py-16 bg-gray-900 text-white">
//       <div className="container mx-auto px-4">
//         <h2 className="text-3xl font-bold text-center mb-12">Master These Techniques</h2>
//         <div className="grid md:grid-cols-2 gap-8 items-center">
//           <div className="relative aspect-video">
//             <Image
//               src={`/images/image2.jpg?height=400&width=600&text=${techniques[selectedTechnique].image}`}
//               alt={techniques[selectedTechnique].name}
//               fill
//               className="object-cover rounded-lg"
//             />
//           </div>
//           <div>
//             <h3 className="text-2xl font-bold mb-4">{techniques[selectedTechnique].name}</h3>
//             <p className="text-gray-300 mb-6">
//               Learn the proper form and execution of this essential technique. Master it to improve your overall martial
//               arts skills.
//             </p>
//             <div className="flex flex-wrap gap-4">
//               {techniques.map((technique, index) => (
//                 <motion.button
//                   key={technique.name}
//                   className={`px-4 py-2 rounded-full ${
//                     selectedTechnique === index ? "bg-yellow-400 text-black" : "bg-gray-700"
//                   }`}
//                   whileHover={{ scale: 1.05 }}
//                   whileTap={{ scale: 0.95 }}
//                   onClick={() => setSelectedTechnique(index)}
//                 >
//                   {technique.name}
//                 </motion.button>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   )
// }

"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"

const techniques = [
  { name: "Roundhouse Kick", image: "/images/image2.jpg", description: "A powerful kick used to target an opponent's head or body." },
  { name: "Jab Cross", image: "/images/image2.jpg", description: "A fundamental punching combination in boxing and martial arts." },
  { name: "Arm Bar", image: "/images/arm-bar.jpg", description: "A grappling technique that hyperextends the opponent's arm." },
  { name: "Kata", image: "/images/kata.jpg", description: "A sequence of movements demonstrating technique and discipline." },
]

export function TechniqueShowcase() {
  const [selectedTechnique, setSelectedTechnique] = useState(0)

  return (
    <section className="py-16 bg-gray-900 text-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Master These Techniques</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Image Section */}
          <div className="relative w-full h-[300px] md:h-[400px]">
            <Image
              key={techniques[selectedTechnique].image} // Forces re-render when state changes
              src={techniques[selectedTechnique].image}
              alt={techniques[selectedTechnique].name}
              fill
              priority // Ensures image loads correctly
              className="object-cover rounded-lg"
            />
          </div>

          {/* Text and Buttons Section */}
          <div>
            <h3 className="text-2xl font-bold mb-4">{techniques[selectedTechnique].name}</h3>
            <p className="text-gray-300 mb-6">{techniques[selectedTechnique].description}</p>
            
            <div className="flex flex-wrap gap-4">
              {techniques.map((technique, index) => (
                <motion.button
                  key={technique.name}
                  className={`px-4 py-2 rounded-full transition ${
                    selectedTechnique === index ? "bg-yellow-400 text-black" : "bg-gray-700 text-white"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedTechnique(index)} // Ensuring state updates correctly
                >
                  {technique.name}
                </motion.button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

