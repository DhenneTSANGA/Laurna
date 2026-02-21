import type { Metadata } from "next"
import { GalleryGrid } from "@/components/galerie/gallery-grid"
import { GalerieHeader } from "@/components/galerie/galerie-header"

export const metadata: Metadata = {
  title: "Galerie",
  description:
    "D\u00e9couvrez nos r\u00e9alisations : pose gel, nail art, extensions et plus encore. Galerie photos de laurna \u00c9clat d\u2019Ongles.",
}

export default function GaleriePage() {
  return (
    <>
      <GalerieHeader />
      <GalleryGrid />
    </>
  )
}
