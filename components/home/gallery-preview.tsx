"use client"

import { useState, useRef, useEffect } from "react"
import Link from "next/link"
import { ArrowRight, Play, X } from "lucide-react"
import { motion, AnimatePresence, useInView } from "framer-motion"

const videos = [
  { src: "/videos/1.mp4", alt: "Pose gel rose nude" },
  { src: "/videos/2.mp4", alt: "Nail art floral" },
  { src: "/videos/3.mp4", alt: "Extensions chrome doré" },
  { src: "/videos/4.mp4", alt: "French manucure classique" },
]

function PreviewVideoCard({ video, index, onClick }: { video: typeof videos[0], index: number, onClick: () => void }) {
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
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      whileHover={{ scale: 1.05, transition: { duration: 0.3 } }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={onClick}
      className="group relative aspect-square overflow-hidden rounded-2xl cursor-pointer touch-manipulation"
      role="button"
      aria-label={`Voir la vidéo : ${video.alt}`}
      tabIndex={0}
    >
      <video
        ref={videoRef}
        src={isInView ? video.src : undefined}
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        muted
        loop
        playsInline
        preload="metadata"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-colors duration-300 group-hover:bg-foreground/20">
        <Play className="h-10 w-10 text-background opacity-0 scale-75 transition-all duration-300 group-hover:opacity-100 group-hover:scale-100 fill-current" />
      </div>
    </motion.div>
  )
}

export function GalleryPreview() {
  const [lightboxVideo, setLightboxVideo] = useState<string | null>(null)

  return (
    <section className="bg-background py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-end justify-between gap-4 md:flex-row md:items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="mb-2 text-sm uppercase tracking-[0.3em] text-primary">
              {"Nos réalisations"}
            </p>
            <h2 className="font-serif text-4xl text-foreground md:text-5xl">
              {"Galerie"}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link
              href="/galerie"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80"
            >
              {"Voir toute la galerie"}
              <ArrowRight className="h-4 w-4" />
            </Link>
          </motion.div>
        </div>

        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          {videos.map((video, index) => (
            <PreviewVideoCard 
              key={index}
              video={video}
              index={index}
              onClick={() => setLightboxVideo(video.src)}
            />
          ))}
        </div>
      </div>

      {/* Lightbox Premium */}
      <AnimatePresence>
        {lightboxVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/90 p-4 backdrop-blur-md"
            onClick={() => setLightboxVideo(null)}
            role="dialog"
            aria-label="Lecteur vidéo"
          >
            {/* Bouton de fermeture élégant */}
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              onClick={() => setLightboxVideo(null)}
              className="absolute right-6 top-6 z-[110] text-background/80 transition-colors hover:text-background"
              aria-label="Fermer"
            >
              <X className="h-10 w-10" />
            </motion.button>

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
