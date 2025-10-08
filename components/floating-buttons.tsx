"use client"

import { Phone } from "lucide-react"
import { siteConfig } from "@/data/site"
import { trackFloatingButtonClick } from "@/lib/analytics"

export function FloatingButtons() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col gap-2 sm:gap-3">
      <a
        href={siteConfig.zalo}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#0068FF] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label="Chat qua Zalo"
        onClick={() => trackFloatingButtonClick('zalo')}
      >
        <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 4C12.96 4 4 11.76 4 21.6C4 27.2 7.04 32.16 11.84 35.36L10.4 43.2L18.72 39.84C20.4 40.16 22.16 40.32 24 40.32C35.04 40.32 44 32.56 44 22.72C44 12.88 35.04 4 24 4Z"
            fill="white"
          />
          <path
            d="M24 8C13.52 8 8 14.4 8 21.6C8 25.6 10.24 29.28 13.76 31.84L12.8 37.6L18.88 35.2C20.48 35.52 22.16 35.68 24 35.68C34.48 35.68 40 29.28 40 22.08C40 14.88 34.48 8 24 8Z"
            fill="#0068FF"
          />
        </svg>
        <span className="absolute right-14 sm:right-16 whitespace-nowrap rounded-lg bg-gray-900 px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 hidden sm:block">
          Chat Zalo
        </span>
      </a>

      <a
        href={siteConfig.messenger}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-[#0084FF] text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl"
        aria-label="Chat qua Messenger"
        onClick={() => trackFloatingButtonClick('messenger')}
      >
        <svg className="h-6 w-6 sm:h-7 sm:w-7" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M24 4C12.96 4 4 12.48 4 23.04C4 28.8 6.72 33.84 10.88 37.28V44L17.44 40.64C19.52 41.28 21.72 41.6 24 41.6C35.04 41.6 44 33.12 44 22.56C44 12 35.04 4 24 4Z"
            fill="white"
          />
          <path
            d="M24 8C13.52 8 8 15.2 8 23.04C8 27.52 10.08 31.52 13.44 34.24V39.2L18.24 36.64C20.08 37.12 22.04 37.36 24 37.36C34.48 37.36 40 30.16 40 22.32C40 14.48 34.48 8 24 8ZM26.4 27.2L21.6 22.08L12.8 27.2L22.4 16.8L27.2 21.92L36 16.8L26.4 27.2Z"
            fill="#0084FF"
          />
        </svg>
        <span className="absolute right-14 sm:right-16 whitespace-nowrap rounded-lg bg-gray-900 px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 hidden sm:block">
          Messenger
        </span>
      </a>

      {/* Phone Button */}
      <a
        href={`tel:${siteConfig.phone}`}
        className="group flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-full bg-green-600 text-white shadow-lg transition-all hover:scale-110 hover:shadow-xl animate-pulse"
        aria-label="Gọi điện thoại"
        onClick={() => trackFloatingButtonClick('phone')}
      >
        <Phone className="h-5 w-5 sm:h-6 sm:w-6" />
        <span className="absolute right-14 sm:right-16 whitespace-nowrap rounded-lg bg-gray-900 px-2 py-1 sm:px-3 sm:py-2 text-xs sm:text-sm text-white opacity-0 transition-opacity group-hover:opacity-100 hidden sm:block">
          Gọi ngay: {siteConfig.phone}
        </span>
      </a>
    </div>
  )
}
