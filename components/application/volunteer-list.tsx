"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone } from "lucide-react";

export type TempleManager = {
  id: string;
  name: string;
  role?: string;
  phone: string;
  photo?: {
    url: string;
    alt: string;
  };
};

type TempleManagersProps = {
  managers: TempleManager[];
};

// Keep old export name for backward compat
export type Volunteer = TempleManager;

export function VolunteerList({ managers }: TempleManagersProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen"
    >
      {/* Hero Banner */}
      <div className="relative pt-40 pb-24 px-4 overflow-hidden min-h-[40vh] flex flex-col justify-center">
       <Image src="/temple.jpeg" alt="Volunteer Banner" fill className="object-cover brightness-50" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <motion.p
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-yellow-400 uppercase tracking-widest text-sm font-semibold mb-3 drop-shadow-md"
          >
            Shri Baglamukhi Mandir
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-4 drop-shadow-lg"
          >
            Our Temple Team
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="font-bold text-amber-100 text-lg drop-shadow-md"
          >
            Meet the dedicated individuals who oversee and manage the temple for our community.
          </motion.p>
        </div>
      </div>

      {/* Managers Grid */}
      <div className="bg-amber-50/30 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          {managers.length === 0 ? (
            <div className="text-center py-16 text-gray-500 text-lg">
              No contacts available at this time. Please check back soon.
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {managers.map((manager, index) => (
                <motion.div
                  key={manager.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                  className="group"
                >
                  <div className="relative bg-white rounded-3xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden border border-amber-100">
                    {/* Top accent bar */}
                    <div className="h-1.5 w-full bg-linear-to-r from-yellow-500 via-amber-400 to-yellow-600" />

                    <div className="px-8 py-10 flex flex-col items-center text-center">
                      {/* Photo */}
                      <div className="relative w-32 h-32 rounded-full overflow-hidden ring-4 ring-amber-200 mb-5 shadow-lg">
                        {manager.photo?.url ? (
                          <Image
                            src={manager.photo.url}
                            alt={manager.photo.alt || manager.name}
                            fill
                            className="object-cover"
                          />
                        ) : (
                          <div className="w-full h-full bg-linear-to-br from-amber-200 to-yellow-400 flex items-center justify-center">
                            <span className="text-4xl font-bold text-amber-800">
                              {manager.name.charAt(0).toUpperCase()}
                            </span>
                          </div>
                        )}
                      </div>

                      {/* Name */}
                      <h2 className="text-xl font-bold text-gray-900 mb-1">
                        {manager.name}
                      </h2>

                      {/* Role */}
                      {manager.role && (
                        <p className="text-sm text-amber-700 font-medium mb-4 uppercase tracking-wide">
                          {manager.role}
                        </p>
                      )}

                      {/* Divider */}
                      <div className="w-12 h-0.5 bg-amber-200 rounded-full mb-4" />

                      {/* Phone */}
                      <a
                        href={`tel:${manager.phone}`}
                        className="inline-flex items-center gap-2 text-gray-700 hover:text-amber-700 transition-colors duration-200 group/phone"
                      >
                        <span className="w-8 h-8 rounded-full bg-amber-100 group-hover/phone:bg-amber-200 flex items-center justify-center transition-colors">
                          <Phone className="w-4 h-4 text-amber-700" />
                        </span>
                        <span className="font-medium">{manager.phone}</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
