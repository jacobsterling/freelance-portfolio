"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronRight, ChevronLeft } from "lucide-react"

export function Process() {
  const [activeStep, setActiveStep] = useState(0)

  const steps = [
    { title: "Consultation", icon: "🤝", description: "Initial meeting to understand your needs" },
    { title: "Strategy", icon: "🎯", description: "Develop a tailored plan for your project" },
    { title: "Implementation", icon: "⚙️", description: "Execute the strategy with precision" },
    { title: "Tracking & Monitoring", icon: "📊", description: "Continuous evaluation and optimization" }
  ]

  const nextStep = () => setActiveStep((prev) => (prev + 1) % steps.length)
  const prevStep = () => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)

  return (
    <div className="w-full max-w-4xl mx-auto p-6 md:p-10">
      <motion.div
        className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm text-gray-800 dark:text-white rounded-3xl shadow-2xl overflow-hidden"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative p-6 md:p-10">
          <div className="relative">
            <div className="flex justify-between items-center mb-8">
              <motion.button
                onClick={prevStep}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Previous step"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>
              <motion.button
                onClick={nextStep}
                className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                aria-label="Next step"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
            <div className="relative h-96 overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex flex-col items-center justify-center"
                >
                  <motion.div
                    className="w-40 h-40 bg-slate-200 dark:bg-slate-700 rounded-3xl flex items-center justify-center text-gray-800 dark:text-white shadow-lg mb-8"
                    whileHover={{ scale: 1.05, rotate: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <span className="text-7xl">{steps[activeStep].icon}</span>
                  </motion.div>
                  <h3 className="text-3xl font-semibold mb-4 text-gray-800 dark:text-white text-center">
                    {steps[activeStep].title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-center max-w-md text-lg">{steps[activeStep].description}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex justify-center mt-8">
              {steps.map((_, index) => (
                <motion.button
                  key={index}
                  className={`w-4 h-4 rounded-full mx-2 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ${index === activeStep ? "bg-gray-600 dark:bg-gray-300" : "bg-gray-300 dark:bg-gray-600"
                    }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setActiveStep(index)}
                  aria-label={`Go to step ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
        <motion.div
          className="h-2 bg-gray-600 dark:bg-gray-300"
          initial={{ width: "0%" }}
          animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </motion.div>
    </div>
  )
}