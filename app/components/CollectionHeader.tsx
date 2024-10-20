'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Button } from "@/components/ui/button"
import { FiLink2, FiPlus } from 'react-icons/fi'
import { Alert, AlertDescription } from "@/components/ui/alert"
import { useToast } from "@/hooks/use-toast"
import Image from 'next/image'
import Link from 'next/link'
import Login from './Login'

export default function CollectionHeader() {
  const [isSaved, setIsSaved] = useState(false)
  const [showAlert, setShowAlert] = useState(false)
  const [showLoginModal, setShowLoginModal] = useState(false)
  const { toast } = useToast()

  const toggleSave = () => {
    // Simulate checking if user is logged in
    const isLoggedIn = false

    if (isLoggedIn) {
      setIsSaved(!isSaved)
    } else {
      setShowLoginModal(true)
    }
  }

  const handleLinkClick = () => {
    // Copy the current URL to clipboard
    navigator.clipboard.writeText(window.location.href)
    setShowAlert(true)
    setTimeout(() => setShowAlert(false), 3000)
  }

  const handleLogin = () => {
    setIsSaved(true)
    toast({
      title: "Collection Saved",
      description: "The collection has been saved to your profile.",
      duration: 3000,
    })
  }

  return (
    <div className="container m-4">
      <div className="text-sm py-4 text-gray-600">
        <Link href="#" className="hover:underline">Home</Link>
        <span className="mx-2">/</span>
        <Link href="#" className="hover:underline">Bengaluru</Link>
        <span className="mx-2">/</span>
        <Link href="#" className="hover:underline">Collections</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-900">Top Trending Spots</span>
      </div>
      <div className="relative w-full h-[400px] rounded-lg overflow-hidden">
        <Image
          src="/move/07.jpg?height=400&width=1200"
          alt="Restaurant interior"
          layout="fill"
          objectFit="cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        <div className="absolute top-4 right-4 flex space-x-2">
          <Button
            variant="outline"
            size="icon"
            className="bg-white bg-opacity-20 hover:bg-opacity-30 text-white"
            onClick={handleLinkClick}
          >
            <FiLink2 className="h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            size="sm"
            className={`bg-white bg-opacity-20 hover:bg-opacity-30 text-white ${isSaved ? 'bg-opacity-30' : ''}`}
            onClick={toggleSave}
          >
            <FiPlus className="h-4 w-4 mr-2" />
            {isSaved ? 'Saved' : 'Save Collection'}
          </Button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="absolute bottom-8 left-8 text-white"
        >
          <h2 className="text-sm font-semibold mb-2">ZOMATO COLLECTIONS</h2>
          <h1 className="text-4xl font-bold mb-4">Top Trending Spots</h1>
          <p className="text-lg mb-2 max-w-2xl">
            The restaurants that are talk of the town. Look out for more such
            popular places, updated every Thursday!
          </p>
          <p className="text-sm">39 Places</p>
        </motion.div>
      </div>
      <AnimatePresence>
        {showAlert && (
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-20 left-1/2 transform -translate-x-1/2"
          >
            <Alert className="bg-green-500 text-white border-none">
              <AlertDescription>
                Link copied to clipboard!
              </AlertDescription>
            </Alert>
          </motion.div>
        )}
      </AnimatePresence>
      <Login 
        isOpen={showLoginModal} 
        onClose={() => setShowLoginModal(false)}
        onLogin={handleLogin}
      />
    </div>
  )
}