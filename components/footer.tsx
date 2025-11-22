"use client";
import Link from "next/link";
import Image from "next/image";
import om from "@/assets/om.png";
import { Facebook, Twitter, Instagram } from "lucide-react";

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <Link href="/" className="flex items-center mb-4">
              <Image src={om} className="w-12 h-12 mr-2 object-contain" alt="OM" />
              <span className="text-xl font-bold">Shri Baglamukhi Mandir</span>
            </Link>
            <p className="text-gray-400">
              A sacred place for devotees to find peace and connect with the
              divine.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/pooja-booking" className="hover:text-gray-300">
                  Pooja Booking
                </Link>
              </li>
              <li>
                <Link href="/events" className="hover:text-gray-300">
                  Events
                </Link>
              </li>
              <li>
                <Link href="/donation" className="hover:text-gray-300">
                  Donation
                </Link>
              </li>
              <li>
                <Link href="/volunteer" className="hover:text-gray-300">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-gray-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Info</h3>
            <p className="text-gray-400">123 Temple Street, City, Country</p>
            <p className="text-gray-400">contact@temple.org</p>
            <p className="text-gray-400">+1 234 567 890</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={24} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>
        <div className="flex justify-between items-center mt-8 pt-8 border-t border-gray-800">
          <p className="text-gray-500">
            &copy; {new Date().getFullYear()} The Temple. All Rights Reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="text-gray-400 hover:text-white"
          >
            Back to Top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
