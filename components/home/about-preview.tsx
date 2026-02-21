"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export function AboutPreview() {
  return (
    <section className="bg-background py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-16 lg:flex-row">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl lg:w-1/2 shadow-2xl"
          >
            <Image
              src="/ongles2.jpg"
              alt="Laurnae, fondatrice"
              fill
              className="object-cover"
            />
          </motion.div>
          <div className="lg:w-1/2">
            <motion.p 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-2 text-sm uppercase tracking-[0.3em] text-primary"
            >
              {"Notre histoire"}
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl leading-tight text-foreground md:text-5xl"
            >
              {"La passion de la beaut\u00e9 des ongles"}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 leading-relaxed text-muted-foreground"
            >
              {"Laurnae \u00c9clat d\u2019Ongles est n\u00e9e d\u2019une passion pour l\u2019art de l\u2019onglerie. Chaque cr\u00e9ation est r\u00e9alis\u00e9e avec soin, pr\u00e9cision et cr\u00e9ativit\u00e9 pour sublimer vos mains et refl\u00e9ter votre personnalit\u00e9."}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 leading-relaxed text-muted-foreground"
            >
              {"Qualit\u00e9 des produits, hygi\u00e8ne irr\u00e9prochable et attention aux d\u00e9tails sont nos valeurs fondamentales."}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Link
                href="/a-propos"
                className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-primary transition-opacity hover:opacity-80"
              >
                {"En savoir plus"}
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
