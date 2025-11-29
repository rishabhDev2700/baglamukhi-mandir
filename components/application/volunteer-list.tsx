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
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

// Note: This is a placeholder type. You should generate types from your Payload schema.
export type Volunteer = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  interests?: string;
  availability?: string;
};

type VolunteerListProps = {
  volunteers: Volunteer[];
};

const formSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  message: z.string().optional(),
  phone: z.string().optional(),
  interests: z.string().optional(),
});

export function VolunteerList({ volunteers }: VolunteerListProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmittedSuccessfully, setIsSubmittedSuccessfully] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      fullName: "",
      email: "",
      message: "",
      phone: "",
      interests: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    setIsSubmittedSuccessfully(false);

    const response = await fetch("/api/submit-form", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        collection: "volunteers", // Specify the collection to save to
        data: {
          name: values.fullName, // Map fullName to name for Payload
          email: values.email,
          message: values.message,
          phone: values.phone,
          interests: values.interests,
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

    setIsSubmitting(false);
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-24"
    >
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Join Our Volunteer Team</h1>
        <p className="text-lg text-gray-700 mb-12">
          Be a part of our dedicated team and contribute to the temple&apos;s activities and community service.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-3xl font-bold text-center mb-8">Our Volunteers</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {volunteers.length > 0 ? (
            volunteers.map((volunteer, index) => (
              <motion.div
                key={volunteer.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <Card className="bg-white border border-gray-200 shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardHeader className="items-center">
                    <Avatar className="w-24 h-24 mb-4 mx-auto">
                      {/* Avatar image and fallback will need to be updated to fetch from media collection if available */}
                      <AvatarFallback>{volunteer.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <CardTitle className="text-center text-xl">{volunteer.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    {/* Role and bio are not directly from Payload 'volunteers' collection fields */}
                    <p className="text-gray-500 mt-2">Email: {volunteer.email}</p>
                    {volunteer.phone && <p className="text-gray-500">Phone: {volunteer.phone}</p>}
                    {volunteer.interests && <p className="text-gray-500">Interests: {volunteer.interests}</p>}
                    {volunteer.availability && <p className="text-gray-500">Availability: {volunteer.availability}</p>}
                  </CardContent>
                </Card>
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center">
              <Card className="p-8">
                <p>No volunteers to show.</p>
              </Card>
            </div>
          )}
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold text-center mb-8">Become a Volunteer</h2>
        <div className="max-w-2xl mx-auto">
          {isSubmittedSuccessfully ? (
            <div className="p-4 bg-green-100 text-green-700 rounded-md text-center">
              Thank you for your interest! We will get back to you soon.
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
                  name="phone"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number (Optional)</FormLabel>
                      <FormControl>
                        <Input placeholder="Your phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="interests"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Interests (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us about your interests in volunteering"
                          className="resize-none"
                          {...field}
                        />
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
                      <FormLabel>Message (Optional)</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Tell us why you want to volunteer"
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button type="submit" className="w-full" disabled={isSubmitting}>
                  {isSubmitting ? "Submitting..." : "Submit"}
                </Button>
              </form>
            </Form>
          )}
        </div>
      </section>
    </motion.div>
  );
}
