"use client"

import { useState, useRef, useEffect } from "react"
import { X, Play } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion, AnimatePresence, useInView } from "framer-motion"

const categories = ["Tout", "Gel", "Nail Art", "Extensions", "French"]

// Updated to use video placeholders
const galleryItems = [
  { videoSrc: "/videos/1.mp4", alt: "Pose gel rose nude", category: "Gel" },
  { videoSrc: "/videos/2.mp4", alt: "Nail art floral", category: "Nail Art" },
  { videoSrc: "/videos/3.mp4", alt: "Extensions chrome doré", category: "Extensions" },
  { videoSrc: "/videos/4.mp4", alt: "French manucure classique", category: "French" },
  { videoSrc: "/videos/5.mp4", alt: "Effet marbre nude", category: "Gel" },
  { videoSrc: "/videos/11.mp4", alt: "Design bordeaux pailleté", category: "Nail Art" },
  { videoSrc: "/videos/7.mp4", alt: "Pose gel élégante", category: "Gel" },
  { videoSrc: "/videos/8.mp4", alt: "Ongles gel naturels", category: "Gel" },
  { videoSrc: "/videos/9.mp4", alt: "Extensions longues", category: "Extensions" },
]

function VideoCard({ item, index, onClick }: { item: typeof galleryItems[0], index: number, onClick: () => void }) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isInView = useInView(videoRef, { margin: "0px 0px 200px 0px" })

  useEffect(() => {
    if (videoRef.current) {
      if (isInView) {
        videoRef.current.play().catch(() => {})
      } else {
        videoRef.current.pause()
      }
    }
  }, [isInView])

  return (
    <motion.button
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
      transition={{ 
        duration: 0.4, 
        delay: (index % 3) * 0.1 
      }}
      onClick={onClick}
      className="group relative aspect-square overflow-hidden rounded-2xl focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 touch-manipulation"
      aria-label={`Voir la vidéo : ${item.alt}`}
    >
      {/* Video Preview - Optimized for mobile */}
      <video
        ref={videoRef}
        src={isInView ? item.videoSrc : undefined}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        muted
        loop
        playsInline
        preload="metadata"
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
  )
}

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
              <VideoCard 
                key={`${item.videoSrc}-${index}`}
                item={item}
                index={index}
                onClick={() => setLightboxVideo(item.videoSrc)}
              />
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
              href="https://www.tiktok.com/@laurnaeclatdongle/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-primary underline underline-offset-4"
            >
              {"notre Tiktok"}
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
            {/* Conteneur de la vidéo avec animation de zoom - Format TikTok 9:16 */}
            <motion.div 
              initial={{ scale: 0.85, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.85, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative aspect-[9/16] w-full max-w-[min(90vw,450px)] h-auto max-h-[90vh] overflow-hidden rounded-2xl bg-black shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <video
                src={lightboxVideo}
                className="h-full w-full object-cover"
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
