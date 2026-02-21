"use client"

import { useState } from "react"
import { Send, Check } from "lucide-react"

const prestations = [
  "Pose Gel",
  "Extensions",
  "Nail Art",
  "Remplissage",
  "Manucure",
  "P\u00e9dicure",
]

export function ReservationForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="mt-8 flex flex-col items-center py-12 text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
          <Check className="h-8 w-8 text-primary" />
        </div>
        <h3 className="mt-6 font-serif text-2xl text-card-foreground">
          {"Demande envoy\u00e9e\u2009!"}
        </h3>
        <p className="mt-2 text-muted-foreground">
          {"Merci pour votre demande. Nous vous recontacterons tr\u00e8s rapidement pour confirmer votre rendez-vous."}
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-primary underline underline-offset-4"
        >
          {"Faire une nouvelle r\u00e9servation"}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-sm font-medium text-card-foreground">
            Nom complet
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            placeholder="Votre nom"
            className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="phone" className="text-sm font-medium text-card-foreground">
            {"T\u00e9l\u00e9phone"}
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            placeholder="06 12 34 56 78"
            className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="email" className="text-sm font-medium text-card-foreground">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          placeholder="votre@email.com"
          className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="prestation" className="text-sm font-medium text-card-foreground">
          Prestation
        </label>
        <select
          id="prestation"
          name="prestation"
          required
          className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          defaultValue=""
        >
          <option value="" disabled>
            {"Choisissez une prestation"}
          </option>
          {prestations.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </select>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="date" className="text-sm font-medium text-card-foreground">
          {"Date souhait\u00e9e"}
        </label>
        <input
          id="date"
          name="date"
          type="date"
          required
          className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-sm font-medium text-card-foreground">
          Message (optionnel)
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Pr\u00e9cisez vos souhaits ou posez vos questions..."
          className="resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        {"Envoyer ma demande"}
        <Send className="h-4 w-4" />
      </button>
    </form>
  )
}
