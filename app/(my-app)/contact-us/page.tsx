"use client";

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
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import { Card } from "@/components/ui/card";


const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
  subject: z.string().min(2, {
    message: "Subject must be at least 2 characters.",
  }),
});

export default function ContactUsPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      subject: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setIsSubmittedSuccessfully(false); // Reset status on new submission attempt

    const response = await fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "contact-forms", // Specify the collection to save to
        data: {
          name: values.fullName, // Map fullName to name for Payload
          email: values.email,
          subject: values.subject,
          message: values.message,
        },
      }),
    });

    if (response.ok) {
      setIsSubmittedSuccessfully(true);
      form.reset(); // Clear form fields
    } else {
      console.error("Form submission failed:", response.statusText);
      // Handle error, maybe show an error message to the user
    }
  }

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
          Contact Us
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-amber-200/80 text-lg max-w-2xl mx-auto"
        >
          We would love to hear from you. Please fill out the form below or use the contact information provided.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 py-16">

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-full"
        >
          <Card className="p-6">
            <h2 className="text-2xl font-bold">Get in Touch</h2>
            {isSubmittedSuccessfully ? (
              <div className="p-4 bg-green-100 text-green-700 rounded-md text-center">
                Thank you for your message! We will get back to you soon.
              </div>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
                  name="subject"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Subject</FormLabel>
                      <FormControl>
                        <Input placeholder="Subject of your message" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="message"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Message</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Your message"
                          className="resize-none"
                          rows={4}
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
                              </form>
                            </Form>
                          )}
                        </Card>        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-full"
        >
          <Card className="p-6">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <div className="space-y-4">
              <p className="flex items-center"><MapPin className="mr-2 text-gray-600" size={20} /><strong>Address:</strong> 351 Parkhurst Square, Brampton, Toronto, Ontario, Canada</p>
              <p className="flex items-center"><Mail className="mr-2 text-gray-600" size={20} /><a href="mailto:ChandideviBaglamukhi@gmail.com" className="hover:text-blue-600"><strong>Email:</strong> ChandideviBaglamukhi@gmail.com</a></p>
              <p className="flex items-center"><Phone className="mr-2 text-gray-600" size={20} /><a href="tel:9057930071" className="hover:text-blue-600"><strong>Phone:</strong> (905)-793-0071</a> <span className="w-0.5 h-4 bg-red-500 mx-4"></span> <a href="tel:+1 647-354-0093" className="hover:text-blue-600">+1 647-354-0093</a></p>
            </div>
          </Card>
        </motion.div>
      </div>
      </div>
    </motion.div>
  );
}

