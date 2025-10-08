"use client"

import Link from "next/link"
import Image from "next/image"
import { useState, useEffect } from "react"
import { Menu, X, Phone, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import { siteConfig } from "@/data/site"
import { trackNavigationClick, trackPhoneClick } from "@/lib/analytics"

const navigation = [
  { name: "Trang chủ", href: "/" },
]

const services = [
  { name: "Thu mua laptop gaming", href: "/dich-vu/thu-mua-laptop-gaming" },
  { name: "Thu mua Macbook", href: "/dich-vu/thu-mua-macbook" },
  { name: "Thu mua Surface", href: "/dich-vu/thu-mua-surface" },
  { name: "Thu mua điện thoại", href: "/dich-vu/thu-mua-dien-thoai" },
  { name: "Thu mua máy tính bảng", href: "/dich-vu/thu-mua-may-tinh-bang" },
  { name: "Thu mua Android", href: "/dich-vu/thu-mua-android" },
]

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)

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
    <>
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-x-6 p-4 lg:px-8" aria-label="Global">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5 flex items-center gap-2">
            <Image src="/logo.png" alt={siteConfig.name} width={40} height={40} className="h-10 w-10" />
            <span className="text-xl font-bold text-green-700">{siteConfig.name}</span>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-x-8 lg:items-center">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="text-sm font-semibold leading-6 text-foreground hover:text-green-700 transition-colors"
              onClick={() => trackNavigationClick(item.name)}
            >
              {item.name}
            </Link>
          ))}
          <div className="relative group">
            <button
              className="text-sm font-semibold leading-6 text-foreground hover:text-green-700 transition-colors flex items-center gap-1"
              onMouseEnter={() => setServicesOpen(true)}
              onMouseLeave={() => setServicesOpen(false)}
            >
              Dịch vụ
              <ChevronDown className="h-4 w-4" />
            </button>
            {servicesOpen && (
              <div 
                className="absolute left-0 top-full mt-2 w-64 bg-white rounded-lg shadow-lg border border-gray-200 py-2 z-50"
                onMouseEnter={() => setServicesOpen(true)}
                onMouseLeave={() => setServicesOpen(false)}
              >
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-700 transition-colors"
                    onClick={() => trackNavigationClick(service.name)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link
            href="/lien-he"
            className="text-sm font-semibold leading-6 text-foreground hover:text-green-700 transition-colors"
            onClick={() => trackNavigationClick('Liên hệ')}
          >
            Liên hệ
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-end gap-x-4">
          <a
            href={`tel:${siteConfig.phone}`}
            className="hidden lg:flex items-center gap-x-2 text-sm font-semibold leading-6 text-green-700"
            onClick={() => trackPhoneClick(siteConfig.phone)}
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
    </header>

    {/* Mobile menu - Outside header for proper layering */}
    {mobileMenuOpen && (
      <div className="lg:hidden fixed inset-0 z-[60]">
        {/* Backdrop overlay */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
          aria-hidden="true"
        />
        
        {/* Menu panel */}
        <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white overflow-y-auto shadow-2xl">
          <div className="px-6 py-6">
            {/* Header with close button */}
            <div className="flex items-center justify-between mb-6">
              <Link href="/" className="flex items-center gap-2" onClick={() => setMobileMenuOpen(false)}>
                <Image src="/logo.png" alt={siteConfig.name} width={32} height={32} className="h-8 w-8" />
                <span className="text-xl font-bold text-green-700">{siteConfig.name}</span>
              </Link>
              <button
                type="button"
                className="rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Đóng menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            
            {/* Menu items */}
            <div className="space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Services section */}
            <div className="mt-4">
              <h3 className="px-4 text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Dịch vụ
              </h3>
              <div className="space-y-1">
                {services.map((service) => (
                  <Link
                    key={service.name}
                    href={service.href}
                    className="block rounded-lg px-4 py-2.5 text-sm text-gray-700 hover:bg-gray-50 hover:text-green-700 transition-colors"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-gray-200"></div>

            {/* Contact section */}
            <div className="space-y-4">
              <Link
                href="/lien-he"
                className="block rounded-lg px-4 py-3 text-base font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                Liên hệ
              </Link>
              <a
                href={`tel:${siteConfig.phone}`}
                className="flex items-center gap-2 rounded-lg px-4 py-3 text-base font-semibold text-green-700 hover:bg-gray-50 transition-colors"
                onClick={() => trackPhoneClick(siteConfig.phone)}
              >
                <Phone className="h-5 w-5" />
                {siteConfig.phone}
              </a>
              <Button asChild className="w-full bg-green-700 hover:bg-green-800 text-white">
                <Link href="/lien-he" onClick={() => setMobileMenuOpen(false)}>Liên hệ ngay</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )}
    </>
  )
}
