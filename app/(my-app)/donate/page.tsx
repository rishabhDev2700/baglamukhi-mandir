"use client";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { CopyIcon, LucideArrowDownSquare } from "lucide-react";

export default function DonationPage() {
  const handleCopyEmail = () => {
    navigator.clipboard.writeText("chandideviheritagecenter@gmail.com");
    toast.success("Email copied to clipboard!");
  };

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
        <div className="bg-gray-100 p-8 rounded-lg mb-4">
          <h2 className="text-2xl font-bold mb-4">Donation Gateway</h2>
          <p className="text-gray-600 mb-6 flex">
           In the meantime, you can donate in person at the temple or use -<strong> Interac</strong>.<LucideArrowDownSquare/>
          </p>
          <Button size="lg" disabled>
            Donate Now (Coming Soon)
          </Button>
        </div>

        <div className="pb-8">
          You can send your generous donations via <strong>Interac</strong> to <span onClick={handleCopyEmail} className="cursor-pointer inline-flex text-red-600 border border-amber-500 hover:bg-amber-500 hover:text-white mt-4 p-4 rounded-xl"><CopyIcon className="mr-4"/> chandideviheritagecenter@gmail.com</span>
        </div>
      </div>
    </motion.div>
  );
}
