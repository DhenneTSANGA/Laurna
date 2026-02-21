import type { Metadata, Viewport } from 'next'
import { Poppins, Playfair_Display, Parisienne } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'
import { WhatsAppButton } from '@/components/whatsapp-button'
import { ThemeProvider } from '@/components/theme-provider'
import './globals.css'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
})

const parisienne = Parisienne({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-parisienne',
})

export const metadata: Metadata = {
  title: {
    default: "laurna Éclat d'Ongles | Onglerie Professionnelle",
    template: "%s | laurna Éclat d'Ongles",
  },
  description:
    "laurna Éclat d'Ongles - Votre experte en onglerie : pose gel, extensions, nail art, manucure et pédicure. Réservez votre rendez-vous dès maintenant.",
  keywords: [
    'onglerie',
    'pose gel',
    'nail art',
    'extensions ongles',
    'manucure',
    'pédicure',
    'laurna',
  ],
  openGraph: {
    title: "laurna Éclat d'Ongles",
    description: 'Onglerie professionnelle - Pose gel, extensions, nail art',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#d4a0a0',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${playfair.variable} ${parisienne.variable} font-sans antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          <main>{children}</main>
          <Footer />
          <WhatsAppButton />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}
