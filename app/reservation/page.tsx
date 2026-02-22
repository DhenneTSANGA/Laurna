import type { Metadata } from "next"
import { ReservationContent } from "@/components/reservation/reservation-content"

export const metadata: Metadata = {
  title: "R\u00e9servation",
  description:
    "R\u00e9servez votre rendez-vous d\u2019onglerie chez laurna \u00c9clat d\u2019Ongles. Pose gel, extensions, nail art et plus encore.",
}

export default function ReservationPage() {
  return <ReservationContent />
}
