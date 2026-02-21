"use client"

import Link from "next/link"
import { ArrowRight, Sparkles, Palette, Gem, RefreshCw } from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Sparkles,
    title: "Pose Gel",
    description: "Une pose durable et brillante pour des ongles parfaits au quotidien.",
  },
  {
    icon: Gem,
    title: "Extensions",
    description: "Allongez vos ongles avec \u00e9l\u00e9gance gr\u00e2ce \u00e0 nos techniques professionnelles.",
  },
  {
    icon: Palette,
    title: "Nail Art",
    description: "Des cr\u00e9ations uniques et personnalis\u00e9es qui refl\u00e8tent votre style.",
  },
  {
    icon: RefreshCw,
    title: "Remplissage",
    description: "Entretenez la beaut\u00e9 de vos ongles avec un remplissage soign\u00e9.",
  },
]

export function ServicesPreview() {
  return (
    <section className="bg-secondary py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-2 text-sm uppercase tracking-[0.3em] text-primary"
          >
            {"Nos services"}
          </motion.p>
          <motion.h2 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl text-foreground md:text-5xl"
          >
            {"Des prestations d\u2019exception"}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            {"D\u00e9couvrez notre gamme compl\u00e8te de services d\u2019onglerie, r\u00e9alis\u00e9s avec expertise et passion."}
          </motion.p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group rounded-2xl bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mt-6 font-serif text-xl text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href="/prestations"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {"Voir toutes les prestations"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
