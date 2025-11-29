"use client";

import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

// Note: This is a placeholder type. You should generate types from your Payload schema.
export type Event = {
  id: string;
  name: string;
  description: string; // richText type is complex, using any for now, or import generated type
  date: string;
  time?: string; // Optional, as per collection definition
  location?: string; // Optional, as per collection definition
};

type EventsListProps = {
  upcomingEvents: Event[];
  pastEvents: Event[];
};

export function EventsList({ upcomingEvents, pastEvents }: EventsListProps) {
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
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{event.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p suppressHydrationWarning className="text-gray-600 mb-2">{new Date(event.date).toLocaleDateString()}</p>
                    <p>{event.description}</p>
                    <Button className="mt-4">Details</Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center">
              <Card className="p-8">
                <p>No upcoming events to show.</p>
              </Card>
            </div>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pastEvents.length > 0 ? (
            pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-gray-50">
                  <CardHeader>
                    <CardTitle>{event.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p suppressHydrationWarning className="text-gray-600 mb-2">{new Date(event.date).toLocaleDateString()}</p>
                    <p>{event.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center">
              <Card className="p-8 bg-gray-50">
                <p>No past events to show.</p>
              </Card>
            </div>
          )}
        </div>
      </section>
    </motion.div>
  );
}
