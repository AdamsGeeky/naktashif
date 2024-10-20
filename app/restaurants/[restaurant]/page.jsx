'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { FiMapPin, FiShare2, FiBookmark, FiStar, FiClock, FiPhone } from 'react-icons/fi'
import Image from 'next/image'

export default function RestaurantDetail() {
  const [activeTab, setActiveTab] = useState('overview')

  const restaurant = {
    name: 'Cable Car',
    cuisines: ['Oriental', 'Continental', 'Pasta', 'North Indian', 'Desserts'],
    location: 'Jayanagar, Bangalore',
    diningRating: 3.9,
    diningRatingCount: 1460,
    deliveryRating: 4.1,
    deliveryRatingCount: 54,
    priceForTwo: '₹1,200 for two',
    openTime: 'Opens at 7am',
    phone: '+919900059322',
    address: '24, 46 Cross Road, 5th Block, Jayanagar, Bangalore',
    topDishes: ['Falafel Platter', 'Fruit Tart', 'Veg Buffet', 'Veg Pulao', 'Noodle', 'Spring Rolls'],
  }

  const images = [
    '/placeholder.svg?height=300&width=400',
    '/placeholder.svg?height=150&width=200',
    '/placeholder.svg?height=150&width=200',
    '/placeholder.svg?height=150&width=200',
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-start mb-6">
          <div>
            <h1 className="text-3xl font-bold mb-2">{restaurant.name}</h1>
            <p className="text-gray-600 mb-2">{restaurant.cuisines.join(', ')}</p>
            <p className="text-gray-600 mb-4">{restaurant.location}</p>
            <div className="flex items-center space-x-4 mb-4">
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                {restaurant.diningRating} ★ Dining ({restaurant.diningRatingCount})
              </span>
              <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
                {restaurant.deliveryRating} ★ Delivery ({restaurant.deliveryRatingCount})
              </span>
            </div>
          </div>
          <div className="flex flex-col space-y-2">
            <p className="text-gray-600 flex items-center"><FiClock className="mr-2" /> {restaurant.openTime}</p>
            <p className="text-gray-600 flex items-center"><FiPhone className="mr-2" /> {restaurant.phone}</p>
            <p className="text-gray-600">{restaurant.priceForTwo}</p>
          </div>
        </div>

        <div className="flex space-x-4 mb-6">
          <Button variant="outline" className="flex items-center">
            <FiMapPin className="mr-2" /> Direction
          </Button>
          <Button variant="outline" className="flex items-center">
            <FiShare2 className="mr-2" /> Share
          </Button>
          <Button variant="outline" className="flex items-center">
            <FiStar className="mr-2" /> Reviews
          </Button>
          <Button variant="outline" className="flex items-center">
            <FiBookmark className="mr-2" /> Bookmark
          </Button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {images.map((src, index) => (
            <div key={index} className={`relative ${index === 0 ? 'col-span-2 row-span-2' : ''}`}>
              <Image
                src={src}
                alt={`Restaurant image ${index + 1}`}
                width={index === 0 ? 400 : 200}
                height={index === 0 ? 300 : 150}
                className="rounded-lg object-cover w-full h-full"
              />
              {index === 3 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                  <span className="text-white text-lg font-medium">View Gallery</span>
                </div>
              )}
            </div>
          ))}
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="order">Order Online</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
            <TabsTrigger value="photos">Photos</TabsTrigger>
            <TabsTrigger value="menu">Menu</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Menu</h3>
                  <div className="mb-4">
                    <h4 className="font-medium mb-2">Cuisines</h4>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.cuisines.map((cuisine) => (
                        <span key={cuisine} className="bg-gray-100 px-2 py-1 rounded text-sm">
                          {cuisine}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="font-medium mb-2">Top dishes</h4>
                    <div className="flex flex-wrap gap-2">
                      {restaurant.topDishes.map((dish) => (
                        <span key={dish} className="bg-gray-100 px-2 py-1 rounded text-sm">
                          {dish}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Direction</h3>
                  <div className="aspect-video bg-gray-200 rounded-lg mb-4">
                    {/* Map placeholder */}
                    <div className="w-full h-full flex items-center justify-center text-gray-500">
                      Map
                    </div>
                  </div>
                  <p className="text-gray-600 mb-2">{restaurant.address}</p>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">Copy</Button>
                    <Button variant="outline" size="sm">Direction</Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
          <TabsContent value="order">Order Online content</TabsContent>
          <TabsContent value="reviews">Reviews content</TabsContent>
          <TabsContent value="photos">Photos content</TabsContent>
          <TabsContent value="menu">Menu content</TabsContent>
        </Tabs>
      </motion.div>
    </div>
  )
}