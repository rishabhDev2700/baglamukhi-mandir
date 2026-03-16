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
          Support Our Temple
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="text-amber-200/80 text-lg max-w-2xl mx-auto"
        >
          Your generous donations help us maintain the temple, perform daily rituals, and serve the community. Every contribution, big or small, makes a difference.
        </motion.p>
      </div>

      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-amber-50/50 border border-amber-100 p-8 rounded-2xl mb-8 shadow-sm">
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
      </div>
    </motion.div>
  );
}
