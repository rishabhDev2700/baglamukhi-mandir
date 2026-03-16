"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { CalendarIcon, ClockIcon, MapPinIcon } from "lucide-react";
import { Input } from "@/components/ui/input"; // Import Input component

// Note: This is a placeholder type. You should generate types from your Payload schema.
export type Event = {
  id: string;
  name: string;
  description: string; // Now contains HTML content
  date: string;
  time?: string; // Optional, as per collection definition
  location?: string; // Optional, as per collection definition
};

type EventsListProps = {
  upcomingEvents: Event[];
  pastEvents: Event[];
};

const truncateDescription = (text: string, maxLength: number) => {
  if (text.length <= maxLength) {
    return text;
  }
  const truncated = text.substring(0, text.lastIndexOf(' ', maxLength));
  return truncated.length === 0 ? text.substring(0, maxLength) + '...' : truncated + '...';
};

export function EventsList({ upcomingEvents, pastEvents }: EventsListProps) {
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term

  // Filter events based on search term
  const filterEvents = (events: Event[]) => {
    if (!searchTerm) {
      return events;
    }
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return events.filter(
      (event) =>
        event.name.toLowerCase().includes(lowerCaseSearchTerm) ||
        event.description.toLowerCase().includes(lowerCaseSearchTerm) ||
        (event.location && event.location.toLowerCase().includes(lowerCaseSearchTerm))
    );
  };

  const filteredUpcomingEvents = filterEvents(upcomingEvents);
  const filteredPastEvents = filterEvents(pastEvents);

  return (
    <>
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen"
    >
      {/* Hero */}
      <div className="bg-linear-to-br from-amber-950 via-yellow-900 to-amber-800 pt-40 pb-20 px-4 text-center">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-3"
        >
          Shri Baglamukhi Mandir
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-4xl md:text-5xl font-bold text-white mb-4"
        >
          Temple Events
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-amber-200/80 text-lg max-w-2xl mx-auto"
        >
          Stay connected with our vibrant community through a variety of cultural and spiritual events.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 py-16">

      {/* Search Bar */}
      <div className="max-w-md mx-auto mb-12">
        <Input
          type="text"
          placeholder="Search events..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full"
        />
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Upcoming Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredUpcomingEvents.length > 0 ? (
            filteredUpcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                whileHover={{ y: -4 }}
                className="group h-full"
              >
                <div className="h-full flex flex-col bg-white rounded-3xl border border-amber-200/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(251,191,36,0.3)] transition-all duration-300 overflow-hidden group-hover:border-amber-300">
                  <div className="h-1.5 w-full bg-linear-to-r from-yellow-500 via-amber-400 to-yellow-600" />
                  <div className="flex flex-col flex-1 p-8">
                    <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600 mb-6">{event.name}</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-600 font-medium">
                        <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center mr-3 border border-amber-100">
                           <CalendarIcon className="w-4 h-4 text-amber-600" />
                        </div>
                        <span suppressHydrationWarning>{new Date(event.date).toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      {event.time && (
                        <div className="flex items-center text-gray-600">
                          <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center mr-3 border border-amber-100">
                             <ClockIcon className="w-4 h-4 text-amber-600" />
                          </div>
                          <span>{event.time}</span>
                        </div>
                      )}
                      {event.location && (
                        <div className="flex items-center text-gray-600">
                          <div className="w-8 h-8 rounded-full bg-amber-50 flex items-center justify-center mr-3 border border-amber-100">
                             <MapPinIcon className="w-4 h-4 text-amber-600" />
                          </div>
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="text-gray-600 leading-relaxed mb-8 prose prose-amber prose-sm max-w-none flex-1" dangerouslySetInnerHTML={{ __html: truncateDescription(event.description, 150) }} />
                    
                    <Button
                      onClick={() => {
                        setSelectedEvent(event);
                        setIsDialogOpen(true);
                      }}
                      className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-xl py-6 font-semibold tracking-wide shadow-md hover:shadow-lg transition-all"
                    >
                      Event Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center">
              <div className="p-12 border border-dashed border-gray-300 rounded-3xl bg-gray-50/50">
                <p className="text-gray-500 text-lg">No upcoming events to show.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="mt-24">
        <h2 className="text-3xl font-bold text-center mb-8">Past Events</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pastEvents.length > 0 ? (
            pastEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="h-full"
              >
                <div className="h-full flex flex-col bg-gray-50 rounded-3xl border border-gray-200 overflow-hidden opacity-90 hover:opacity-100 transition-opacity duration-300">
                  <div className="h-1 w-full bg-gray-300" />
                  <div className="flex flex-col flex-1 p-8">
                    <h3 className="text-xl font-bold text-gray-700 mb-6">{event.name}</h3>
                    
                    <div className="space-y-3 mb-6">
                      <div className="flex items-center text-gray-500 font-medium text-sm">
                        <CalendarIcon className="w-4 h-4 mr-3" />
                        <span suppressHydrationWarning>{new Date(event.date).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                      </div>
                      {event.location && (
                        <div className="flex items-center text-gray-500 text-sm">
                          <MapPinIcon className="w-4 h-4 mr-3" />
                          <span>{event.location}</span>
                        </div>
                      )}
                    </div>
                    
                    <div className="text-gray-500 leading-relaxed mb-8 prose prose-sm max-w-none flex-1 opacity-80" dangerouslySetInnerHTML={{ __html: truncateDescription(event.description, 150) }} />
                    
                    <Button
                      variant="outline"
                      onClick={() => {
                        setSelectedEvent(event);
                        setIsDialogOpen(true);
                      }}
                      className="w-full rounded-xl py-6 font-medium text-gray-600 border-gray-300 hover:bg-gray-100"
                    >
                      View Past Details
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center">
              <div className="p-12 border border-dashed border-gray-200 rounded-3xl bg-gray-50/30">
                <p className="text-gray-400 text-lg">No past events to show.</p>
              </div>
            </div>
          )}
        </div>
      </section>

      {selectedEvent && (
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogContent className="max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedEvent.name}</DialogTitle>
              <DialogDescription>
                Details for {selectedEvent.name}
              </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
              <p>
                <strong>Date:</strong>{" "}
                {new Date(selectedEvent.date).toLocaleDateString()}
              </p>
              {selectedEvent.time && (
                <p>
                  <strong>Time:</strong> {selectedEvent.time}
                </p>
              )}
              {selectedEvent.location && (
                <p>
                  <strong>Location:</strong> {selectedEvent.location}
                </p>
              )}
              <div className="prose prose-sm max-w-none">
                <strong>Description:</strong>
                <div dangerouslySetInnerHTML={{ __html: selectedEvent.description }} />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
      </div>
    </motion.div>
    </>
  );
}
