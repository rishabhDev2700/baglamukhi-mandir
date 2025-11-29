import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";
import { Toaster } from "sonner";
import { getPayloadClient } from "@/lib/payload";
import React from "react";
import "@/app/globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Shri Baglamukhi Mandir",
  description: "Toronto, Canada",
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const payload = await getPayloadClient();

  const header = await payload.findGlobal({
    slug: "header",
  });

  const footer = await payload.findGlobal({
    slug: "footer",
  });

  return (
    <html lang="en">
      <body>
        <Navbar navLinks={header.navItems ?? []} />
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer copyright={footer.copyright ?? ''} socialLinks={footer.socialLinks ?? []} />
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}