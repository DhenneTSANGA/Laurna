"use client"

import Link from "next/link"
import {
  Sparkles,
  Gem,
  Palette,
  RefreshCw,
  Hand,
  Footprints,
} from "lucide-react"
import { motion } from "framer-motion"

const services = [
  {
    icon: Sparkles,
    title: "Pose Gel",
    description:
      "Application de gel UV sur ongle naturel pour un r\u00e9sultat brillant, solide et longue dur\u00e9e. Choix de couleurs et finitions personnalis\u00e9es.",
    price: "\u00c0 partir de 45\u00a0\u20ac",
    duration: "1h30",
  },
  {
    icon: Gem,
    title: "Extensions",
    description:
      "Allongement des ongles avec capsules ou chablons pour une longueur parfaite. Id\u00e9al pour celles qui souhaitent des ongles longs et \u00e9l\u00e9gants.",
    price: "\u00c0 partir de 55\u00a0\u20ac",
    duration: "2h",
  },
  {
    icon: Palette,
    title: "Nail Art",
    description:
      "Designs cr\u00e9atifs et personnalis\u00e9s : motifs floraux, g\u00e9om\u00e9triques, strass, chromes et plus encore. Exprimez votre style unique.",
    price: "\u00c0 partir de 5\u00a0\u20ac / ongle",
    duration: "Variable",
  },
  {
    icon: RefreshCw,
    title: "Remplissage",
    description:
      "Entretien de votre pose existante pour la garder impeccable. Recommand\u00e9 toutes les 3 \u00e0 4 semaines.",
    price: "\u00c0 partir de 35\u00a0\u20ac",
    duration: "1h",
  },
  {
    icon: Hand,
    title: "Manucure",
    description:
      "Soin complet des mains : limage, cuticules, gommage et application vernis. Des mains soign\u00e9es et sublim\u00e9es.",
    price: "\u00c0 partir de 25\u00a0\u20ac",
    duration: "45min",
  },
  {
    icon: Footprints,
    title: "P\u00e9dicure",
    description:
      "Soin complet des pieds : gommage, soin des cuticules, limage et vernis. Prenez soin de vos pieds.",
    price: "\u00c0 partir de 30\u00a0\u20ac",
    duration: "1h",
  },
]

export function ServicesList() {
  return (
    <section className="bg-background py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group flex flex-col rounded-2xl border border-border bg-card p-8 transition-shadow hover:shadow-lg"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                <service.icon className="h-6 w-6 text-primary" />
              </div>

              <h3 className="mt-6 font-serif text-2xl text-card-foreground">
                {service.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>

              <div className="mt-6 flex items-center justify-between border-t border-border pt-6">
                <div>
                  <p className="text-lg font-semibold text-card-foreground">
                    {service.price}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {"Dur\u00e9e : " + service.duration}
                  </p>
                </div>
                <Link
                  href="/reservation"
                  className="rounded-full bg-primary px-6 py-2.5 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  {"R\u00e9server"}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-16 rounded-2xl bg-secondary p-8 text-center md:p-12"
        >
          <h3 className="font-serif text-2xl text-foreground md:text-3xl">
            {"Une question sur nos tarifs\u2009?"}
          </h3>
          <p className="mx-auto mt-3 max-w-lg text-muted-foreground">
            {"N\u2019h\u00e9sitez pas \u00e0 nous contacter pour un devis personnalis\u00e9 ou pour toute information compl\u00e9mentaire."}
          </p>
          <Link
            href="/contact"
            className="mt-6 inline-flex rounded-full border border-foreground bg-foreground px-8 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            {"Nous contacter"}
          </Link>
        </motion.div>
      </div>
    </section>
  )
}
