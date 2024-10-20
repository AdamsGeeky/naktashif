'use client'

import { motion } from "framer-motion"
import { useState, useEffect } from 'react'
import { FiChevronRight } from 'react-icons/fi'
import { Card } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import Image from 'next/image'
import React from 'react'

// Import collectionsData from seed file
import { collectionsData } from '../Data/Seed'

// CollectionCard component without memoization
const CollectionCard = ({ title, places, image }) => (
  <Card className="overflow-hidden">
    <div className="relative h-48">
      <Image
        src={image}
        alt={title}
        fill
        style={{ objectFit: "cover" }}
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
      <div className="absolute bottom-0 left-0 p-4 text-white">
        <h3 className="text-lg font-semibold">{title}</h3>
        <p className="text-sm flex items-center">
          {places} Places <FiChevronRight className="ml-1" />
        </p>
      </div>
    </div>
  </Card>
)

// CollectionCardSkeleton component without memoization
const CollectionCardSkeleton = () => (
  <Card className="overflow-hidden">
    <div className="relative h-48">
      <Skeleton className="h-full w-full" />
      <div className="absolute bottom-0 left-0 p-4 w-full">
        <Skeleton className="h-6 w-3/4 mb-2" />
        <Skeleton className="h-4 w-1/2" />
      </div>
    </div>
  </Card>
)

export default function MoreCollections() {
  const [loading, setLoading] = useState(true)

  // collectionsData directly used without memoization
  const collections = collectionsData

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 500) // Slightly increased loading delay for smoother transition
    return () => clearTimeout(timer)
  }, [])

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }} // Reduced duration for quicker transitions
    >
      <section className="py-12">
        <h2 className="text-2xl font-bold mb-6">More Collections</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {loading
            ? Array.from({ length: 12 }).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2 }} // Faster transition to make animations more efficient
                >
                  <CollectionCardSkeleton />
                </motion.div>
              ))
            : collections.map((collection, index) => (
                <motion.div
                  key={collection.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.2, delay: index * 0.05 }} // Reduced delay for better performance
                >
                  <CollectionCard {...collection} />
                </motion.div>
              ))}
        </div>
      </section>
    </motion.div>
  )
}
