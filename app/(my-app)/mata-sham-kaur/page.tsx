import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Temple Deities | Shri Baglamukhi Mandir",
  description:
    "Mata Sham Kaur Mohini and Baba Sabal Singh Bawri — the deities worshipped at Shri Baglamukhi Mandir.",
};

// The source text for the first two sections arrived with corrupted Devanagari
// (dropped matras and broken conjuncts from a PDF extraction), so those sections
// are held back until clean copy is supplied. See mata-sham-kaur.txt.
const PENDING_SECTIONS = [
  {
    title: "Mata Sham Kaur Mohini",
    subtitle: "माता श्याम कौर मोहिनी",
  },
  {
    title: "History",
    subtitle: "इतिहास",
  },
];

const BAWRI_INTRO =
  "बाबा सबल सिंह बावरी (Baba Sabal Singh Bawri) राजपूत बावरी समाज के एक ऐतिहासिक और वीर पुरुष माने जाते हैं, जिनका जन्म राजस्थान के खरखडी गांव में राजा हेमराज के घर हुआ था। उन्हें इस्माइल जोगी का वरदान प्राप्त था और माना जाता है कि वह अपार शक्तियों के स्वामी थे, जिन्होंने मुगलों के अत्याचार के खिलाफ संघर्ष किया और सोनीपत (मुरथल) में बलिदान दिया।";

const BAWRI_SECTIONS = [
  {
    heading: "जन्म की कथा",
    body: "राजा हेमराज और माता कपूरी की कोई संतान न होने पर उन्होंने इस्माइल जोगी की सेवा की। जोगी ने दो पुत्रों का वरदान दिया, लेकिन एक पुत्र को धूणे (अग्नि स्थान) में सौंपने की शर्त रखी। बड़ा बेटा हरिसिंह था, और छोटे पुत्र को धूणे में चढ़ाया गया, जो बाद में 'सबल सिंह बावरी' के नाम से जाना गया।",
  },
  {
    heading: "वीरता और संघर्ष",
    body: "मुगलों के शासनकाल के दौरान, सबल सिंह बावरी ने अपनी बहादुरी से मुगलों को लोहे के चने चबवाए। उन्होंने केसरमल, अजीतमल, जाफरमल और हरिसिंह बावरी के साथ मिलकर धर्म और समाज की रक्षा की।",
  },
  {
    heading: "शहादत और मान्यता",
    body: "सोनीपत के पास मुगलों द्वारा उन्हें घेर लिया गया और सिर कलम कर दिए गए। मान्यता है कि सिर कटने के बाद भी वे लड़ते रहे।",
  },
  {
    heading: "धार्मिक महत्व",
    body: "सबल सिंह बावरी को कई लोग पीर के रूप में भी पूजते हैं। सोनीपत (मुरथल) के पास उनका प्रमुख स्थान है और उनकी याद में कई स्थानों पर मंदिर व धूणे बने हैं, जहाँ श्रद्धालु मन्नत मांगने आते हैं।",
  },
];

const BAWRI_CLOSING =
  "वे बावरिया समुदाय में एक पूजनीय देवता और लोक देवता के रूप में पूजे जाते हैं।";

export default function TempleDeitiesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* ---------- Hero ---------- */}
      <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
        <Image
          src="/temple.jpeg"
          alt="Shri Baglamukhi Mandir"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-amber-950/85 via-amber-950/75 to-amber-950/90" />
        <div className="relative container mx-auto px-4 pt-40 pb-20 text-center">
          <p className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-4">
            Shri Baglamukhi Mandir
          </p>
          <h1 className="font-main text-4xl md:text-6xl font-bold text-white drop-shadow-lg">
            Temple Deities
          </h1>
          <p className="mt-6 text-lg md:text-xl text-amber-100/90 max-w-2xl mx-auto">
            Mata Sham Kaur Mohini &amp; Baba Sabal Singh Bawri
          </p>
        </div>
      </section>

      {/* ---------- Sections awaiting clean copy ---------- */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6">
            {PENDING_SECTIONS.map((section) => (
              <div
                key={section.title}
                className="rounded-3xl border border-dashed border-amber-200 bg-amber-50/60 p-8 text-center"
              >
                <h2 className="font-main text-xl font-bold text-red-600">
                  {section.title}
                </h2>
                <p className="text-gray-500 mt-1">{section.subtitle}</p>
                <p className="text-sm text-gray-500 mt-4">
                  Detailed account coming soon.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Baba Sabal Singh Bawri ---------- */}
      <section className="pb-20 md:pb-28">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <p className="uppercase tracking-widest text-xs font-semibold text-amber-600 mb-3">
                बावरिया समुदाय के लोक देवता
              </p>
              <h2 className="font-main text-3xl md:text-4xl font-bold text-red-600">
                बाबा सबल सिंह बावरी
              </h2>
            </div>

            <p className="text-lg leading-relaxed text-gray-700 mb-12">
              {BAWRI_INTRO}
            </p>

            <h3 className="font-main text-xl font-bold text-red-600 mb-6">
              सबल सिंह बावरी का इतिहास और मान्यताएं
            </h3>

            <div className="space-y-6">
              {BAWRI_SECTIONS.map((section) => (
                <div
                  key={section.heading}
                  className="rounded-2xl border border-amber-100 bg-amber-50/50 p-6 md:p-8"
                >
                  <h4 className="font-main text-lg font-bold text-amber-800 mb-3">
                    {section.heading}
                  </h4>
                  <p className="text-gray-700 leading-relaxed">{section.body}</p>
                </div>
              ))}
            </div>

            <p className="text-lg leading-relaxed text-gray-700 mt-12 text-center">
              {BAWRI_CLOSING}
            </p>
          </div>
        </div>
      </section>

      {/* ---------- CTA ---------- */}
      <section className="py-16 bg-linear-to-br from-amber-950 via-yellow-900 to-amber-800">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-main text-2xl md:text-3xl font-bold text-white mb-4">
            Visit the Mandir
          </h2>
          <p className="text-amber-100/80 max-w-xl mx-auto mb-8">
            Join us for daily poojas and seek the blessings of our deities.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/pooja-booking">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold"
              >
                Book a Pooja
              </Button>
            </Link>
            <Link href="/contact-us">
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-yellow-400/50 text-yellow-100 hover:bg-yellow-400/10 hover:text-white font-bold"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
