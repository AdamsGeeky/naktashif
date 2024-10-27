'use client'
import Link from 'next/link'
import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { exploreOptions } from "../Data/Seed"

export default function ExploreOptions() {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (value: string) => {
    setOpenItems((prevOpenItems) =>
      prevOpenItems.includes(value)
        ? prevOpenItems.filter((item) => item !== value)
        : [...prevOpenItems, value]
    )
  }

  return (
    <div className="container mx-auto px-4 py-8 mt-5">
      <h2 className="text-2xl font-bold mb-6">Explore options near me</h2>
      <Accordion type="multiple" value={openItems} onValueChange={setOpenItems}
       className="w-full text-left py-2 px-4 bg-white border rounded-md text-gray-800 font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-200 m-4"
      >
        {exploreOptions.map((option, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="m-4">
            <AccordionTrigger onClick={() => toggleItem(`item-${index}`)}>
              {option.title}
            </AccordionTrigger>
            <AccordionContent>
              <AnimatePresence>
                {openItems.includes(`item-${index}`) && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ul className="space-y-2">
                      {option.items.map((item, itemIndex) => (
                        <motion.li
                          key={itemIndex}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: itemIndex * 0.1 }}
                          className="text-gray-600 hover:text-gray-900 cursor-pointer"
                        >
                          <Link href={`/restaurants`}>{item}</Link>
                        </motion.li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  )
}