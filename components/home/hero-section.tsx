"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative flex min-h-[90vh] items-center overflow-hidden">
      {/* Background image */}
      <motion.div 
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/hero-nails.jpg"
          alt="Ongles magnifiques par Laurnae"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </motion.div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-32">
        <div className="max-w-2xl">
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-4 text-sm uppercase tracking-[0.3em] text-background/70"
          >
            {"Onglerie professionnelle"}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="font-serif text-5xl leading-tight text-background md:text-7xl md:leading-tight"
          >
            {"L\u2019\u00e9clat de vos ongles, notre passion"}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-6 max-w-lg text-lg leading-relaxed text-background/80"
          >
            {"D\u00e9couvrez un univers de cr\u00e9ativit\u00e9 et d\u2019\u00e9l\u00e9gance. Pose gel, extensions, nail art\u2009\u2014\u2009sublimez vos mains avec Laurnae."}
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <Link
              href="/reservation"
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
            >
              {"R\u00e9server maintenant"}
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/prestations"
              className="inline-flex items-center gap-2 rounded-full border border-background/30 px-8 py-4 text-sm font-medium text-background transition-colors hover:bg-background/10"
            >
              {"Nos prestations"}
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
