import Link from "next/link"
import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { siteConfig } from "@/data/site"

export function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="md:col-span-2 lg:col-span-2">
            <h3 className="text-base sm:text-lg font-bold text-green-700 mb-3 sm:mb-4">{siteConfig.name}</h3>
            <p className="text-xs sm:text-sm text-muted-foreground mb-3 sm:mb-4">{siteConfig.slogan}</p>
            <div className="space-y-3 sm:space-y-4">
              {siteConfig.addresses.map((location, index) => (
                <div key={index} className="space-y-1.5 sm:space-y-2">
                  <h4 className="text-xs sm:text-sm font-semibold text-foreground">{location.name}</h4>
                  <div className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm">
                    <MapPin className="h-4 w-4 sm:h-5 sm:w-5 text-green-700 flex-shrink-0 mt-0.5" />
                    <span className="text-foreground">{location.address}</span>
                  </div>
                  <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                    <Phone className="h-4 w-4 sm:h-5 sm:w-5 text-green-700 flex-shrink-0" />
                    <a href={`tel:${location.phone}`} className="text-foreground hover:text-green-700">
                      {location.phone}
                    </a>
                  </div>
                </div>
              ))}
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm pt-1 sm:pt-2">
                <Mail className="h-4 w-4 sm:h-5 sm:w-5 text-green-700 flex-shrink-0" />
                <a href={`mailto:${siteConfig.email}`} className="text-foreground hover:text-green-700 break-all">
                  {siteConfig.email}
                </a>
              </div>
              <div className="flex items-center gap-2 sm:gap-3 text-xs sm:text-sm">
                <Clock className="h-4 w-4 sm:h-5 sm:w-5 text-green-700 flex-shrink-0" />
                <span className="text-foreground">{siteConfig.workingHours}</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">Dịch vụ</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/dich-vu/thu-mua-laptop-gaming" className="text-xs sm:text-sm text-muted-foreground hover:text-green-700">
                  Thu mua laptop gaming
                </Link>
              </li>
              <li>
                <Link href="/dich-vu/thu-mua-macbook" className="text-xs sm:text-sm text-muted-foreground hover:text-green-700">
                  Thu mua Macbook
                </Link>
              </li>
              <li>
                <Link href="/dich-vu/thu-mua-surface" className="text-xs sm:text-sm text-muted-foreground hover:text-green-700">
                  Thu mua Surface
                </Link>
              </li>
              <li>
                <Link href="/dich-vu/thu-mua-dien-thoai" className="text-xs sm:text-sm text-muted-foreground hover:text-green-700">
                  Thu mua điện thoại
                </Link>
              </li>
              <li>
                <Link href="/dich-vu/thu-mua-may-tinh-bang" className="text-xs sm:text-sm text-muted-foreground hover:text-green-700">
                  Thu mua máy tính bảng
                </Link>
              </li>
              <li>
                <Link href="/dich-vu/thu-mua-android" className="text-xs sm:text-sm text-muted-foreground hover:text-green-700">
                  Thu mua Android
                </Link>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs sm:text-sm font-semibold text-foreground mb-3 sm:mb-4">Hỗ trợ khách hàng</h3>
            <ul className="space-y-1.5 sm:space-y-2">
              <li>
                <Link href="/lien-he" className="text-xs sm:text-sm text-muted-foreground hover:text-green-700">
                  Liên hệ
                </Link>
              </li>
              <li>
                <a
                  href={siteConfig.zalo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-green-700"
                >
                  Chat Zalo
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.messenger}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs sm:text-sm text-muted-foreground hover:text-green-700"
                >
                  Chat Messenger
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-6 sm:mt-8 border-t border-border pt-6 sm:pt-8">
          <p className="text-center text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} {siteConfig.name}. Tất cả quyền được bảo lưu.
          </p>
        </div>
      </div>
    </footer>
  )
}
