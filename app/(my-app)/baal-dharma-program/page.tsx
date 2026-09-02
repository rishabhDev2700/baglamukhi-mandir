import type { Metadata } from "next";
import { BaalDharmaProgram } from "./program";
import { HERO } from "./content";

export const metadata: Metadata = {
  title: `${HERO.title} | Shri Baglamukhi Mandir`,
  description: HERO.subtitle,
};

export default function BaalDharmaProgramPage() {
  return <BaalDharmaProgram />;
}
