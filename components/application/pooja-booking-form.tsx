"use client";

import type { PoojaOption } from '@/payload-types';
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, ChevronDown, Flame, X, ArrowRight } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { Textarea } from '../ui/textarea';
import { useState } from "react";

const formSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Phone number must be at least 10 digits." }),
  pooja: z.string({ message: "Please select a pooja." }).min(1, { message: "Please select a pooja." }),
  date: z.date({ message: "Please pick a date." }),
  message: z.string().optional(),
});

type PoojaOptionWithHtml = PoojaOption & { descriptionHtml?: string };

export function PoojaBookingForm({ poojaOptions }: { poojaOptions: PoojaOptionWithHtml[] }) {
  const [showForm, setShowForm] = useState(false);
  const [selectedPooja, setSelectedPooja] = useState<string | undefined>(undefined);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    try {
      const res = await fetch('/api/submit-form', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          collection: "pooja-bookings",
          data: {
            name: values.fullName,
            email: values.email,
            phone: values.phone,
            pooja: values.pooja,
            date: values.date.toISOString(),
            message: values.message,
          },
        }),
      });

      if (!res.ok) throw new Error();
      toast.success("Your pooja booking has been submitted.");
      form.reset();
      setShowForm(false);
    } catch {
      toast.error("Something went wrong, please try again later.");
    }
  }

  // When a card's "Book Now" is clicked, pre-select that pooja and open form
  const handleBookPooja = (id: string) => {
    setSelectedPooja(id);
    form.setValue("pooja", id);
    setShowForm(true);
    // Smooth scroll to form after a tiny delay so it's rendered
    setTimeout(() => {
      document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  };

  return (
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
          Pooja Booking
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-amber-200/80 text-lg max-w-xl mx-auto"
        >
          We also offer Baglamukhi Hawan, Das Mahavidya Paths and Baglamukhi Sahasra Naam Path.
        </motion.p>
      </div>

      {/* Pooja Option Cards */}
      <div className="bg-amber-50/30 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-800 mb-10">
            Our Pooja Services
          </h2>

          {poojaOptions.length === 0 ? (
            <p className="text-center text-gray-500">No pooja options available at this time.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {poojaOptions.map((option, index) => (
                <motion.div
                  key={option.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group"
                >
                  <div className="h-full flex flex-col bg-white rounded-3xl border border-amber-200/50 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_30px_-4px_rgba(251,191,36,0.3)] transition-all duration-300 overflow-hidden group-hover:border-amber-300">
                    {/* Card top accent */}
                    <div className="h-1.5 w-full bg-linear-to-r from-yellow-500 via-amber-400 to-yellow-600" />
                    
                    <div className="flex flex-col flex-1 p-8">
                      {/* Icon + Name */}
                      <div className="flex items-center gap-4 mb-4">
                        <div className="w-12 h-12 rounded-2xl bg-linear-to-br from-amber-50 to-amber-100 flex items-center justify-center shrink-0 shadow-inner border border-amber-200/50">
                          <Flame className="w-6 h-6 text-amber-600" />
                        </div>
                        <h3 className="text-xl font-bold bg-clip-text text-transparent bg-linear-to-r from-gray-900 to-gray-600">
                          {option.name}
                        </h3>
                      </div>

                      {/* Description */}
                      {option.descriptionHtml ? (
                        <div
                          className="text-gray-600 leading-relaxed flex-1 mb-8 prose prose-amber prose-p:my-1 prose-sm max-w-none"
                          dangerouslySetInnerHTML={{ __html: option.descriptionHtml }}
                        />
                      ) : (
                        <p className="text-sm text-gray-400 italic flex-1 mb-8 pt-2">No description provided for this pooja.</p>
                      )}

                      <Button
                        onClick={() => handleBookPooja(option.id)}
                        className="w-full bg-amber-500 hover:bg-amber-600 text-white rounded-xl py-6 font-semibold tracking-wide shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2 group/btn"
                      >
                        Select Pooja
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* Toggle button at the bottom */}
          <div className="flex justify-center mt-12">
            <Button
              variant="outline"
              onClick={() => {
                setShowForm((prev) => !prev);
                if (!showForm) {
                  setTimeout(() => {
                    document.getElementById("booking-form")?.scrollIntoView({ behavior: "smooth" });
                  }, 100);
                }
              }}
              className="gap-2 border-amber-300 text-amber-800 hover:bg-amber-50 px-8 py-5 rounded-xl text-base"
            >
              {showForm ? (
                <>
                  <X className="w-4 h-4" /> Hide Booking Form
                </>
              ) : (
                <>
                  <ChevronDown className="w-4 h-4" /> Book a Pooja
                </>
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Booking Form (toggled) */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            id="booking-form"
            key="booking-form"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className="overflow-hidden bg-white border-t border-amber-100"
          >
            <div className="max-w-2xl mx-auto px-4 py-14">
              <h2 className="text-2xl font-bold text-center mb-2 text-gray-900">Book a Pooja</h2>
              <p className="text-center text-gray-500 text-sm mb-8">Fill in your details and we'll confirm your booking.</p>

              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Full Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Name" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input placeholder="your.email@example.com" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone Number</FormLabel>
                        <FormControl>
                          <Input placeholder="Your Phone Number" {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="pooja"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Select Pooja</FormLabel>
                        <Select onValueChange={field.onChange} value={field.value}>
                          <FormControl>
                            <SelectTrigger>
                              <SelectValue placeholder="Select a pooja" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            {poojaOptions.map(option => (
                              <SelectItem key={option.id} value={option.id}>{option.name}</SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="date"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <FormLabel>Date</FormLabel>
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  "w-full pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? format(field.value, "PPP") : <span>Pick a date</span>}
                                <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                              </Button>
                            </FormControl>
                          </PopoverTrigger>
                          <PopoverContent className="w-auto p-0" align="start">
                            <Calendar
                              mode="single"
                              selected={field.value}
                              onSelect={field.onChange}
                              disabled={(date) => date < new Date() || date < new Date("1900-01-01")}
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message (Optional)</FormLabel>
                        <FormControl>
                          <Textarea placeholder="Any additional details..." {...field} />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
                    Submit Booking
                  </Button>
                </form>
              </Form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
