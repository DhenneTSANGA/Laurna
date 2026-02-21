"use client"

import { useState } from "react"
import { Send, Check } from "lucide-react"

export function ContactForm() {
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
          {"Message envoy\u00e9\u2009!"}
        </h3>
        <p className="mt-2 text-muted-foreground">
          {"Merci pour votre message. Nous vous r\u00e9pondrons dans les meilleurs d\u00e9lais."}
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="mt-6 text-sm font-medium text-primary underline underline-offset-4"
        >
          {"Envoyer un autre message"}
        </button>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 flex flex-col gap-6">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-name" className="text-sm font-medium text-card-foreground">
            Nom
          </label>
          <input
            id="contact-name"
            name="name"
            type="text"
            required
            placeholder="Votre nom"
            className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="contact-email" className="text-sm font-medium text-card-foreground">
            Email
          </label>
          <input
            id="contact-email"
            name="email"
            type="email"
            required
            placeholder="votre@email.com"
            className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-subject" className="text-sm font-medium text-card-foreground">
          Sujet
        </label>
        <input
          id="contact-subject"
          name="subject"
          type="text"
          required
          placeholder="L\u2019objet de votre message"
          className="rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="contact-message" className="text-sm font-medium text-card-foreground">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          rows={5}
          required
          placeholder="\u00c9crivez votre message ici..."
          className="resize-none rounded-lg border border-input bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
        />
      </div>

      <button
        type="submit"
        className="flex items-center justify-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-90"
      >
        {"Envoyer"}
        <Send className="h-4 w-4" />
      </button>
    </form>
  )
}
