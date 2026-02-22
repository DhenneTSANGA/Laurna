"use client"

import { ReservationForm } from "@/components/reservation/reservation-form"
import { CalendarDays, Clock, CheckCircle2 } from "lucide-react"
import { motion } from "framer-motion"

const steps = [
  {
    icon: CalendarDays,
    title: "Choisissez votre prestation",
    description: "S\u00e9lectionnez le service souhait\u00e9 parmi notre gamme compl\u00e8te.",
  },
  {
    icon: Clock,
    title: "Indiquez vos disponibilit\u00e9s",
    description: "Pr\u00e9cisez la date et l\u2019heure qui vous conviennent.",
  },
  {
    icon: CheckCircle2,
    title: "Confirmation",
    description: "Vous recevrez une confirmation rapide de votre rendez-vous.",
  },
]

export function ReservationContent() {
  return (
    <>
      <section className="bg-secondary py-20 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <motion.p 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-2 text-sm uppercase tracking-[0.3em] text-primary"
          >
            {"Prenez rendez-vous"}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl text-foreground md:text-6xl"
          >
            {"R\u00e9servation"}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            {"R\u00e9servez votre cr\u00e9neau en quelques clics. Nous vous recontacterons pour confirmer votre rendez-vous."}
          </motion.p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-background py-16 overflow-hidden">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div 
                key={index} 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-lg text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-background pb-24 overflow-hidden">
        <div className="mx-auto max-w-2xl px-6">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="rounded-2xl border border-border bg-card p-8 md:p-12"
          >
            <h2 className="font-serif text-2xl text-card-foreground md:text-3xl">
              {"Formulaire de r\u00e9servation"}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {"Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement."}
            </p>
            <ReservationForm />
          </motion.div>
        </div>
      </section>
    </>
  )
}
