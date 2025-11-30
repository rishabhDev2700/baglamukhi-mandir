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
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>{event.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center text-gray-600 mb-2">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      <span suppressHydrationWarning>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    {event.time && (
                      <div className="flex items-center text-gray-600 mb-2">
                        <ClockIcon className="w-4 h-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPinIcon className="w-4 h-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    )}
                    <div className="prose prose-sm max-w-none mb-4" dangerouslySetInnerHTML={{ __html: truncateDescription(event.description, 150) }} />
                    <Button
                      className="mt-4"
                      onClick={() => {
                        setSelectedEvent(event);
                        setIsDialogOpen(true);
                      }}
                    >
                      Details
                    </Button>
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
                    <div className="flex items-center text-gray-600 mb-2">
                      <CalendarIcon className="w-4 h-4 mr-2" />
                      <span suppressHydrationWarning>{new Date(event.date).toLocaleDateString()}</span>
                    </div>
                    {event.time && (
                      <div className="flex items-center text-gray-600 mb-2">
                        <ClockIcon className="w-4 h-4 mr-2" />
                        <span>{event.time}</span>
                      </div>
                    )}
                    {event.location && (
                      <div className="flex items-center text-gray-600 mb-4">
                        <MapPinIcon className="w-4 h-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                    )}
                    <div className="prose prose-sm max-w-none mb-4" dangerouslySetInnerHTML={{ __html: truncateDescription(event.description, 150) }} />
                    <Button
                      className="mt-4"
                      onClick={() => {
                        setSelectedEvent(event);
                        setIsDialogOpen(true);
                      }}
                    >
                      Details
                    </Button>
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
    </motion.div>
      </>
  );
}
