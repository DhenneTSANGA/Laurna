"use client"

import { useState, useRef } from "react"
import { X, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence } from "framer-motion"

const categories = ["Tout", "Gel", "Nail Art", "Extensions", "French"]

// Updated to use video placeholders
const galleryItems = [
  { videoSrc: "/videos/1.mp4", alt: "Pose gel rose nude", category: "Gel" },
  { videoSrc: "/videos/2.mp4", alt: "Nail art floral", category: "Nail Art" },
  { videoSrc: "/videos/3.mp4", alt: "Extensions chrome doré", category: "Extensions" },
  { videoSrc: "/videos/4.mp4", alt: "French manucure classique", category: "French" },
  { videoSrc: "/videos/5.mp4", alt: "Effet marbre nude", category: "Gel" },
  { videoSrc: "/videos/6.mp4", alt: "Design bordeaux pailleté", category: "Nail Art" },
  { videoSrc: "/videos/7.mp4", alt: "Pose gel élégante", category: "Gel" },
  { videoSrc: "/videos/8.mp4", alt: "Ongles gel naturels", category: "Gel" },
  { videoSrc: "/videos/10.mp4", alt: "Extensions longues", category: "Extensions" },
]

export function GalleryGrid() {
  const [activeCategory, setActiveCategory] = useState("Tout")
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null)

  const filteredItems =
    activeCategory === "Tout"
      ? galleryItems
      : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <section className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* Category filter */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap justify-center gap-3"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "rounded-full px-6 py-2.5 text-sm font-medium transition-colors",
                activeCategory === category
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
        >
          <AnimatePresence mode='popLayout'>
            {filteredItems.map((item, index) => (
              <motion.button
                layout
                key={`${item.videoSrc}-${index}`}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                transition={{ 
                  duration: 0.4, 
                  delay: (index % 3) * 0.1 
                }}
                onClick={() => setLightboxVideo(item.videoSrc)}
                className="group relative aspect-square overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
              >
                {/* Video Preview - usually a muted, loop video for the card */}
                <video
                  src={item.videoSrc}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
                  muted
                  loop
                  playsInline
                  autoPlay
                />
                <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/30">
                  <div className="bg-primary/80 p-4 rounded-full opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100">
                    <Play className="h-6 w-6 text-primary-foreground fill-current" />
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-foreground/60 to-transparent">
                  <span className="text-sm font-medium text-background">
                    {item.alt}
                  </span>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Instagram CTA */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-16 text-center"
        >
          <p className="text-muted-foreground">
            {"Retrouvez encore plus de réalisations sur "}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-4"
            >
              {"notre Instagram"}
            </a>
          </p>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-sm"
            onClick={() => setLightboxVideo(null)}
            role="dialog"
            aria-label="Vidéo agrandie"
          >
            <button
              onClick={() => setLightboxVideo(null)}
              className="absolute right-6 top-6 z-[110] text-background transition-opacity hover:opacity-80"
              aria-label="Fermer"
            >
              <X className="h-8 w-8" />
            </button>
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative aspect-video w-full max-w-5xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={lightboxVideo}
                className="h-full w-full rounded-xl"
                controls
                autoPlay
                playsInline
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
