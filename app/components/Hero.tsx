'use client'
// import MoreCollections from "./MoveCollection";
// import ExploreOptions from "./ExploreOptions";
import CollectionHeader from "./CollectionHeader";
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
      <main className="container mx-auto px-16 py-8">
        <CollectionHeader />  
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {restaurants.map((restaurant) => (
            <motion.div
              key={restaurant.name}
              whileHover={{ scale: 1.05 }} // Scale up on hover
              transition={{ type: "spring", stiffness: 300 }}
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
        {/* <MoreCollections /> */}
          {/* <ExploreOptions /> */}
      </main>
    </div>
  );
}
