import type { Metadata } from "next";
import "./globals.css";
import { Footer } from "@/components/footer";
import Navbar from "@/components/navbar";
import { PageTransition } from "@/components/page-transition";

export const metadata: Metadata = {
  title: "Shri Baglamukhi Mandir",
  description: "Toronto, Canada",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="antialiased flex flex-col min-h-screen overflow-x-hidden"
      >
        <Navbar/>
        <main className="flex-grow">
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
