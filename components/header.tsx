"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site"

const navigation = [
  { name: "Trang chủ", href: "/" },
  { name: "Thu mua điện thoại", href: "/thu-mua-dien-thoai" },
  { name: "Thu mua laptop", href: "/thu-mua-laptop" },
  { name: "Liên hệ", href: "/lien-he" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [mobileMenuOpen])

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image src="/logo.png" alt={siteConfig.name} width={40} height={40} className="h-10 w-10" />
            <span className="text-xl font-bold text-green-700">{siteConfig.name}</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-green-700 transition-colors"
            >
              {item.name}
            </Link>
          ))}
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-4">
          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden lg:flex items-center gap-x-2 text-sm font-semibold leading-6 text-green-700"
          >
            <Phone className="h-4 w-4" />
            {siteConfig.phone}
          </a>
          <Button asChild className="hidden lg:inline-flex bg-green-700 hover:bg-green-800 text-white">
            <Link href="/lien-he">Liên hệ ngay</Link>
          </Button>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-foreground"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Mở menu</span>
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </nav>
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div 
            className="lg:hidden fixed inset-0 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200"
            style={{ zIndex: 9998 }}
            onClick={() => setMobileMenuOpen(false)} 
          />
          
          {/* Menu panel */}
          <div 
            className="lg:hidden fixed inset-y-0 right-0 w-full overflow-y-auto bg-white dark:bg-gray-900 px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10 shadow-2xl animate-in slide-in-from-right duration-300"
            style={{ zIndex: 9999 }}
          >
            {/* Header with close button */}
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Image src="/logo.png" alt={siteConfig.name} width={32} height={32} className="h-8 w-8" />
                <span className="text-xl font-bold text-green-700">{siteConfig.name}</span>
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Đóng menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            {/* Menu items */}
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
                <div className="py-6">
                  <a
                    href={`tel:${siteConfig.phone}`}
                    className="-mx-3 flex items-center gap-2 rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-green-700 hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors"
                  >
                    <Phone className="h-5 w-5" />
                    {siteConfig.phone}
                  </a>
                  <Button asChild className="w-full mt-4 bg-green-700 hover:bg-green-800 text-white">
                    <Link href="/lien-he" onClick={() => setMobileMenuOpen(false)}>Liên hệ ngay</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  )
}
