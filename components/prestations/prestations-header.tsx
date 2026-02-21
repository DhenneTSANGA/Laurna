"use client"

import { motion } from "framer-motion"

export function PrestationsHeader() {
  return (
    <section className="bg-secondary py-20 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <motion.p 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-2 text-sm uppercase tracking-[0.3em] text-primary"
        >
          {"Nos services"}
        </motion.p>
        <motion.h1 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="font-serif text-4xl text-foreground md:text-6xl"
        >
          {"Prestations & Tarifs"}
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-4 max-w-2xl text-muted-foreground"
        >
          {"Chaque prestation est r\u00e9alis\u00e9e avec des produits de qualit\u00e9 sup\u00e9rieure et un souci du d\u00e9tail irr\u00e9prochable."}
        </motion.p>
      </div>
    </section>
  )
}
