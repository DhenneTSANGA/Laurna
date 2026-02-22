import Link from "next/link"
import Image from "next/image"
import { Instagram, Phone, Mail, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="group mb-6 inline-block">
              <div className="relative flex h-20 w-20 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm ring-1 ring-white/10 transition-transform group-hover:scale-105">
                <Image 
                  src="/laurnalogo.jpeg" 
                  alt="Logo Laurna" 
                  fill
                  className="object-cover"
                />
              </div>
            </Link>
            <p className="mt-4 text-sm leading-relaxed opacity-70">
              {"Votre experte en onglerie. Qualité, précision et créativité au service de vos ongles."}
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest opacity-50">
              Navigation
            </h3>
            <ul className="flex flex-col gap-3">
              <li>
                <Link href="/" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  Accueil
                </Link>
              </li>
              <li>
                <Link href="/prestations" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  Prestations
                </Link>
              </li>
              <li>
                <Link href="/galerie" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  Galerie
                </Link>
              </li>
              <li>
                <Link href="/a-propos" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  {"\u00c0 propos"}
                </Link>
              </li>
              <li>
                <Link href="/reservation" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  {"R\u00e9servation"}
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-sm opacity-70 transition-opacity hover:opacity-100">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest opacity-50">
              Contact
            </h3>
            <ul className="flex flex-col gap-3">
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Phone className="h-4 w-4" />
                <span>+241 076 58 41 55</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Mail className="h-4 w-4" />
                <span>contact@laurna.fr</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <MapPin className="h-4 w-4" />
                <span>Libreville, Gabon</span>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-widest opacity-50">
              Suivez-nous
            </h3>
            <div className="flex items-center gap-4">
              <a
                href="ttps://l.instagram.com/?u=https%3A%2F%2Fwww.tiktok.com%2F%40laurnaclatdongle%3F_r%3D1%26_t%3DZS-93OHhpYbfhl%26fbclid%"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 opacity-70 transition-opacity hover:opacity-100"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/link/v2?aid=1988&lang=fr&scene=bio_url&target=https%3A%2F%2Fwww.instagram.com%2Flaurnaclatdongles%3Figsh%3DMXgxeHY3bXdxenlrcw%253D%253D%26utm_source%3Dqr"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 opacity-70 transition-opacity hover:opacity-100"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.88-2.88 2.89 2.89 0 012.88-2.88c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.34-6.34V8.53a8.26 8.26 0 004.76 1.5v-3.4a4.82 4.82 0 01-1-.06z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-background/10 pt-8 text-center">
          <p className="text-xs opacity-50">
            {"© 2026 Laurna \u00c9clat d\u2019Ongles. Tous droits r\u00e9serv\u00e9s."}
          </p>
        </div>
      </div>
    </footer>
  )
}
