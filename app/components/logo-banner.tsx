"use client";

import Image from "next/image";

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
  // {
  //   src: "/logos/logo5.jpg",
  //   alt: "Brand Logo 5",
  // },
  {
    src: "/logos/logo6.jpg",
    alt: "Brand Logo 6",
  },
  // {
  //   src: "/logos/logo7.jpg",
  //   alt: "Brand Logo 6",
  // },
  // {
  //   src: "/logos/logo8.jpg",
  //   alt: "Brand Logo 6",
  // },
  // {
  //   src: "/logos/logo9.jpg",
  //   alt: "Brand Logo 6",
  // },
];

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
            <div
              key={`logo-${index}`}
              className="flex items-center justify-center min-w-[200px] px-8"
            >
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
          {/* {logos.map((logo, index) => (
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
          ))} */}

          {[...logos, ...logos].map((logo, index) => (
            <div
              key={index}
              className="flex items-center justify-center min-w-[200px] px-8"
            >
              <div className="rounded-full bg-white p-4 w-[120px] h-[120px] flex items-center justify-center">
                <Image
                  src={logo.src}
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
  );
}
