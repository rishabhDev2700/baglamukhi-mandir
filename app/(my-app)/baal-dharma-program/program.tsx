"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  ScrollText,
  Music,
  Heart,
  CalendarDays,
  Clock,
  Users,
  Sparkles,
  Check,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  HERO,
  HERO_FACTS,
  OVERVIEW,
  CURRICULUM_INTRO,
  CURRICULUM_GROUPS,
  YEARS,
  GRADUATION,
  SANGEET,
  SCHEDULE,
  SUPERVISED,
  REGISTRATION,
  CLOSING,
} from "./content";

const ICONS = {
  book: BookOpen,
  scroll: ScrollText,
  music: Music,
  heart: Heart,
} as const;

const rise = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { duration: 0.6 },
};

function SectionHeading({
  eyebrow,
  title,
  intro,
  light = false,
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  light?: boolean;
}) {
  return (
    <motion.div {...rise} className="max-w-3xl mx-auto text-center mb-12">
      {eyebrow && (
        <p
          className={`uppercase tracking-widest text-xs font-semibold mb-3 ${
            light ? "text-yellow-400" : "text-amber-600"
          }`}
        >
          {eyebrow}
        </p>
      )}
      <h2
        className={`font-main text-3xl md:text-4xl font-bold ${
          light ? "text-white" : "text-red-600"
        }`}
      >
        {title}
      </h2>
      {intro && (
        <p
          className={`mt-4 text-lg ${
            light ? "text-amber-100/80" : "text-gray-600"
          }`}
        >
          {intro}
        </p>
      )}
    </motion.div>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 text-gray-700">
      <Check className="size-5 shrink-0 mt-0.5 text-amber-600" />
      <span>{children}</span>
    </li>
  );
}

export function BaalDharmaProgram() {
  return (
    <div className="min-h-screen bg-white">
      {/* ---------- Hero ---------- */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden">
        <Image
          src={HERO.image}
          alt={HERO.imageAlt}
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-b from-amber-950/80 via-amber-950/70 to-amber-950/90" />
        <div className="relative container mx-auto px-4 pt-40 pb-24 text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-4"
          >
            {HERO.eyebrow}
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
            className="font-main text-4xl md:text-6xl font-bold text-white drop-shadow-lg max-w-4xl mx-auto"
          >
            {HERO.title}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-6 text-lg md:text-xl text-amber-100/90 max-w-2xl mx-auto"
          >
            {HERO.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.7 }}
            className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto"
          >
            {HERO_FACTS.map((fact) => (
              <div
                key={fact.label}
                className="rounded-2xl border border-yellow-400/30 bg-white/10 backdrop-blur-sm px-6 py-5"
              >
                <p className="font-main text-2xl md:text-3xl font-bold text-yellow-400">
                  {fact.value}
                </p>
                <p className="text-sm text-amber-100/80 mt-1">{fact.label}</p>
              </div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-10"
          >
            <Link href="#registration">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold"
              >
                Registration Details
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ---------- Overview ---------- */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
              className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-xl"
            >
              <Image
                src={OVERVIEW.image}
                alt={OVERVIEW.imageAlt}
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7 }}
            >
              <p className="uppercase tracking-widest text-xs font-semibold text-amber-600 mb-3">
                About the Program
              </p>
              <h2 className="font-main text-3xl md:text-4xl font-bold text-red-600 mb-6">
                A lasting connection with our Dharma
              </h2>
              {OVERVIEW.paragraphs.map((p) => (
                <p key={p} className="text-lg text-gray-700 mb-4 last:mb-0">
                  {p}
                </p>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- What children will learn ---------- */}
      <section className="py-20 md:py-28 bg-amber-50/60 border-y border-amber-100">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Curriculum"
            title="What Children Will Learn"
            intro={CURRICULUM_INTRO}
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {CURRICULUM_GROUPS.map((group, i) => {
              const Icon = ICONS[group.icon];
              return (
                <motion.div
                  key={group.title}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-3xl border border-amber-100 p-8 shadow-sm hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-6">
                    <span className="flex items-center justify-center size-12 rounded-2xl bg-amber-100 text-amber-700">
                      <Icon className="size-6" />
                    </span>
                    <h3 className="font-main text-xl font-bold text-red-600">
                      {group.title}
                    </h3>
                  </div>
                  <ul className="space-y-3">
                    {group.items.map((item) => (
                      <Bullet key={item}>{item}</Bullet>
                    ))}
                  </ul>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ---------- Sangeet ---------- */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Sangeet"
            title="Devotional Music at the Mandir"
            intro="Children learn instruments and devotional singing alongside their study of Dharma, growing from first rhythms to confident group performance."
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {SANGEET.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="group rounded-3xl overflow-hidden border border-amber-100 shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative aspect-4/3 overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.imageAlt}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-main text-xl font-bold text-red-600 mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Three-year journey ---------- */}
      <section
        id="journey"
        className="py-20 md:py-28 bg-amber-50/60 border-y border-amber-100 scroll-mt-24"
      >
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Curriculum Path"
            title="Three-Year Learning Journey"
          />
          <div className="max-w-6xl mx-auto space-y-16 md:space-y-24">
            {YEARS.map((year, i) => (
              <div
                key={year.year}
                className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center"
              >
                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7 }}
                  className={`relative aspect-4/3 rounded-3xl overflow-hidden shadow-xl ${
                    i % 2 === 1 ? "lg:order-2" : ""
                  }`}
                >
                  <Image
                    src={year.image}
                    alt={year.imageAlt}
                    fill
                    className="object-cover"
                  />
                  <span className="absolute top-5 left-5 rounded-full bg-yellow-500 text-white font-main font-bold px-4 py-1.5 text-sm shadow-lg">
                    {year.year}
                  </span>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: i % 2 === 0 ? 40 : -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7 }}
                  className={i % 2 === 1 ? "lg:order-1" : ""}
                >
                  <p className="uppercase tracking-widest text-xs font-semibold text-amber-600 mb-2">
                    {year.year}
                  </p>
                  <h3 className="font-main text-2xl md:text-3xl font-bold text-red-600 mb-4">
                    {year.title}
                  </h3>
                  <p className="text-lg text-gray-700 mb-6">{year.summary}</p>
                  <p className="font-semibold text-gray-900 mb-4">{year.lead}</p>
                  <ul className="space-y-3">
                    {year.items.map((item) => (
                      <Bullet key={item}>{item}</Bullet>
                    ))}
                  </ul>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- Graduation & recital ---------- */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <motion.div
            {...rise}
            className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-0 rounded-3xl overflow-hidden shadow-xl border border-amber-100"
          >
            <div className="relative md:col-span-2 min-h-64">
              <Image
                src={GRADUATION.image}
                alt={GRADUATION.imageAlt}
                fill
                className="object-cover"
              />
            </div>
            <div className="md:col-span-3 bg-linear-to-br from-amber-950 via-yellow-900 to-amber-800 p-8 md:p-12 flex flex-col justify-center">
              <Sparkles className="size-8 text-yellow-400 mb-4" />
              <h3 className="font-main text-2xl md:text-3xl font-bold text-white mb-4">
                {GRADUATION.title}
              </h3>
              <p className="text-amber-100/85 text-lg">{GRADUATION.body}</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- Schedule ---------- */}
      <section className="py-20 md:py-28 bg-linear-to-br from-amber-950 via-yellow-900 to-amber-800">
        <div className="container mx-auto px-4">
          <SectionHeading
            eyebrow="Schedule"
            title="Year-Round Program Schedule"
            intro={SCHEDULE.intro}
            light
          />

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              {...rise}
              className="rounded-3xl border border-yellow-400/25 bg-white/10 backdrop-blur-sm p-8"
            >
              <CalendarDays className="size-7 text-yellow-400 mb-4" />
              <h3 className="font-main text-lg font-bold text-white mb-4">
                Program Days
              </h3>
              <ul className="space-y-2">
                {SCHEDULE.days.map((day) => (
                  <li key={day} className="text-amber-100/85">
                    {day}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              {...rise}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="rounded-3xl border border-yellow-400/25 bg-white/10 backdrop-blur-sm p-8"
            >
              <Clock className="size-7 text-yellow-400 mb-4" />
              <h3 className="font-main text-lg font-bold text-white mb-4">
                Session Hours
              </h3>
              <p className="text-amber-100/85 mb-3">{SCHEDULE.sessionNote}</p>
              <p className="font-main text-2xl font-bold text-yellow-400">
                {SCHEDULE.hours}
              </p>
              <p className="text-amber-100/70 text-sm mt-4">
                {SCHEDULE.attendance}
              </p>
            </motion.div>

            <motion.div
              {...rise}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-3xl border border-yellow-400/25 bg-white/10 backdrop-blur-sm p-8"
            >
              <Users className="size-7 text-yellow-400 mb-4" />
              <h3 className="font-main text-lg font-bold text-white mb-4">
                Group Size
              </h3>
              <p className="font-main text-xl font-bold text-yellow-400 mb-3">
                {SCHEDULE.groupSize.heading}
              </p>
              <p className="text-amber-100/80 text-sm">
                {SCHEDULE.groupSize.body}
              </p>
            </motion.div>
          </div>

          <motion.div
            {...rise}
            className="max-w-5xl mx-auto mt-10 rounded-3xl border border-yellow-400/25 bg-white/10 backdrop-blur-sm p-8"
          >
            <h3 className="font-main text-lg font-bold text-white mb-5">
              Learning Areas
            </h3>
            <div className="flex flex-wrap gap-3">
              {SCHEDULE.learningAreas.map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-yellow-400/40 bg-yellow-400/10 px-4 py-2 text-sm text-amber-50"
                >
                  {area}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- Supervised arrival & pickup ---------- */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
              className="relative aspect-4/3 rounded-3xl overflow-hidden shadow-xl lg:sticky lg:top-28"
            >
              <Image
                src={SUPERVISED.image}
                alt={SUPERVISED.imageAlt}
                fill
                className="object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7 }}
            >
              <p className="uppercase tracking-widest text-xs font-semibold text-amber-600 mb-3">
                For Families
              </p>
              <h2 className="font-main text-3xl md:text-4xl font-bold text-red-600 mb-6">
                Supervised Arrival &amp; Pickup Period
              </h2>
              <p className="text-lg text-gray-700 mb-4">{SUPERVISED.intro}</p>
              <p className="text-lg text-gray-700 mb-6">{SUPERVISED.detail}</p>
              <p className="font-semibold text-gray-900 mb-4">
                {SUPERVISED.lead}
              </p>
              <ul className="space-y-3 mb-8">
                {SUPERVISED.activities.map((item) => (
                  <Bullet key={item}>{item}</Bullet>
                ))}
              </ul>
              <div className="rounded-2xl bg-amber-50 border border-amber-100 p-6 space-y-3">
                {SUPERVISED.notes.map((note) => (
                  <p key={note} className="text-sm text-gray-600">
                    {note}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ---------- Registration ---------- */}
      <section
        id="registration"
        className="relative py-20 md:py-28 overflow-hidden scroll-mt-24"
      >
        <Image
          src={REGISTRATION.image}
          alt={REGISTRATION.imageAlt}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-amber-950/90" />
        <div className="relative container mx-auto px-4">
          <SectionHeading
            eyebrow="Enrolment"
            title="Registration"
            intro={REGISTRATION.intro}
            light
          />

          <motion.div {...rise} className="max-w-3xl mx-auto">
            <p className="text-center text-amber-100/80 text-lg mb-10">
              {REGISTRATION.detail}
            </p>

            <dl className="rounded-3xl border border-yellow-400/25 bg-white/10 backdrop-blur-sm divide-y divide-yellow-400/20 overflow-hidden">
              {REGISTRATION.details.map((row) => (
                <div
                  key={row.label}
                  className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-6 px-6 py-4"
                >
                  <dt className="sm:w-52 shrink-0 text-sm uppercase tracking-wide text-yellow-400/90 font-semibold">
                    {row.label}
                  </dt>
                  <dd className="text-amber-50">{row.value}</dd>
                </div>
              ))}
            </dl>

            <p className="text-center text-amber-100/70 text-sm mt-8">
              {REGISTRATION.note}
            </p>

            <div className="text-center mt-10">
              <Link href="/contact-us">
                <Button
                  size="lg"
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold"
                >
                  Enquire About Registration
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ---------- Closing ---------- */}
      <section className="py-16 md:py-20 bg-amber-50/60">
        <motion.div
          {...rise}
          className="container mx-auto px-4 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-center"
        >
          {CLOSING.map((line) => (
            <span
              key={line}
              className="font-main text-lg md:text-2xl font-bold text-red-600"
            >
              {line}
            </span>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
