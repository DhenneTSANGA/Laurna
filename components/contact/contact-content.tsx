"use client"

import { ContactForm } from "@/components/contact/contact-form"
import { Phone, Mail, MapPin, Instagram, Clock } from "lucide-react"
import { motion } from "framer-motion"

const contactInfo = [
  {
    icon: Phone,
    label: "T\u00e9l\u00e9phone",
    value: "+241 076 58 41 55",
    href: "tel:+241076584155",
  },
  {
    icon: Mail,
    label: "Email",
    value: "contact@laurna.fr",
    href: "mailto:contact@laurna.fr",
  },
  {
    icon: MapPin,
    label: "Zone d\u2019activit\u00e9",
    value: "Libreville, Derriere la prison",
    href: null,
  },
  {
    icon: Clock,
    label: "Horaires",
    value: "Lun - Sam : 9h - 19h",
    href: null,
  },
]

export function ContactContent() {
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
            {"Restons en contact"}
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="font-serif text-4xl text-foreground md:text-6xl"
          >
            {"Contactez-nous"}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-4 max-w-2xl text-muted-foreground"
          >
            {"Une question, une demande particuli\u00e8re\u2009? N\u2019h\u00e9sitez pas \u00e0 nous \u00e9crire ou \u00e0 nous appeler."}
          </motion.p>
        </div>
      </section>

      <section className="bg-background py-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-serif text-3xl text-foreground">
                {"Nos coordonn\u00e9es"}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {"Retrouvez toutes les informations pour nous joindre. Nous r\u00e9pondons g\u00e9n\u00e9ralement sous 24 heures."}
              </p>

              <div className="mt-10 flex flex-col gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <info.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">{info.label}</p>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-foreground transition-colors hover:text-primary"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-foreground">{info.value}</p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {"Suivez-nous"}
                </h3>
                <div className="mt-4 flex gap-4">
                  <motion.a
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    href="https://www.instagram.com/laurnaeclatdongles/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary/10 hover:text-primary"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </motion.a>
                  <motion.a
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    href="https://www.tiktok.com/@laurnaeclatdongles/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary/10 hover:text-primary"
                    aria-label="TikTok"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.53a8.26 8.26 0 004.76 1.5v-3.4a4.82 4.82 0 01-1-.06z" />
                    </svg>
                  </motion.a>
                </div>
              </div>

              {/* Map placeholder */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="mt-10 overflow-hidden rounded-2xl border border-border"
              >
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d83998.94722687619!2d2.2769953352365986!3d48.85882536521498!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e1f06e2b70f%3A0x40b82c3688c9460!2sParis%2C%20France!5e0!3m2!1sfr!2sfr!4v1700000000000!5m2!1sfr!2sfr"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localisation Laurna"
                />
              </motion.div>
            </motion.div>

            {/* Contact form */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="rounded-2xl border border-border bg-card p-8 md:p-12"
            >
              <h2 className="font-serif text-2xl text-card-foreground md:text-3xl">
                {"Envoyez-nous un message"}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {"Remplissez le formulaire et nous vous r\u00e9pondrons dans les meilleurs d\u00e9lais."}
              </p>
              <ContactForm />
            </motion.div>
          </div>
        </div>
      </section>
    </>
  )
}
