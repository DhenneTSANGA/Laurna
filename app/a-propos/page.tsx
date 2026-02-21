import type { Metadata } from "next"
import { AProposContent } from "@/components/a-propos/a-propos-content"

export const metadata: Metadata = {
  title: "\u00c0 propos",
  description:
    "D\u00e9couvrez l\u2019histoire de laurna \u00c9clat d\u2019Ongles, notre passion pour l\u2019onglerie et nos valeurs : qualit\u00e9, pr\u00e9cision, cr\u00e9ativit\u00e9 et hygi\u00e8ne.",
}

export default function AProposPage() {
  return <AProposContent />
}
