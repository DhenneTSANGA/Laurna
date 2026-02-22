import type { Metadata } from "next"
import { ContactContent } from "@/components/contact/contact-content"

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contactez Laurna \u00c9clat d\u2019Ongles. T\u00e9l\u00e9phone, email, r\u00e9seaux sociaux ou formulaire de contact.",
}

export default function ContactPage() {
  return <ContactContent />
}
