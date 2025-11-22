"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function DonationPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="container mx-auto px-4 py-24"
    >
      <div className="max-w-2xl mx-auto text-center">
        <h1 className="text-4xl font-bold mb-4">Support Our Temple</h1>
        <p className="text-lg text-gray-700 mb-8">
          Your generous donations help us maintain the temple, perform daily rituals, and serve the community. Every contribution, big or small, makes a difference.
        </p>
        <div>
          You can 
        </div>
        <div className="bg-gray-100 p-8 rounded-lg">
          <h2 className="text-2xl font-bold mb-4">Donation Gateway</h2>
          <p className="text-gray-600 mb-6">
            Our online donation system is coming soon. In the meantime, you can donate in person at the temple.
          </p>
          <Button size="lg" disabled>
            Donate Now (Coming Soon)
          </Button>
        </div>
      </div>
    </motion.div>
  );
}
