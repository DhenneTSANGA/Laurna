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
            <Link href="/" className="inline-block">
              <Image 
                src="/logo1.png" 
                alt="Logo Laurnae" 
                width={80} 
                height={80} 
                className="h-20 w-auto opacity-90 transition-opacity hover:opacity-100"
              />
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
                <span>+33 6 12 34 56 78</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <Mail className="h-4 w-4" />
                <span>contact@laurnae.fr</span>
              </li>
              <li className="flex items-center gap-2 text-sm opacity-70">
                <MapPin className="h-4 w-4" />
                <span>Paris, France</span>
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
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-background/20 opacity-70 transition-opacity hover:opacity-100"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://tiktok.com"
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
            {"© 2026 Laurnae \u00c9clat d\u2019Ongles. Tous droits r\u00e9serv\u00e9s."}
          </p>
        </div>
      </div>
    </footer>
  )
}
