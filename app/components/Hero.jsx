'use client'
import MoreCollections from "./MoveCollection";
import { motion } from "framer-motion"
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import Image from 'next/image';
import { useMemo } from "react";

// Import restaurant data from the seed file
import { restaurantsData } from "../Data/Seed";

export default function Hero() {
  // Memoize restaurant data to prevent re-render recalculations
  const restaurants = useMemo(() => restaurantsData, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <main className="container mx-auto px-4 py-8">
        <div className="relative mb-8">
          <Image
            src="/hero.jpg?height=400&width=1200"
            alt="Top Trending Spots"
            width={1200}
            height={400}
            className="w-full h-64 object-cover rounded-lg"
            priority
          />
          <div className="absolute inset-0 bg-black bg-opacity-50 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Top Trending Spots</h2>
              <p className="text-lg text-white mb-4">
                The restaurants that are the talk of the town. Look out for more such popular places, updated every Thursday!
              </p>
              <p className="text-white">32 Places</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant, index) => (
            <motion.div
              key={restaurant.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden">
                <Image
                  src={restaurant.image}
                  alt={restaurant.name}
                  width={300}
                  height={200}
                  className="w-full h-48 object-cover"
                  loading="lazy" // Lazy load images for better performance
                />
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{restaurant.name}</h3>
                  <p className="text-sm text-gray-600 mb-2">{restaurant.cuisine}</p>
                </CardContent>
                <CardFooter className="bg-gray-50 px-4 py-2 flex justify-between items-center">
                  <span className="text-sm font-medium bg-green-100 text-green-800 px-2 py-1 rounded">
                    {restaurant.rating} ★
                  </span>
                  <span className="text-sm text-gray-600">{restaurant.location}</span>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
          {/* More Collections */}
          <MoreCollections />
      </main>
    </div>
  );
}
