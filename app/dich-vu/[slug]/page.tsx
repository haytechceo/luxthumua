import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactForm } from "@/components/contact-form"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { detailServices } from "@/data/services"

interface ServiceDetailPageProps {
  params: {
    slug: string
  }
}

export async function generateStaticParams() {
  return detailServices.map((service) => ({
    slug: service.slug,
  }))
}

export async function generateMetadata({ params }: ServiceDetailPageProps): Promise<Metadata> {
  const service = detailServices.find((s) => s.slug === params.slug)

  if (!service) {
    return {
      title: "Không tìm thấy trang",
    }
  }

  return {
    title: service.metaTitle,
    description: service.metaDescription,
    keywords: service.keywords,
    openGraph: {
      title: service.metaTitle,
      description: service.metaDescription,
      url: `https://luxthumua.com/dich-vu/${service.slug}`,
      images: [service.image],
    },
    alternates: {
      canonical: `https://luxthumua.com/dich-vu/${service.slug}`,
    },
  }
}

export default function ServiceDetailPage({ params }: ServiceDetailPageProps) {
  const service = detailServices.find((s) => s.slug === params.slug)

  if (!service) {
    notFound()
  }

  return (
    <div className="flex flex-col">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <Breadcrumbs items={[{ label: "Dịch vụ", href: "/#services" }, { label: service.title }]} />

        {/* Hero Section */}
        <div className="mb-12">
          <div className="relative h-80 w-full overflow-hidden rounded-2xl mb-8">
            <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
          </div>
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4 text-balance">
            {service.title}
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">{service.description}</p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-12">
            {/* Introduction */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Giới thiệu dịch vụ</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p>{service.longDescription}</p>
              </div>
            </section>

            {/* Features */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Ưu điểm khi sử dụng dịch vụ</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {service.features.map((feature, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 rounded-lg border border-border bg-card">
                    <CheckCircle2 className="h-5 w-5 text-green-700 flex-shrink-0 mt-1" />
                    <span className="text-foreground">{feature}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Quy trình thực hiện</h2>
              <div className="space-y-6">
                {service.process.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-white font-bold text-lg">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-2">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Price Range */}
            {service.priceRange && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Bảng giá tham khảo</h2>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-muted">
                        <th className="border border-border p-3 text-left font-semibold">Loại thiết bị</th>
                        <th className="border border-border p-3 text-left font-semibold">Giá thu mua (VNĐ)</th>
                      </tr>
                    </thead>
                    <tbody>
                      {service.priceRange.map((item, index) => (
                        <tr key={index}>
                          <td className="border border-border p-3">{item.model}</td>
                          <td className="border border-border p-3 text-green-700 font-semibold">{item.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-muted-foreground mt-4">
                  * Giá trên chỉ mang tính chất tham khảo. Giá thực tế phụ thuộc vào tình trạng máy và thời điểm thu
                  mua.
                </p>
              </section>
            )}

            {/* FAQ */}
            {service.faqs && (
              <section>
                <h2 className="text-3xl font-bold mb-6">Câu hỏi thường gặp</h2>
                <div className="space-y-4">
                  {service.faqs.map((faq, index) => (
                    <div key={index} className="rounded-lg border border-border bg-card p-6">
                      <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Related Services */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Dịch vụ liên quan</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {detailServices
                  .filter((s) => s.slug !== service.slug)
                  .slice(0, 4)
                  .map((relatedService) => (
                    <Link
                      key={relatedService.slug}
                      href={`/dich-vu/${relatedService.slug}`}
                      className="group flex items-center gap-3 p-4 rounded-lg border border-border bg-card hover:shadow-md transition-all"
                    >
                      <div className="flex-1">
                        <h3 className="font-semibold group-hover:text-green-700 transition-colors">
                          {relatedService.title}
                        </h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">{relatedService.description}</p>
                      </div>
                      <ArrowRight className="h-5 w-5 text-green-700 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-6">
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold text-lg mb-4">Nhận báo giá ngay</h3>
                <ContactForm />
              </div>
              <div className="rounded-lg bg-green-700 p-6 text-white">
                <h3 className="font-semibold text-lg mb-4">Liên hệ trực tiếp</h3>
                <div className="space-y-3 text-sm">
                  <p>Hotline: 0328488888</p>
                  <p>Email: contact@luxphone.vn</p>
                  <p>Giờ làm việc: 8:00 - 21:00</p>
                </div>
                <Button asChild className="w-full mt-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900">
                  <Link href="/lien-he">Xem thông tin liên hệ</Link>
                </Button>
              </div>
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold text-lg mb-4">Cam kết của chúng tôi</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-700 flex-shrink-0 mt-0.5" />
                    <span>Giá cao nhất thị trường</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-700 flex-shrink-0 mt-0.5" />
                    <span>Thu mua tận nhà miễn phí</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-700 flex-shrink-0 mt-0.5" />
                    <span>Thanh toán ngay</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-green-700 flex-shrink-0 mt-0.5" />
                    <span>Bảo mật thông tin</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
