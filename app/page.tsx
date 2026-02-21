import { HeroSection } from "@/components/home/hero-section"
import { AboutPreview } from "@/components/home/about-preview"
import { ServicesPreview } from "@/components/home/services-preview"
import { GalleryPreview } from "@/components/home/gallery-preview"
import { Testimonials } from "@/components/home/testimonials"
import { CTASection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <ServicesPreview />
      <GalleryPreview />
      <Testimonials />
      <CTASection />
    </>
  )
}
