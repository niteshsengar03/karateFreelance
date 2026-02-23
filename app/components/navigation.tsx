// "use client";

// import { useState } from "react";
// import Link from "next/link";
// import { ChevronDown, Menu, X } from "lucide-react";
// import { Button } from "@/app/components/ui/button";
// import Image from "next/image";

// type MenuItem = {
//   name: string;
// } & (
//   | { type?: "link"; href: string }
//   | { type: "pdf"; fileName: string }
// );

// type NavigationCategory = {
//   title: string;
//   items: MenuItem[];
// };

// const DownloadPDF: React.FC<{ fileName: string; children: React.ReactNode }> = ({ fileName, children }) => {
//   const [loading, setLoading] = useState(false);

//   const handleDownload = async () => {
//     setLoading(true);
//     try {
//       const response = await fetch(`/pdfs/${fileName}`);
//       if (!response.ok) throw new Error("File not found");

//       const blob = await response.blob();
//       const url = window.URL.createObjectURL(blob);

//       const link = document.createElement("a");
//       link.href = url;
//       link.setAttribute("download", fileName);
//       document.body.appendChild(link);
//       link.click();
//       document.body.removeChild(link);

//       window.URL.revokeObjectURL(url);
//     } catch (error) {
//       console.error("Download failed", error);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <button
//       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-yellow-600 transition-colors w-full text-left"
//       onClick={handleDownload}
//       disabled={loading}
//     >
//       {loading ? "Downloading..." : children}
//     </button>
//   );
// };

// const menuItems: NavigationCategory[] = [
//   {
//     title: "ABOUT US",
//     items: [
//       { type: "link", name: "ABOUT US", href: "/about" },
//       { type: "link", name: "JAPAN HEAD QUARTER", href: "/about/japanheadq" },
//       { type: "link", name: "INDIA HEAD QUARTER", href: "/about/indianheadq" },
//       { type: "link", name: "EXECUTIVE MEMBER", href: "/officials" },
//     ],
//   },
//   {
//     title: "MEMBERS",
//     items: [
//       { type: "link", name: "STATE MEMBERS", href: "/members" },
//       { type: "link", name: "ORGANISATION MEMBERS", href: "/leadership" },
//       { type: "link", name: "INDIVIDUAL MEMBERS", href: "/individualMembers" },
//     ],
//   },
//   {
//     title: "BLACK BELT HOLDER",
//     items: [
//       { type: "link", name: "JAPAN BLACK BELT", href: "/black-belt-holders/japan-blackbelt" },
//       { type: "link", name: "INDIA BLACK BELT", href: "/black-belt-holders/indian-blackbelt" },
//       { type: "link", name: "UPCOMING EVENTS", href: "/events" },
//     ],
//   },
//   {
//     title: "JOIN US",
//     items: [
//       { type: "pdf", name: "AFFILIATION FORM", fileName: "Affiliation-Form.pdf" },
//       { type: "pdf", name: "ADMISSION FORM", fileName: "Admission-Form.pdf" },
//       { type: "pdf", name: "Syllabus", fileName: "Syllabus.pdf" },
//       { type: "pdf", name: "CERTIFICATE SAMPLE", fileName: "sample.pdf" },
//     ],
//   },
// ];

// export function Navigation() {
//   const [activeMenu, setActiveMenu] = useState<string | null>(null);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   return (
//     <header className="fixed top-0 left-0 right-0 bg-black text-white z-50">
//       <div className="container mx-auto px-4 py-4">
//         <div className="flex justify-between items-center">
//           <div className="flex items-center">
//             <Image src="/logo.jpg" alt="Martial Arts Academy Logo" width={80} height={80} className="mr-2 rounded-full" />
//             <Link href="/" className="text-md font-bold">
//               SHOTOKAN TRADITIONAL<br />
//               KARATE-DO ASSOCIATION
//             </Link>
//           </div>

//           {/* Desktop Navigation */}
//           <nav className="hidden lg:block">
//             <ul className="flex space-x-8">
//               <li>
//                 <Link href="/" className="text-md text-white hover:text-yellow-400 transition-colors">
//                   HOME
//                 </Link>
//               </li>
//               {menuItems.map((item) => (
//                 <li key={item.title} className="relative">
//                   <button
//                     className="flex items-center gap-1 text-sm text-white hover:text-yellow-400 transition-colors"
//                     onClick={() => setActiveMenu(activeMenu === item.title ? null : item.title)}
//                   >
//                     {item.title}
//                     <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === item.title ? "rotate-180" : ""}`} />
//                   </button>

//                   {activeMenu === item.title && (
//                     <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
//                       {item.items.map((subItem) =>
//                         subItem.type === "pdf" ? (
//                           <DownloadPDF key={subItem.name} fileName={subItem.fileName}>
//                             {subItem.name}
//                           </DownloadPDF>
//                         ) : (
//                           <Link
//                             key={subItem.name}
//                             href={subItem.href}
//                             className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-yellow-600 transition-colors"
//                           >
//                             {subItem.name}
//                           </Link>
//                         )
//                       )}
//                     </div>
//                   )}
//                 </li>
//               ))}
//               <li>
//                 <Link href="/history" className="text-md text-white hover:text-yellow-400 transition-colors">
//                   Karate History
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/gallery" className="text-md text-white hover:text-yellow-400 transition-colors">
//                   GALLERY
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/#contact" className="text-md text-white hover:text-yellow-400 transition-colors">
//                   CONTACT
//                 </Link>
//               </li>
//             </ul>
//           </nav>

//           {/* Mobile Navigation */}
//                     {/* Mobile Navigation */}
//                     <div className="lg:hidden">
//             <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)} className="text-white">
//               <Menu className="w-6 h-6" />
//             </Button>
//           </div>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="fixed inset-0 bg-black/95 z-50 overflow-auto">
//           <div className="flex justify-end p-4">
//             <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="text-white">
//               <X className="w-6 h-6" />
//             </Button>
//           </div>
//           <nav className="p-4">
//             <ul className="space-y-4">
//               <li>
//                 <Link
//                   href="/"
//                   className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors block"
//                   onClick={() => setIsMobileMenuOpen(false)}
//                 >
//                   SHOTOKAN TRADITIONAL<br />
//                   KARATE-DO ASSOCIATION
//                 </Link>
//               </li>
//               {menuItems.map((item) => (
//                 <li key={item.title}>
//                   <button
//                     onClick={() => setActiveMenu(activeMenu === item.title ? null : item.title)}
//                     className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors w-full text-left flex items-center justify-between"
//                   >
//                     {item.title}
//                     <ChevronDown className={`w-5 h-5 transition-transform ${activeMenu === item.title ? "rotate-180" : ""}`} />
//                   </button>
//                   {activeMenu === item.title && (
//                     <ul className="mt-2 ml-4 space-y-2">
//                       {item.items.map((subItem) =>
//                         subItem.type === "pdf" ? (
//                           <DownloadPDF key={subItem.name} fileName={subItem.fileName}>{subItem.name}</DownloadPDF>
//                         ) : (
//                           <li key={subItem.name}>
//                             <Link href={subItem.href} className="text-lg text-gray-300 hover:text-yellow-400 transition-colors block py-1">
//                               {subItem.name}
//                             </Link>
//                           </li>
//                         )
//                       )}
//                     </ul>
//                   )}
//                 </li>
//               ))}
//               <li>
//           <Link href="/history" className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors block">
//             Karate History
//           </Link>
//         </li>
//         <li>
//           <Link href="/gallery" className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors block">
//             Gallery
//           </Link>
//         </li>
//         <li>
//           <Link href="/#contact" className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors block">
//             Contact
//           </Link>
//         </li>
//             </ul>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }



"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { ChevronDown, Menu, X } from "lucide-react"
import { Button } from "@/app/components/ui/button"
import Image from "next/image"

type MenuItem = {
  name: string
} & ({ type?: "link"; href: string; subItems?: MenuItem[] } | { type: "pdf"; fileName: string })

type LinkMenuItem = Extract<MenuItem, { type?: "link" }>

type NavigationCategory = {
  title: string
  items: MenuItem[]
}

const DownloadPDF: React.FC<{ fileName: string; children: React.ReactNode; onDownload?: () => void }> = ({
  fileName,
  children,
  onDownload,
}) => {
  const [loading, setLoading] = useState(false)

  const handleDownload = async () => {
    if (onDownload) onDownload()
    setLoading(true)
    try {
      const response = await fetch(`/pdfs/${fileName}`)
      if (!response.ok) throw new Error("File not found")

      const blob = await response.blob()
      const url = window.URL.createObjectURL(blob)

      const link = document.createElement("a")
      link.href = url
      link.setAttribute("download", fileName)
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)

      window.URL.revokeObjectURL(url)
    } catch (error) {
      console.error("Download failed", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <button
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-yellow-600 transition-colors w-full text-left"
      onClick={handleDownload}
      disabled={loading}
    >
      {loading ? "Downloading..." : children}
    </button>
  )
}

const menuItems: NavigationCategory[] = [
  {
    title: "ABOUT US",
    items: [
      { type: "link", name: "ABOUT US", href: "/about" },
      { type: "link", name: "JAPAN HEAD QUARTER", href: "/about/japanheadq" },
      { type: "link", name: "INDIA HEAD QUARTER", href: "/about/indianheadq" },
      { type: "link", name: "EXECUTIVE MEMBER", href: "/officials" },
    ],
  },
  {
    title: "MEMBERS",
    items: [
      { type: "link", name: "AFFILIATED MEMBERS", href: "/members" },
      // { type: "link", name: "COMMISSIONS", href: "/leadership" },
      {
        type: "link",
        name: "COMMISIONS",
        href: "/individualMembers",
        subItems: [
          { type: "link", name: "REFEREE COMMISSION", href: "/commission/refree" },
          { type: "link", name: "SPORTS COMMISSION", href: "/commission/sports" },
          { type: "link", name: "TECHNICAL & COMMUNICATION COMMISSION", href: "/commission/technical&Communication" },
          { type: "link", name: "TOURNAMENT COMMISSION", href: "/commission/tournament" },
          { type: "link", name: "WOMEN COMMISSION", href: "/commission/women" },
        ],
      },
      {
        type: "link",
        name: "CELLS",
        href: "/individualMembers",
        subItems: [
          { type: "link", name: "LEGAL CELLS", href: "/cells/legal" },
          { type: "link", name: "MEDIA CELLS", href: "/cells/media" },
          { type: "link", name: "MEDICAL CELLS", href: "/cells/medical" },
          { type: "link", name: "SECURITY CELLS", href: "/cells/security" },
        ],
      },
    ],
  },
  {
    title: "BLACK BELT HOLDER",
    items: [
      { type: "link", name: "JAPAN BLACK BELT", href: "/black-belt-holders/japan-blackbelt" },
      { type: "link", name: "INDIA BLACK BELT", href: "/black-belt-holders/indian-blackbelt" },
      { type: "link", name: "UPCOMING EVENTS", href: "/events" },
    ],
  },
  {
    title: "JOIN US",
    items: [
      { type: "pdf", name: "AFFILIATION FORM", fileName: "Affiliation-Form.pdf" },
      { type: "pdf", name: "ADMISSION FORM", fileName: "Admission-Form.pdf" },
      { type: "pdf", name: "Syllabus", fileName: "Syllabus.pdf" },
      { type: "pdf", name: "CERTIFICATE SAMPLE", fileName: "sample.pdf" },
    ],
  },
]

export function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null)
  const [activeSubMenu, setActiveSubMenu] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 bg-black text-white z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image
              src="/logo.jpg"
              alt="Martial Arts Academy Logo"
              width={80}
              height={80}
              className="mr-2 rounded-full"
            />
            <Link href="/" className="text-md font-bold">
              SHOTOKAN TRADITIONAL
              <br />
              KARATE-DO ASSOCIATION
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              <li>
                <Link href="/" className="text-md text-white hover:text-yellow-400 transition-colors">
                  HOME
                </Link>
              </li>
              {menuItems.map((item) => (
                <li key={item.title} className="relative">
                  <button
                    className="flex items-center gap-1 text-sm text-white hover:text-yellow-400 transition-colors"
                    onClick={() => setActiveMenu(activeMenu === item.title ? null : item.title)}
                  >
                    {item.title}
                    <ChevronDown
                      className={`w-4 h-4 transition-transform ${activeMenu === item.title ? "rotate-180" : ""}`}
                    />
                  </button>

                  {activeMenu === item.title && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                      {item.items.map((subItem) => (
                        <div key={subItem.name} className="relative group">
                          {subItem.type === "pdf" ? (
                            <DownloadPDF fileName={subItem.fileName}>
                              {subItem.name}
                            </DownloadPDF>
                          ) : subItem.subItems && subItem.subItems.length > 0 ? (
                            <>
                              <button className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-yellow-600 transition-colors">
                                {subItem.name}
                                <ChevronDown className="w-3 h-3 ml-2" />
                              </button>
                              <div className="hidden group-hover:block absolute left-full top-0 ml-1 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                                {subItem.subItems.map((nestedItem) => (
                                  <Link
                                    key={nestedItem.name}
                                    href={(nestedItem as LinkMenuItem).href}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-yellow-600 transition-colors"
                                  >
                                    {nestedItem.name}
                                  </Link>
                                ))}
                              </div>
                            </>
                          ) : (
                            <Link
                              href={subItem.href}
                              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-yellow-600 transition-colors"
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </div>
                      ))}
                    </div>
                  )}
                </li>
              ))}
              <li>
                <Link href="/history" className="text-md text-white hover:text-yellow-400 transition-colors">
                  Karate History
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-md text-white hover:text-yellow-400 transition-colors">
                  GALLERY
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-md text-white hover:text-yellow-400 transition-colors">
                  CONTACT
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile Navigation */}
          <div className="lg:hidden">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(true)} className="text-white">
              <Menu className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 overflow-auto">
          <div className="flex justify-end p-4">
            <Button variant="ghost" size="icon" onClick={() => setIsMobileMenuOpen(false)} className="text-white">
              <X className="w-6 h-6" />
            </Button>
          </div>
          <nav className="p-4">
            <ul className="space-y-4">
              <li>
                <Link
                  href="/"
                  className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  SHOTOKAN TRADITIONAL
                  <br />
                  KARATE-DO ASSOCIATION
                </Link>
              </li>
              {menuItems.map((item) => (
                <li key={item.title}>
                  <button
                    onClick={() => setActiveMenu(activeMenu === item.title ? null : item.title)}
                    className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors w-full text-left flex items-center justify-between"
                  >
                    {item.title}
                    <ChevronDown
                      className={`w-5 h-5 transition-transform ${activeMenu === item.title ? "rotate-180" : ""}`}
                    />
                  </button>
                  {activeMenu === item.title && (
                    <ul className="mt-2 ml-4 space-y-2">
                      {item.items.map((subItem) => (
                        <li key={subItem.name}>
                          {subItem.type === "pdf" ? (
                            <DownloadPDF
                              fileName={subItem.fileName}
                              onDownload={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </DownloadPDF>
                          ) : subItem.subItems && subItem.subItems.length > 0 ? (
                            <>
                              <button
                                onClick={() =>
                                  setActiveSubMenu(activeSubMenu === subItem.name ? null : subItem.name)
                                }
                                className="text-lg text-gray-300 hover:text-yellow-400 transition-colors block py-1 flex items-center justify-between w-full"
                              >
                                {subItem.name}
                                <ChevronDown
                                  className={`w-4 h-4 transition-transform ${
                                    activeSubMenu === subItem.name ? "rotate-180" : ""
                                  }`}
                                />
                              </button>
                              {activeSubMenu === subItem.name && (
                                <ul className="mt-2 ml-4 space-y-1">
                                  {subItem.subItems.map((nestedItem) => (
                                    <li key={nestedItem.name}>
                                      <Link
                                        href={(nestedItem as LinkMenuItem).href}
                                        className="text-base text-gray-400 hover:text-yellow-400 transition-colors block py-1"
                                        onClick={() => setIsMobileMenuOpen(false)}
                                      >
                                        {nestedItem.name}
                                      </Link>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </>
                          ) : (
                            <Link
                              href={subItem.href}
                              className="text-lg text-gray-300 hover:text-yellow-400 transition-colors block py-1"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {subItem.name}
                            </Link>
                          )}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li>
                <Link
                  href="/history"
                  className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Karate History
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/#contact"
                  className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors block"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  )
}


