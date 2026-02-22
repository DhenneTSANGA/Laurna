import type { Metadata } from "next"
import { ContactForm } from "@/components/contact/contact-form"
import { Phone, Mail, MapPin, Instagram, Clock } from "lucide-react"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Laurna \u00c9clat d\u2019Ongles. T\u00e9l\u00e9phone, email, r\u00e9seaux sociaux ou formulaire de contact.",
}

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

export default function ContactPage() {
  return (
    <>
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-primary">
            {"Restons en contact"}
          </p>
          <h1 className="font-serif text-4xl text-foreground md:text-6xl">
            {"Contactez-nous"}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {"Une question, une demande particuli\u00e8re\u2009? N\u2019h\u00e9sitez pas \u00e0 nous \u00e9crire ou \u00e0 nous appeler."}
          </p>
        </div>
      </section>

      <section className="bg-background py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid gap-16 lg:grid-cols-2">
            {/* Contact info */}
            <div>
              <h2 className="font-serif text-3xl text-foreground">
                {"Nos coordonn\u00e9es"}
              </h2>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {"Retrouvez toutes les informations pour nous joindre. Nous r\u00e9pondons g\u00e9n\u00e9ralement sous 24 heures."}
              </p>

              <div className="mt-10 flex flex-col gap-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4">
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
                  </div>
                ))}
              </div>

              {/* Social links */}
              <div className="mt-10">
                <h3 className="text-sm font-semibold uppercase tracking-widest text-muted-foreground">
                  {"Suivez-nous"}
                </h3>
                <div className="mt-4 flex gap-4">
                  <a
                    href="ttps://l.instagram.com/?u=https%3A%2F%2Fwww.tiktok.com%2F%40laurnaclatdongle%3F_r%3D1%26_t%3DZS-93OHhpYbfhl%26fbclid%"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary/10 hover:text-primary"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.tiktok.com/link/v2?aid=1988&lang=fr&scene=bio_url&target=https%3A%2F%2Fwww.instagram.com%2Flaurnaclatdongles%3Figsh%3DMXgxeHY3bXdxenlrcw%253D%253D%26utm_source%3Dqr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-12 w-12 items-center justify-center rounded-full border border-border transition-colors hover:bg-primary/10 hover:text-primary"
                    aria-label="TikTok"
                  >
                    <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.53a8.26 8.26 0 004.76 1.5v-3.4a4.82 4.82 0 01-1-.06z" />
                    </svg>
                  </a>
                </div>
              </div>

              {/* Map placeholder */}
              <div className="mt-10 overflow-hidden rounded-2xl border border-border">
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
              </div>
            </div>

            {/* Contact form */}
            <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
              <h2 className="font-serif text-2xl text-card-foreground md:text-3xl">
                {"Envoyez-nous un message"}
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                {"Remplissez le formulaire et nous vous r\u00e9pondrons dans les meilleurs d\u00e9lais."}
              </p>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
