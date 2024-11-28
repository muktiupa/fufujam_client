import { useState } from 'react'
import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from 'lucide-react'

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { href: '/cars', label: 'Cars' },
    { href: '/bikes', label: 'Bikes' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    (<header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="text-2xl font-bold text-neutral-900 dark:text-neutral-50">
          RentRide
        </Link>
        
        <nav className="hidden md:block">
          <ul className="flex space-x-4">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-gray-600 hover:text-neutral-900 dark:hover:text-neutral-50">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="hidden md:block">
          <Button>Sign In</Button>
        </div>

        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <nav className="flex flex-col gap-4">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-medium text-gray-600 hover:text-neutral-900 dark:hover:text-neutral-50"
                  onClick={() => setIsOpen(false)}>
                  {item.label}
                </Link>
              ))}
              <Button className="mt-4" onClick={() => setIsOpen(false)}>Sign In</Button>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>)
  );
}

