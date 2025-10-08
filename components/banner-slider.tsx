"use client"

import { useCallback, useEffect, useState } from "react"
import useEmblaCarousel from "embla-carousel-react"
import Image from "next/image"

const slides = [
  { 
    src: "/images/banner.jpg", 
    mobileSrc: "/images/banner-mobile.jpg",
    alt: "Thu mua điện thoại laptop cũ - Banner 1" 
  },
  { 
    src: "/images/banner2.jpg",
    mobileSrc: "/images/banner2-mobile.jpg", 
    alt: "Thu mua điện thoại laptop cũ - Banner 2" 
  },
  { 
    src: "/images/banner3.jpg",
    mobileSrc: "/images/banner3-mobile.jpg", 
    alt: "Thu mua điện thoại laptop cũ - Banner 3" 
  },
]

export function BannerSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true })
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollTo = useCallback(
    (index: number) => emblaApi && emblaApi.scrollTo(index),
    [emblaApi]
  )

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi])

  useEffect(() => {
    if (!emblaApi) return

    onSelect()
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)

    // Auto-play
    const intervalId = setInterval(() => {
      if (emblaApi) {
        emblaApi.scrollNext()
      }
    }, 5000)

    return () => {
      clearInterval(intervalId)
      emblaApi.off("select", onSelect)
      emblaApi.off("reInit", onSelect)
    }
  }, [emblaApi, onSelect])

  return (
    <>
      {/* Mobile: Single banner with fixed height */}
      <section className="relative w-full h-[235px] overflow-hidden sm:hidden">
        <Image
          src="/images/banner2-mobile.jpg"
          alt="Thu mua điện thoại laptop cũ"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
      </section>

      {/* Desktop/Tablet: Slider with multiple banners */}
      <section className="hidden sm:block relative w-full sm:aspect-[5/2] lg:aspect-[21/8] overflow-hidden">
        <div className="overflow-hidden h-full" ref={emblaRef}>
          <div className="flex h-full">
            {slides.map((slide, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 relative">
                <Image
                  src={slide.src}
                  alt={slide.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="100vw"
                />
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full transition-all ${
                index === selectedIndex
                  ? "bg-white w-8"
                  : "bg-white/50 hover:bg-white/75"
              }`}
              onClick={() => scrollTo(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>
    </>
  )
}
