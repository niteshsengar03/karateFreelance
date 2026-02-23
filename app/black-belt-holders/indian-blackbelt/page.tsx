"use client"

import { motion } from "framer-motion"
import { useState, useMemo } from "react"
import { Badge } from "@/app/components/ui/badge"
import { ScrollArea, ScrollBar } from "@/app/components/ui/scroll-area"
import { Input } from "@/app/components/ui/input"
import { Button } from "@/app/components/ui/button"
import { indianBlackBeltHolders } from "@/app/data/blackBeltHolders"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["All", "1st Dan", "2nd Dan", "3rd Dan", "4th Dan", "5th Dan"]
const ITEMS_PER_PAGE = 10

export default function BlackBeltHoldersPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeRank, setActiveRank] = useState("All")
  const [currentPage, setCurrentPage] = useState(1)

  const filteredBelts = useMemo(() => {
    return indianBlackBeltHolders.filter((belt) => {
      const matchesSearch = belt.name
        .toLowerCase()
        .includes(searchQuery.toLowerCase())
      const matchesRank = activeRank === "All" || belt.rank === activeRank
      return matchesSearch && matchesRank
    })
  }, [searchQuery, activeRank])

  const totalPages = Math.ceil(filteredBelts.length / ITEMS_PER_PAGE)
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE
  const paginatedBelts = filteredBelts.slice(startIndex, startIndex + ITEMS_PER_PAGE)

  const handlePageChange = (page: number) => {
    setCurrentPage(page)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-gray-900">
      {/* Heading Section */}
      <div className="container mx-auto px-4 pt-8 pb-4 max-w-6xl">
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-white"
        >
          Indian Black Belt Holders
        </motion.h1>
      </div>

      {/* Leaderboard Section */}
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {/* Search and Filter */}
          <div className="mb-8 space-y-6">
            {/* Search Box */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-400 w-5 h-5" />
              <Input
                placeholder="Search by student name..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-gray-900/50 backdrop-blur-sm border border-yellow-400/30 text-white placeholder:text-gray-500 focus:border-yellow-400 focus:ring-yellow-400/50"
              />
            </div>

            {/* Rank Filter */}
            <ScrollArea className="w-full whitespace-nowrap pb-4">
              <div className="flex gap-2">
                {categories.map((category) => (
                  <motion.button
                    key={category}
                    onClick={() => setActiveRank(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      activeRank === category
                        ? "bg-yellow-400 text-black"
                        : "bg-gray-900/50 text-yellow-400 border border-yellow-400/30 hover:border-yellow-400"
                    }`}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>
              <ScrollBar orientation="horizontal" />
            </ScrollArea>
          </div>

          {/* Results Count */}
          <div className="mb-6 text-gray-400 flex justify-between items-center">
            <p className="text-sm">
              Showing <span className="text-yellow-400 font-semibold">{startIndex + 1}-{Math.min(startIndex + ITEMS_PER_PAGE, filteredBelts.length)}</span> of <span className="text-yellow-400 font-semibold">{filteredBelts.length}</span> result
              {filteredBelts.length !== 1 ? "s" : ""}
            </p>
            {totalPages > 1 && (
              <p className="text-sm text-yellow-400">
                Page <span className="font-semibold">{currentPage}</span> of <span className="font-semibold">{totalPages}</span>
              </p>
            )}
          </div>

          {/* Leaderboard Table */}
          {filteredBelts.length > 0 ? (
            <>
              {/* Desktop Table */}
              <div className="hidden md:block overflow-x-auto mb-8">
                <table className="w-full">
                  <thead>
                    <tr className="border-b-2 border-yellow-400/50">
                      <th className="text-left py-4 px-4 text-yellow-400 font-bold text-sm">S.No</th>
                      <th className="text-left py-4 px-4 text-yellow-400 font-bold text-sm">Name</th>
                      <th className="text-left py-4 px-4 text-yellow-400 font-bold text-sm">Rank</th>
                      <th className="text-left py-4 px-4 text-yellow-400 font-bold text-sm">Specialization</th>
                      <th className="text-left py-4 px-4 text-yellow-400 font-bold text-sm">Experience</th>
                    </tr>
                  </thead>
                  <tbody>
                    {paginatedBelts.map((belt, index) => (
                      <motion.tr
                        key={belt.id}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.05 }}
                        className={`border-b border-yellow-400/20 transition-colors duration-300 hover:bg-yellow-400/5 ${
                          index % 2 === 0 ? "bg-gray-900/20" : "bg-gray-900/40"
                        }`}
                      >
                        <td className="py-4 px-4 text-yellow-400 font-bold text-sm">{belt.sno}</td>
                        <td className="py-4 px-4 text-white font-semibold text-sm">{belt.name}</td>
                        <td className="py-4 px-4">
                          <Badge className="bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30 font-semibold text-xs">
                            {belt.rank}
                          </Badge>
                        </td>
                        <td className="py-4 px-4 text-gray-300 text-sm">{belt.specialization}</td>
                        <td className="py-4 px-4 text-gray-400 text-sm">{belt.yearsOfExperience} years</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Mobile Card Layout */}
              <div className="md:hidden space-y-4 mb-8">
                {paginatedBelts.map((belt, index) => (
                  <motion.div
                    key={belt.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="bg-gray-900/30 border border-yellow-400/20 rounded-lg p-4 hover:border-yellow-400/40 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-yellow-400 font-bold text-lg">#{belt.sno}</span>
                      <Badge className="bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30 font-semibold text-xs">
                        {belt.rank}
                      </Badge>
                    </div>
                    <div className="space-y-2">
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wide">Name</p>
                        <p className="text-white font-semibold">{belt.name}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wide">Specialization</p>
                        <p className="text-gray-300">{belt.specialization}</p>
                      </div>
                      <div>
                        <p className="text-gray-400 text-xs uppercase tracking-wide">Experience</p>
                        <p className="text-gray-300">{belt.yearsOfExperience} years</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2 mt-8">
                  <Button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className="bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </Button>

                  <div className="flex gap-2">
                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                      <Button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={`${
                          currentPage === page
                            ? "bg-yellow-400 text-black hover:bg-yellow-400"
                            : "bg-gray-900/50 text-yellow-400 border border-yellow-400/30 hover:border-yellow-400"
                        }`}
                      >
                        {page}
                      </Button>
                    ))}
                  </div>

                  <Button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === totalPages}
                    className="bg-yellow-400/20 text-yellow-400 hover:bg-yellow-400/30 disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </Button>
                </div>
              )}
            </>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-12"
            >
              <p className="text-gray-400 text-lg">
                No black belt holders found matching "{searchQuery}"
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </div>
  )
}

