'use client'

import { useState } from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FiMapPin, FiShare2, FiBookmark } from 'react-icons/fi'
import Image from 'next/image'

export default function RestaurantDetails() {
  const [activeTab, setActiveTab] = useState('overview')

  const images = [
    '/01.jpg?height=300&width=500',
    '/02.jpg?height=150&width=200',
    '/03.jpg?height=150&width=200',
    '/04.jpg?height=150&width=200',
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-3 gap-4 mb-8">
        <div className="col-span-2">
          <Image
            src={images[0]}
            alt="Restaurant main image"
            width={500}
            height={300}
            className="rounded-lg object-cover w-full h-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-4">
          {images.slice(1).map((src, index) => (
            <div key={index} className="relative">
              <Image
                src={src}
                alt={`Restaurant image ${index + 2}`}
                width={200}
                height={150}
                className="rounded-lg object-cover w-full h-full"
              />
              {index === 2 && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                  <span className="text-white text-lg font-medium">View Gallery</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-start mb-6">
        <div>
          <h1 className="text-3xl font-bold mb-2">House Of Commons</h1>
          <p className="text-gray-600 mb-2">Bar, Pizza, North Indian</p>
          <p className="text-gray-600 mb-4">HSR Layout, Bengaluru</p>
          <div className="flex items-center space-x-4">
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
              4.4 ★ Dining (7,059 Dining Reviews)
            </span>
            <span className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm font-medium">
              0 ★ Delivery (0 Delivery Reviews)
            </span>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button variant="outline" className="flex items-center">
            <FiMapPin className="mr-2" /> Direction
          </Button>
          <Button variant="outline" className="flex items-center">
            <FiShare2 className="mr-2" /> Share
          </Button>
          <Button variant="outline" className="flex items-center">
            <FiBookmark className="mr-2" /> Bookmark
          </Button>
        </div>
      </div>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full mb-8">
        <TabsList className="grid w-full grid-cols-6">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="reviews">Reviews</TabsTrigger>
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="menu">Menu</TabsTrigger>
          <TabsTrigger value="events">Events</TabsTrigger>
          <TabsTrigger value="book">Book a Table</TabsTrigger>
        </TabsList>
        <TabsContent value="overview">
          <div className="grid grid-cols-3 gap-8">
            <div className="col-span-2">
              <h2 className="text-2xl font-semibold mb-4">About this place</h2>
              <h3 className="text-xl font-semibold mb-2">Menu</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                <Image
                  src="/05.jpg?height=200&width=150"
                  alt="Bar Menu"
                  width={150}
                  height={200}
                  className="rounded-lg object-cover"
                />
                <Image
                  src="/06.jpg?height=200&width=150"
                  alt="Food Menu"
                  width={150}
                  height={200}
                  className="rounded-lg object-cover"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">Events</h3>
              <div className="bg-yellow-100 p-4 rounded-lg mb-6">
                <h4 className="font-semibold mb-2">Every Monday Beer at Rs.69</h4>
                <p className="text-sm text-gray-600 mb-2">9th Feb - 31st Jan | 11:00 am - 07:00 pm</p>
                <p className="text-sm">Beat the Monday Blues by sipping cool beer only at Rs.69</p>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Book a table</h3>
              <div className="bg-gray-100 p-4 rounded-lg">
                <Select>
                  <SelectTrigger className="w-full mb-2">
                    <SelectValue placeholder="Today" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Today</SelectItem>
                    <SelectItem value="tomorrow">Tomorrow</SelectItem>
                  </SelectContent>
                </Select>
                <Select>
                  <SelectTrigger className="w-full mb-4">
                    <SelectValue placeholder="1 guest" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1">1 guest</SelectItem>
                    <SelectItem value="2">2 guests</SelectItem>
                    <SelectItem value="3">3 guests</SelectItem>
                  </SelectContent>
                </Select>
                <Button className="w-full bg-red-500 text-white hover:bg-red-600">Book</Button>
              </div>
              <h3 className="text-xl font-semibold my-4">Direction</h3>
              <div className="bg-gray-100 p-4 rounded-lg mb-4">
                <div className="w-full h-40 bg-gray-300 rounded-lg mb-2"></div>
                <p className="text-sm text-gray-600 mb-2">
                  1131, 1st Floor, 100 Feet Road, Indiranagar, Bengaluru
                </p>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">Copy</Button>
                  <Button variant="outline" size="sm">Direction</Button>
                </div>
              </div>
            </div>
          </div>
        </TabsContent>
        <TabsContent value="reviews">Reviews content</TabsContent>
        <TabsContent value="photos">Photos content</TabsContent>
        <TabsContent value="menu">Menu content</TabsContent>
        <TabsContent value="events">Events content</TabsContent>
        <TabsContent value="book">Book a Table content</TabsContent>
      </Tabs>
    </div>
  )
}