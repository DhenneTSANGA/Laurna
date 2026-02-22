"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Heart, Shield, Sparkles, Eye } from "lucide-react"
import { motion } from "framer-motion"

const values = [
  {
    icon: Sparkles,
    title: "Qualit\u00e9",
    description:
      "Nous utilisons uniquement des produits professionnels de haute qualit\u00e9 pour garantir un r\u00e9sultat impeccable et durable.",
  },
  {
    icon: Eye,
    title: "Pr\u00e9cision",
    description:
      "Chaque d\u00e9tail compte. Nous apportons un soin m\u00e9ticuleux \u00e0 chaque \u00e9tape de la prestation pour un rendu parfait.",
  },
  {
    icon: Heart,
    title: "Cr\u00e9ativit\u00e9",
    description:
      "Notre passion pour l\u2019art nous pousse \u00e0 cr\u00e9er des designs uniques qui refl\u00e8tent la personnalit\u00e9 de chaque cliente.",
  },
  {
    icon: Shield,
    title: "Hygi\u00e8ne",
    description:
      "La s\u00e9curit\u00e9 et l\u2019hygi\u00e8ne sont nos priorit\u00e9s. Tous nos outils sont st\u00e9rilis\u00e9s et nos protocoles sont rigoureux.",
  },
]

export function AProposContent() {
  return (
    <>
      {/* Header */}
      <section className="bg-secondary py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-2 text-sm uppercase tracking-[0.3em] text-primary"
          >
            {"Qui sommes-nous"}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl text-foreground md:text-6xl"
          >
            {"\u00c0 propos"}
          </motion.h1>
        </div>
      </section>

      {/* Story */}
      <section className="bg-background py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="flex flex-col items-center gap-16 lg:flex-row">
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[3/4] w-full max-w-lg overflow-hidden rounded-2xl lg:w-1/2 shadow-xl"
            >
              <Image
                src="/laurna.jpg"
                alt="Laurna, fondatrice"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </motion.div>
            <div className="lg:w-1/2">
              <motion.h2 
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="font-serif text-3xl text-foreground md:text-4xl"
              >
                {"L\u2019histoire de laurna"}
              </motion.h2>
              <div className="mt-6 flex flex-col gap-4 leading-relaxed text-muted-foreground">
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {"Passionn\u00e9e par la beaut\u00e9 et l\u2019art des ongles depuis toujours, laurna a transform\u00e9 cette passion en un v\u00e9ritable m\u00e9tier d\u2019excellence. Form\u00e9e aux meilleures techniques de l\u2019onglerie moderne, elle met son savoir-faire au service de chaque cliente."}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {"Laurna \u00c9clat d\u2019Ongles est n\u00e9e de la volont\u00e9 d\u2019offrir une exp\u00e9rience unique : un moment de d\u00e9tente o\u00f9 chaque femme peut se sentir belle et valoris\u00e9e. Chaque rendez-vous est une cr\u00e9ation sur mesure."}
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  {"Active sur Instagram et TikTok, laurna partage r\u00e9guli\u00e8rement ses cr\u00e9ations et inspire une communaut\u00e9 grandissante de passionn\u00e9es. Sa vision\u2009: rendre l\u2019onglerie accessible, cr\u00e9ative et toujours plus belle."}
                </motion.p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              {"Ce qui nous anime"}
            </motion.p>
            <motion.h2 
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="font-serif text-4xl text-foreground md:text-5xl"
            >
              {"Nos valeurs"}
            </motion.h2>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div 
                key={value.title} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, transition: { duration: 0.3 } }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="rounded-2xl bg-card p-8 text-center group"
              >
                <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <value.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-6 font-serif text-xl text-card-foreground">
                  {value.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-background py-24 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-3xl px-6 text-center"
        >
          <h2 className="font-serif text-3xl text-foreground md:text-4xl">
            {"Envie de sublimer vos ongles\u2009?"}
          </h2>
          <p className="mt-4 text-muted-foreground">
            {"Prenez rendez-vous et d\u00e9couvrez par vous-m\u00eame l\u2019exp\u00e9rience laurna."}
          </p>
          <Link
            href="/reservation"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
          >
            {"R\u00e9server maintenant"}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </section>
    </>
  )
}
