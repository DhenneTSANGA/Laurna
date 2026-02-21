import type { Metadata } from "next"
import { ReservationForm } from "@/components/reservation/reservation-form"
import { CalendarDays, Clock, CheckCircle2 } from "lucide-react"

export const metadata: Metadata = {
  title: "R\u00e9servation",
  description:
    "R\u00e9servez votre rendez-vous d\u2019onglerie chez laurna \u00c9clat d\u2019Ongles. Pose gel, extensions, nail art et plus encore.",
}

const steps = [
  {
    icon: CalendarDays,
    title: "Choisissez votre prestation",
    description: "S\u00e9lectionnez le service souhait\u00e9 parmi notre gamme compl\u00e8te.",
  },
  {
    icon: Clock,
    title: "Indiquez vos disponibilit\u00e9s",
    description: "Pr\u00e9cisez la date et l\u2019heure qui vous conviennent.",
  },
  {
    icon: CheckCircle2,
    title: "Confirmation",
    description: "Vous recevrez une confirmation rapide de votre rendez-vous.",
  },
]

export default function ReservationPage() {
  return (
    <>
      <section className="bg-secondary py-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-2 text-sm uppercase tracking-[0.3em] text-primary">
            {"Prenez rendez-vous"}
          </p>
          <h1 className="font-serif text-4xl text-foreground md:text-6xl">
            {"R\u00e9servation"}
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
            {"R\u00e9servez votre cr\u00e9neau en quelques clics. Nous vous recontacterons pour confirmer votre rendez-vous."}
          </p>
        </div>
      </section>

      {/* Steps */}
      <section className="bg-background py-16">
        <div className="mx-auto max-w-4xl px-6">
          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <step.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mt-4 font-serif text-lg text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="bg-background pb-24">
        <div className="mx-auto max-w-2xl px-6">
          <div className="rounded-2xl border border-border bg-card p-8 md:p-12">
            <h2 className="font-serif text-2xl text-card-foreground md:text-3xl">
              {"Formulaire de r\u00e9servation"}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {"Remplissez le formulaire ci-dessous et nous vous recontacterons rapidement."}
            </p>
            <ReservationForm />
          </div>
        </div>
      </section>
    </>
  )
}
