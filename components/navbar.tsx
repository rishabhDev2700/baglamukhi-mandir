"use client"
import Link from 'next/link'
import  { useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
} from "@/components/ui/sheet"
import { Menu } from 'lucide-react'
import Image from 'next/image'
import om from "@/assets/om.png"
import { usePathname } from 'next/navigation';
import { ClientOnly } from './client-only'

type NavLink = {
  label: string;
  link: string;
};

type NavbarProps = {
  navLinks?: NavLink[];
};

function Navbar({ navLinks = [] }: NavbarProps) {
  const [sheetOpen, setSheetOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className='w-full fixed bg-white/60 backdrop-blur-md shadow-md shadow-black/10 top-0 z-50 flex justify-between items-center px-4 md:px-8 lg:px-16 py-6'>
      <header className='flex items-center'>
        <Link href="/" className="flex items-center group">
          <Image src={om} className='w-12 md:w-16 transition-transform' alt='OM' />
          <h1 className='font-main text-red-500 text-lg font-semibold md:text-xl ml-2'>
            Shri Baglamukhi Mandir
          </h1>
        </Link>
      </header>
      <nav className='hidden lg:flex items-center'>
        {navLinks.map((link) => (
          <Link
            key={link.link}
            className={`relative px-4 py-2 text-gray-700 hover:text-gray-900 transition-colors mr-4
                       after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                       after:bg-red-500 after:transition-all hover:after:w-full
                       ${pathname === link.link ? 'text-red-500 after:w-full' : ''}`}
            href={link.link}
          >
            {link.label}
          </Link>
        ))}
      </nav>
      <ClientOnly>
        <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
          <SheetTrigger className='lg:hidden'>
            <Menu size={32} className="text-black" />
          </SheetTrigger>
          <SheetContent className='px-0'>
            <SheetHeader className="bg-gray-100 border-b p-6 text-center">
              <SheetTitle>
                <Link href="/" className="flex flex-col items-center mb-4">
                  <Image src={om} className="w-16 h-16 mb-2 object-contain" alt="OM" />
                  <span className="text-xl font-bold">Shri Baglamukhi Mandir</span>
                </Link>
              </SheetTitle>
            </SheetHeader>
            <nav className='flex flex-col items-start mt-8 space-y-4 px-6'>
              {navLinks.map((link) => (
                <Link
                  key={link.link}
                  href={link.link}
                  className={`relative text-xl font-bold text-gray-800 hover:text-gray-900 w-full text-left p-2 
                  after:content-[""] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 
                  after:bg-red-500 after:transition-all hover:after:w-full
                  ${pathname === link.link ? 'text-red-500 after:w-full' : ''}`}
                  onClick={() => setSheetOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </ClientOnly>
    </div>
  )
}

export default Navbar