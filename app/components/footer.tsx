"use client";

import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react";
import { motion } from "framer-motion";

const socialLinks = [
  { icon: Facebook, href: "https://www.facebook.com/profile.php?id=61568440858376" },
  { icon: Instagram, href: "https://www.instagram.com" },
  { icon: Twitter, href: "https://www.twitter.com" },
  { icon: Youtube, href: "https://www.youtube.com" },
];

const footerLinks = [
  {
    title: "About",
    items: [
      { name: "Karate History", link: "/history" },
      { name: "Organisation-Members", link: "/leadership" },
      { name: "Individual Members", link: "/individualMembers" },
      { name: "BlackBelt-Holders", link: "/black-belt-holders/indian-blackbelt" },
    ],
  },
  {
    title: "Resources",
    items: [
      { name: "Events", link: "/events" },
      { name: "Contact", link: "#contact" },
    ],
  },
];

export function Footer() {
  return (
    <footer className="bg-black text-white py-12 relative z-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4">
          {/* Left Section - Address & Social Links */}
          <motion.div
            className="md:col-span-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2 text-gray-400">
              <p>
                <strong>Administrative Office Address:</strong> <br />
                18/2/2 Benod Behari Aditya Lane (Fingy Apartment Ground Floor Flat – C)
              </p>
              <p>PO: BAKSARA, Howrah – Kolkata, West Bengal, India, Pin - 711110</p>
              <p>
                <strong>Mobile 1:</strong>{" "}
                <a href="tel:+919830451446" className="hover:text-yellow-400">
                  (+91) 9830451446
                </a>
              </p>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4 mt-4">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-yellow-400 transition-colors"
                >
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </motion.div>

          {/* Right Section - About & Resources */}
          <motion.div
            className="md:col-span-2 flex justify-end"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="grid grid-cols-2 gap-8">
              {footerLinks.map((column) => (
                <div key={column.title}>
                  <h3 className="font-bold text-lg mb-4">{column.title}</h3>
                  <ul className="space-y-2">
                    {column.items.map((item) => (
                      <li key={item.name}>
                        <Link href={item.link} className="text-gray-400 hover:text-yellow-400 transition-colors">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Footer Copyright */}
        <motion.div
          className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p>&copy; {new Date().getFullYear()} SHOTOKAN TRADITIONAL KARATE-DO ASSOCIATION. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
}
