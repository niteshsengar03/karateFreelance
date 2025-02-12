// "use client"

// import { motion, useAnimationControls } from "framer-motion"
// import Image from "next/image"
// import { useEffect } from "react"

// export function LogoBanner() {
//   const controls = useAnimationControls()

//   const logos = Array.from({ length: 9 }, (_, i) => ({
//     id: i + 1,
//     src: "/placeholder.svg?height=100&width=100&text=Logo+" + (i + 1),
//     alt: `Partner Logo ${i + 1}`,
//   }))

//   // Double the logos array to create a seamless loop
//   const duplicatedLogos = [...logos, ...logos]

//   useEffect(() => {
//     const startAnimation = async () => {
//       await controls.start({
//         x: [0, -1920], // Adjust this value based on the total width of your logos
//         transition: {
//           duration: 40, // Increased duration to slow down the animation
//           ease: "linear",
//           repeat: Number.POSITIVE_INFINITY,
//         },
//       })
//     }

//     startAnimation()
//   }, [controls])

//   return (
//     <div className="bg-black py-8 relative z-10 overflow-hidden">
//       <div className="relative w-full">
//         <motion.div className="flex gap-12 absolute" animate={controls}>
//           {duplicatedLogos.map((logo, index) => (
//             <div
//               key={`${logo.id}-${index}`}
//               className="flex-shrink-0 w-24 h-24" // Slightly reduced size
//             >
//               <div className="w-full h-full rounded-full bg-white/10 overflow-hidden relative">
//                 <Image src={logo.src || "/placeholder.svg"} alt={logo.alt} fill className="object-cover p-2" />
//               </div>
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   )
// }

// "use client"

// import { motion, useAnimationControls } from "framer-motion"
// import Image from "next/image"
// import { useEffect } from "react"

// export function LogoBanner() {
//   const controls = useAnimationControls()

//   const logos = Array.from({ length: 9 }, (_, i) => ({
//     id: i + 1,
//     src: `/logos/logo${i + 1}.jpg`, // Ensure correct path
//     alt: `Partner Logo ${i + 1}`,
//   }))

//   // Double the logos array for seamless scrolling
//   const duplicatedLogos = [...logos, ...logos]

//   useEffect(() => {
//     controls.start({
//       x: ["0%", "-100%"], // Moves left seamlessly
//       transition: {
//         duration: 30, // Smooth, slow movement
//         ease: "linear",
//         repeat: Infinity, // Infinite loop
//       },
//     })
//   }, [controls])

//   return (
//     <div className="bg-black h-40 py-8 relative z-20 overflow-hidden flex items-center justify-center">
//       {/* Centered container for the moving logos */}
//       <div className="relative w-full overflow-x-hidden">
//         <motion.div
//           className="flex gap-16 absolute w-[200%] items-center"
//           animate={controls}
//         >
//           {duplicatedLogos.map((logo, index) => (
//             <div
//               key={`${logo.id}-${index}`}
//               className="w-24 h-24 rounded-full bg-white/10 border border-white/20 shadow-lg flex items-center justify-center overflow-hidden"
//             >
//               <Image src={logo.src} alt={logo.alt} width={80} height={80} className="object-contain" />
//             </div>
//           ))}
//         </motion.div>
//       </div>
//     </div>
//   )
// }


"use client"

import Image from "next/image"

const logos = [
  {
    src: "/logos/logo1.jpg",
    alt: "Brand Logo 1",
  },
  {
    src: "/logos/logo2.jpg",
    alt: "Brand Logo 2",
  },
  {
    src: "/logos/logo3.jpg",
    alt: "Brand Logo 3",
  },
  {
    src: "/logos/logo4.jpg",
    alt: "Brand Logo 4",
  },
  {
    src: "/logos/logo5.jpg",
    alt: "Brand Logo 5",
  },
  {
    src: "/logos/logo6.jpg",
    alt: "Brand Logo 6",
  },
  {
    src: "/logos/logo7.jpg",
    alt: "Brand Logo 6",
  },
  {
    src: "/logos/logo8.jpg",
    alt: "Brand Logo 6",
  },
  {
    src: "/logos/logo9.jpg",
    alt: "Brand Logo 6",
  },
]

export function LogoBanner() {
  return (
    <div className="w-full bg-black py-12 overflow-hidden">
      <style jsx>{`
        @keyframes slide {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .logo-slide {
          display: inline-flex;
          animation: slide 25s linear infinite;
          will-change: transform;
        }
        
        .logo-slide:hover {
          animation-play-state: paused;
        }
        
        @media (prefers-reduced-motion: reduce) {
          .logo-slide {
            animation: none;
          }
        }
      `}</style>

      <div className="relative w-full">
        <div className="logo-slide">
          {/* First set of logos */}
          {logos.map((logo, index) => (
            <div key={`logo-${index}`} className="flex items-center justify-center min-w-[200px] px-8">
              <div className="rounded-full bg-white p-4 w-[120px] h-[120px] flex items-center justify-center">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
          {/* Duplicate set for infinite scroll effect */}
          {logos.map((logo, index) => (
            <div key={`logo-duplicate-${index}`} className="flex items-center justify-center min-w-[200px] px-8">
              <div className="rounded-full bg-white p-4 w-[120px] h-[120px] flex items-center justify-center">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

