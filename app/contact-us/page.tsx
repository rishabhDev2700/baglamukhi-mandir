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
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setIsSubmittedSuccessfully(false); // Reset status on new submission attempt

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000)); 

    console.log(values); // In a real app, send this to your backend

    setIsSubmitting(false);
    setIsSubmittedSuccessfully(true);
    form.reset(); // Clear form fields
  }

  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-16 mt-12"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
        <p className="text-lg text-gray-700 mb-12">
          We would love to hear from you. Please fill out the form below or use the contact information provided.
        </p>
      </div>

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
    </motion.div>
  );
}

