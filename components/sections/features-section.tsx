"use client"

import { FeatureCard } from "@/components/feature-card"
import { BookOpen, Layers, Sparkles, Puzzle, Search } from "lucide-react"
import { motion } from "framer-motion"

const features = [
  {
    icon: <BookOpen className="w-6 h-6" />,
    title: "Free World Classics",
    description: "Access an extensive library of timeless world classics and read them in their beautiful, original text for free."
  },
  {
    icon: <Layers className="w-6 h-6" />,
    title: "Instant Level Adaptation",
    description: "Original text too difficult? Magically adapt any paragraph to perfectly match your current English level."
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Smart Tap Dictionary",
    description: "Tap any unknown word to instantly see its meaning, translation, and hear its native pronunciation."
  },
  {
    icon: <Sparkles className="w-6 h-6" />,
    title: "AI Story Generator",
    description: "Create your own personalized, engaging stories using AI to learn new vocabulary in context."
  },
  {
    icon: <Puzzle className="w-6 h-6" />,
    title: "Word Workshop",
    description: "Solidify your learning with an interactive vocabulary practice system tailored to your reading history."
  }
]

export function FeaturesSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  }

  return (
    <section className="py-20 md:py-32 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4 text-balance">
            Everything you need to master English
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to experience literature in English
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={itemVariants}>
              <FeatureCard
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
