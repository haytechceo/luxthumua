import type { Metadata } from "next"
import { MapPin, Phone, Mail, Clock, MessageCircle } from "lucide-react"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactForm } from "@/components/contact-form"
import { siteConfig } from "@/data/site"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Liên hệ - Thu mua điện thoại, laptop cũ",
  description:
    "Liên hệ với chúng tôi để được tư vấn và báo giá thu mua điện thoại, laptop cũ. Hotline: 0328488888. Hỗ trợ 24/7.",
  openGraph: {
    title: "Liên hệ - Thu mua điện thoại, laptop cũ",
    description: "Liên hệ ngay để được tư vấn và báo giá miễn phí. Hỗ trợ 24/7.",
    url: "https://luxthumua.com/lien-he",
  },
  alternates: {
    canonical: "https://luxthumua.com/lien-he",
  },
}

export default function LienHePage() {
  return (
    <div className="flex flex-col">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <Breadcrumbs items={[{ label: "Liên hệ" }]} />

        {/* Hero Section */}
        <div className="mb-12 text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4">Liên hệ với chúng tôi</h1>
          <p className="text-xl text-muted-foreground">
            Chúng tôi luôn sẵn sàng tư vấn và hỗ trợ bạn 24/7. Hãy liên hệ ngay để nhận báo giá miễn phí!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-bold mb-6">Thông tin liên hệ</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                    <MapPin className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Địa chỉ</h3>
                    <p className="text-muted-foreground">{siteConfig.address}</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                    <Phone className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Số điện thoại</h3>
                    <a href={`tel:${siteConfig.phone}`} className="text-green-700 hover:underline">
                      {siteConfig.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                    <Mail className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a href={`mailto:${siteConfig.email}`} className="text-green-700 hover:underline">
                      {siteConfig.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 flex-shrink-0">
                    <Clock className="h-6 w-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Giờ làm việc</h3>
                    <p className="text-muted-foreground">{siteConfig.workingHours}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Contact Buttons */}
            <div className="rounded-lg border border-border bg-card p-6">
              <h3 className="font-semibold text-lg mb-4">Liên hệ nhanh</h3>
              <div className="space-y-3">
                <Button asChild className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                  <a href={siteConfig.zalo} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat qua Zalo
                  </a>
                </Button>
                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <a href={siteConfig.messenger} target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="mr-2 h-5 w-5" />
                    Chat qua Messenger
                  </a>
                </Button>
                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white">
                  <a href={`tel:${siteConfig.phone}`}>
                    <Phone className="mr-2 h-5 w-5" />
                    Gọi điện ngay
                  </a>
                </Button>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="rounded-lg overflow-hidden border border-border">
              <div className="relative h-64 bg-muted flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-2" />
                  <p className="text-sm text-muted-foreground">Bản đồ vị trí</p>
                  <p className="text-xs text-muted-foreground mt-1">{siteConfig.address}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="rounded-lg border border-border bg-card p-8">
              <h2 className="text-2xl font-bold mb-6">Gửi tin nhắn cho chúng tôi</h2>
              <ContactForm />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="rounded-lg bg-green-700 p-8 text-white text-center">
          <h2 className="text-2xl font-bold mb-4">Cần tư vấn ngay?</h2>
          <p className="text-lg mb-6">
            Đội ngũ chuyên viên của chúng tôi luôn sẵn sàng hỗ trợ bạn 24/7. Hãy gọi ngay để được tư vấn và báo giá miễn
            phí!
          </p>
          <Button asChild size="lg" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold">
            <a href={`tel:${siteConfig.phone}`}>Gọi ngay: {siteConfig.phone}</a>
          </Button>
        </div>
      </div>
    </div>
  )
}
