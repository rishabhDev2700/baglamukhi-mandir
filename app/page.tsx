"use client";
import Image from 'next/image'
import { motion, useScroll, useTransform } from "motion/react";
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card} from "@/components/ui/card";
import { ChevronDown } from 'lucide-react';
import baglamukhi from "@/assets/baglamukhi-devi.jpeg";
function page() {
  const timetable = [
    { time: "6:00 AM", activity: "Mangala Aarti" },
    { time: "7:00 AM", activity: "Morning Pooja" },
    { time: "12:00 PM", activity: "Rajbhog Aarti" },
    { time: "6:00 PM", activity: "Sandhya Aarti" },
    { time: "8:00 PM", activity: "Shayan Aarti" },
  ];

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <main className='relative'>
      <div className="relative h-screen w-full overflow-hidden">
        <motion.div style={{ y }} className="absolute inset-0">
          <Image className='w-full h-full object-cover' src="/hero.jpg" width={10000} height={10000} alt="baglamukhi mata mandir"/>
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        </motion.div>
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white p-4">
          <motion.h1 
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className='font-main font-bold text-4xl md:text-7xl text-yellow-400 drop-shadow-lg'
          >
            Shri Baglamukhi Mandir
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-4 text-lg md:text-2xl max-w-2xl drop-shadow-md"
          >
            A divine place to find peace and seek blessings. Join us for daily poojas and special events.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="mt-8"
          >
            <Link href="/pooja-booking">
              <Button size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-white font-bold">
                Book a Pooja
              </Button>
            </Link>
          </motion.div>
        </div>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2"
        >
          <ChevronDown size={48} className="text-white" />
        </motion.div>
      </div>

      <section className="py-16 bg-white overflow-x-hidden">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-center">
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Image src={baglamukhi} width={800} height={600} alt="Deity" className="rounded-lg shadow-lg md:h-80 object-contain w-auto" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className='md:col-span-3'
            >
              <h2 className="text-3xl font-bold mb-4">About the Deity</h2>
              <p className="text-lg text-gray-700 mb-6">
                Baglamukhi is one of the ten mahavidyas (great wisdom goddesses) in Hinduism. She is the goddess of immense power and is worshipped to defeat enemies, resolve conflicts, and gain victory in legal matters.
              </p>
              <h2 className="text-3xl font-bold mb-4">About the Temple</h2>
              <p className="text-lg text-gray-700">
                Our temple is a serene and sacred space dedicated to the worship of Maa Baglamukhi. We are committed to preserving our rich cultural heritage and providing a spiritual sanctuary for all devotees.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Daily Timetable</h2>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <Card className="p-4 bg-gradient-to-r from-amber-500 to-red-500 text-white">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-[100px] text-lg font-bold text-white">Time</TableHead>
                    <TableHead className="text-lg font-bold text-white">Activity</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {timetable.map((item, index) => (
                    <TableRow key={index} className="hover:bg-white/20 transition-colors">
                      <TableCell className="font-medium">{item.time}</TableCell>
                      <TableCell>{item.activity}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Card>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
          {/* Add event cards here */}
        </div>
      </section>

      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
          {/* Add service highlights here */}
        </div>
      </section>
    </main>
  )
}

export default page