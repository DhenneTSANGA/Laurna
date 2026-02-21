import { Star } from "lucide-react"

const testimonials = [
  {
    name: "Sarah M.",
    text: "Un travail exceptionnel ! Mes ongles n\u2019ont jamais \u00e9t\u00e9 aussi beaux. laurna est une vraie artiste, je recommande \u00e0 100%.",
    rating: 5,
  },
  {
    name: "Am\u00e9lie D.",
    text: "Toujours satisfaite de mes rendez-vous chez laurna. La qualit\u00e9 est au rendez-vous et l\u2019accueil est chaleureux.",
    rating: 5,
  },
  {
    name: "Fatima K.",
    text: "Le nail art est magnifique et tient super longtemps. L\u2019hygi\u00e8ne est irr\u00e9prochable. Mon adresse pr\u00e9f\u00e9r\u00e9e !",
    rating: 5,
  },
]

export function Testimonials() {
  return (
    <section className="bg-secondary py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-primary">
            {"T\u00e9moignages"}
          </p>
          <h2 className="font-serif text-4xl text-foreground md:text-5xl">
            {"Ce que disent nos clientes"}
          </h2>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="rounded-2xl bg-card p-8"
            >
              <div className="flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="mt-4 leading-relaxed text-muted-foreground">
                {`\u201c${testimonial.text}\u201d`}
              </p>
              <p className="mt-6 text-sm font-semibold text-card-foreground">
                {testimonial.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
