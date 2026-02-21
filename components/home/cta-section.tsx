import Link from "next/link"
import { ArrowRight, CalendarDays } from "lucide-react"

export function CTASection() {
  return (
    <section className="bg-primary py-24">
      <div className="mx-auto max-w-7xl px-6 text-center">
        <CalendarDays className="mx-auto h-12 w-12 text-primary-foreground/70" />
        <h2 className="mt-6 font-serif text-4xl text-primary-foreground md:text-5xl">
          {"Pr\u00eate \u00e0 sublimer vos ongles\u2009?"}
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-primary-foreground/80">
          {"R\u00e9servez votre cr\u00e9neau en quelques clics et offrez-vous une exp\u00e9rience onglerie d\u2019exception."}
        </p>
        <Link
          href="/reservation"
          className="mt-10 inline-flex items-center gap-2 rounded-full bg-background px-8 py-4 text-sm font-medium text-foreground transition-opacity hover:opacity-90"
        >
          {"R\u00e9server mon rendez-vous"}
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
