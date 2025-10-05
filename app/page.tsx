import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ServiceCard } from "@/components/service-card"
import { BenefitCard } from "@/components/benefit-card"
import { ContactForm } from "@/components/contact-form"
import { StructuredData } from "@/components/structured-data"
import { getArticleSchema } from "@/lib/structured-data"
import { benefits, whyChooseUs } from "@/data/site"
import { services } from "@/data/services"
import { CheckCircle2 } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Thu mua điện thoại, laptop cũ giá cao - Uy tín, thanh toán nhanh | LuxPhone",
  description:
    "Dịch vụ thu mua điện thoại, laptop cũ uy tín tại Hà Nội và TP.HCM. Thu mua iPhone, Samsung, Macbook, Dell, HP với giá cao nhất. Thu mua tận nhà, thanh toán ngay.",
  openGraph: {
    title: "Thu mua điện thoại, laptop cũ giá cao - Uy tín, thanh toán nhanh | LuxPhone",
    description:
      "Thu mua điện thoại, laptop cũ mọi hãng, mọi tình trạng. Giá cao nhất thị trường, thu mua tận nhà, thanh toán nhanh.",
    url: "https://luxthumua.com",
  },
}

export default function HomePage() {
  const articleSchema = getArticleSchema({
    title: "Thu mua điện thoại, laptop cũ giá cao",
    description: "Dịch vụ thu mua điện thoại, laptop cũ uy tín tại Hà Nội và TP.HCM. Giá cao, thanh toán nhanh.",
    image: "/images/banner.jpg",
    slug: "",
  })

  return (
    <div className="flex flex-col">
      <StructuredData data={articleSchema} />
      {/* Hero Section */}
      <section className="relative h-[400px] sm:h-[500px] lg:h-[600px] w-full overflow-hidden">
        <Image
          src="/images/banner.jpg"
          alt="Thu mua điện thoại laptop cũ"
          fill
          priority
          className="object-cover brightness-50"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-4 sm:mb-6">
              Thu mua điện thoại, laptop cũ
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Giá cao nhất thị trường - Thu mua tận nhà - Thanh toán ngay
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6">
              <Button asChild size="lg" className="w-full sm:w-auto bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
                <Link href="#contact-form">Nhận báo giá ngay</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="w-full sm:w-auto bg-white/10 text-white border-white hover:bg-white/20"
              >
                <Link href="/lien-he">Liên hệ tư vấn</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} icon={benefit.icon} title={benefit.title} description={benefit.description} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-12 sm:py-16 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl">Dịch vụ của chúng tôi</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
              Chúng tôi chuyên thu mua các loại thiết bị điện tử với giá cao nhất thị trường
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <ServiceCard
                key={service.id}
                title={service.title}
                description={service.description}
                image={service.image}
                href={service.detailSlug}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-12 sm:py-16 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground md:text-4xl">Tại sao chọn chúng tôi?</h2>
            <p className="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground">
              Hơn 10 năm kinh nghiệm trong lĩnh vực thu mua thiết bị điện tử
            </p>
          </div>
          <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 sm:gap-4 rounded-lg border border-border bg-card p-4 sm:p-6 transition-all hover:shadow-md"
              >
                <div className="flex-shrink-0">
                  <CheckCircle2 className="h-5 w-5 sm:h-6 sm:w-6 text-green-700" />
                </div>
                <div>
                  <h3 className="font-semibold text-sm sm:text-base text-foreground mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with Contact Form */}
      <section id="contact-form" className="py-12 sm:py-16 bg-green-700">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-6 sm:mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white md:text-4xl">Nhận báo giá ngay</h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-green-100">
              Để lại thông tin, chúng tôi sẽ liên hệ tư vấn và báo giá miễn phí trong 5 phút
            </p>
          </div>
          <div className="rounded-xl sm:rounded-2xl bg-white p-6 sm:p-8 shadow-xl">
            <ContactForm />
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-8 sm:py-12 bg-muted/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-4 sm:gap-8 lg:grid-cols-4 text-center">
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-green-700">10+</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground">Năm kinh nghiệm</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-green-700">50K+</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground">Khách hàng tin tưởng</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-green-700">24/7</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground">Hỗ trợ tư vấn</div>
            </div>
            <div>
              <div className="text-3xl sm:text-4xl font-bold text-green-700">100%</div>
              <div className="mt-1 sm:mt-2 text-xs sm:text-sm text-muted-foreground">Khách hàng hài lòng</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
