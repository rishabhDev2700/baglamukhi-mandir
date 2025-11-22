"use client";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const upcomingEvents = [
  {
    title: "Diwali Celebration",
    date: "November 12, 2023",
    description: "Join us for a grand celebration of Diwali with lights, sweets, and special poojas.",
  },
  {
    title: "Holi Festival",
    date: "March 25, 2024",
    description: "Celebrate the festival of colors with music, dance, and traditional festivities.",
  },
];

const pastEvents = [
  {
    title: "Janmashtami",
    date: "September 7, 2023",
    description: "A joyous celebration of Lord Krishna's birth with fasting, prayers, and cultural programs.",
  },
  {
    title: "Navaratri",
    date: "October 15-24, 2023",
    description: "Nine nights of vibrant celebrations dedicated to Goddess Durga, with garba and dandiya.",
  },
];

export default function EventsPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-24"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Temple Events</h1>
        <p className="text-lg text-gray-700 mb-12">
          Stay connected with our vibrant community through a variety of cultural and spiritual events.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {upcomingEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card>
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{event.date}</p>
                  <p>{event.description}</p>
                  <Button className="mt-4">Details</Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pastEvents.map((event, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="bg-gray-50">
                <CardHeader>
                  <CardTitle>{event.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-2">{event.date}</p>
                  <p>{event.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.div>
  );
}
