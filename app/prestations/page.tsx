import type { Metadata } from "next"
import { ServicesList } from "@/components/prestations/services-list"
import { PrestationsHeader } from "@/components/prestations/prestations-header"

export const metadata: Metadata = {
  title: "Prestations",
  description:
    "D\u00e9couvrez nos prestations d\u2019onglerie : pose gel, extensions, nail art, remplissage, manucure et p\u00e9dicure. Tarifs et r\u00e9servation en ligne.",
}

export default function PrestationsPage() {
  return (
    <>
      <PrestationsHeader />
      <ServicesList />
    </>
  )
}
