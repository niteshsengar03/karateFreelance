// "use client"

// import { useState } from "react"
// import Link from "next/link"
// import { ChevronDown, Menu, X } from "lucide-react"
// import { Button } from "@/app/components/ui/button"
// import Image from "next/image"

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
//       className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-yellow-600 transition-colors"
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
// // const menuItems = [
// //   {
// //     title: "ABOUT US",
// //     items: [
// //       { name: "ABOUT US", href: "/about" },
// //       { name: "JAPAN HEAD QUARTER", href: "/about/japanheadq" },
// //       { name: "INDIA HEAD QUARTER", href: "/about/indianheadq" },
// //       { name: "EXECUTIVE MEMBER", href: "/officials" },
// //     ],
// //   },
// //   {
// //     title: "MEMBERS",
// //     items: [
// //       { name: "STATE MEMBERS", href: "/members" },
// //       { name: "ORGANISATION MEMBERS", href: "/leadership" },
// //       { name: "INDIVIDUAL MEMBERS", href: "/individualMembers" },
// //     ],
// //   },
// //   {
// //     title: "BLACK BELT HOLDER",
// //     items: [
// //       { name: "JAPAN BLACK BELT", href: "/black-belt-holders/japan-blackbelt" },
// //       { name: "INDIA BLACK BELT", href: "/black-belt-holders/indian-blackbelt" },
// //       { name: "UPCOMING EVENTS", href: "/events" },
// //     ],
// //   },
// //   {
// //     title: "JOIN US",
// //     items: [
// //       { type: "pdf", name: "AFFILIATION FORM", fileName: "AFFILIATION-Form .pdf" },
// //       { type: "pdf",name: "ADMISSION FORM",fileName: "Admission-Form.pdf"},
// //       { type: "pdf", name: "Syllabus", fileName: "Syllabus.pdf" },
// //       { type: "pdf", name: "CERTIFICATE SAMPLE", fileName: "sample.pdf" },
// //     ],
// //   },
// // ];

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
//               SHOTOKAN  TRADITIONAL<br />
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
//                 <li key={item.title} className="relative group">
//                   <button
//                     className="flex items-center gap-1 text-sm text-white hover:text-yellow-400 transition-colors"
//                     onMouseEnter={() => setActiveMenu(item.title)}
//                   >
//                     {item.title}
//                     <ChevronDown className="w-4 h-4" />
//                   </button>

//                   {activeMenu === item.title && (
//                     <div
//                       className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50"
//                       onMouseEnter={() => setActiveMenu(item.title)}
//                       onMouseLeave={() => setActiveMenu(null)}
//                     >
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
//           <div className="lg:hidden">
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
//                   Martial Arts Academy
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
//                           <DownloadPDF key={subItem.name} fileName={subItem.fileName}>
//                             {subItem.name}
//                           </DownloadPDF>
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
//             </ul>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// }

"use client";

import { useState } from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/app/components/ui/button";
import Image from "next/image";

type MenuItem = {
  name: string;
} & (
  | { type?: "link"; href: string }
  | { type: "pdf"; fileName: string }
);

type NavigationCategory = {
  title: string;
  items: MenuItem[];
};

const DownloadPDF: React.FC<{ fileName: string; children: React.ReactNode }> = ({ fileName, children }) => {
  const [loading, setLoading] = useState(false);

  const handleDownload = async () => {
    setLoading(true);
    try {
      const response = await fetch(`/pdfs/${fileName}`);
      if (!response.ok) throw new Error("File not found");

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);

      const link = document.createElement("a");
      link.href = url;
      link.setAttribute("download", fileName);
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

      window.URL.revokeObjectURL(url);
    } catch (error) {
      console.error("Download failed", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <button
      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-yellow-600 transition-colors w-full text-left"
      onClick={handleDownload}
      disabled={loading}
    >
      {loading ? "Downloading..." : children}
    </button>
  );
};

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
      { type: "link", name: "STATE MEMBERS", href: "/members" },
      { type: "link", name: "ORGANISATION MEMBERS", href: "/leadership" },
      { type: "link", name: "INDIVIDUAL MEMBERS", href: "/individualMembers" },
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
];

export function Navigation() {
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black text-white z-50">
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image src="/logo.jpg" alt="Martial Arts Academy Logo" width={80} height={80} className="mr-2 rounded-full" />
            <Link href="/" className="text-md font-bold">
              SHOTOKAN TRADITIONAL<br />
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
                    <ChevronDown className={`w-4 h-4 transition-transform ${activeMenu === item.title ? "rotate-180" : ""}`} />
                  </button>

                  {activeMenu === item.title && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50">
                      {item.items.map((subItem) =>
                        subItem.type === "pdf" ? (
                          <DownloadPDF key={subItem.name} fileName={subItem.fileName}>
                            {subItem.name}
                          </DownloadPDF>
                        ) : (
                          <Link
                            key={subItem.name}
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-yellow-600 transition-colors"
                          >
                            {subItem.name}
                          </Link>
                        )
                      )}
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
                  SHOTOKAN TRADITIONAL<br />
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
                    <ChevronDown className={`w-5 h-5 transition-transform ${activeMenu === item.title ? "rotate-180" : ""}`} />
                  </button>
                  {activeMenu === item.title && (
                    <ul className="mt-2 ml-4 space-y-2">
                      {item.items.map((subItem) =>
                        subItem.type === "pdf" ? (
                          <DownloadPDF key={subItem.name} fileName={subItem.fileName}>{subItem.name}</DownloadPDF>
                        ) : (
                          <li key={subItem.name}>
                            <Link href={subItem.href} className="text-lg text-gray-300 hover:text-yellow-400 transition-colors block py-1">
                              {subItem.name}
                            </Link>
                          </li>
                        )
                      )}
                    </ul>
                  )}
                </li>
              ))}
              <li>
          <Link href="/history" className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors block">
            Karate History
          </Link>
        </li>
        <li>
          <Link href="/gallery" className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors block">
            Gallery
          </Link>
        </li>
        <li>
          <Link href="/#contact" className="text-2xl font-bold text-white hover:text-yellow-400 transition-colors block">
            Contact
          </Link>
        </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
