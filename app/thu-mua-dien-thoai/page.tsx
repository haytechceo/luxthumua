import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactForm } from "@/components/contact-form"
import { StructuredData } from "@/components/structured-data"
import { getBreadcrumbSchema, getFAQSchema, getServiceSchema } from "@/lib/structured-data"
import { CheckCircle2, Smartphone, DollarSign, Clock, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Thu mua điện thoại cũ giá cao - iPhone, Samsung, Oppo",
  description:
    "Dịch vụ thu mua điện thoại cũ uy tín tại Hà Nội và TP.HCM. Thu mua iPhone, Samsung, Oppo, Xiaomi với giá cao nhất. Thanh toán nhanh, thu mua tận nhà.",
  keywords: [
    "thu mua điện thoại",
    "thu mua iPhone",
    "thu mua Samsung",
    "thu mua điện thoại cũ",
    "bán điện thoại cũ",
    "thu mua điện thoại giá cao",
  ],
  openGraph: {
    title: "Thu mua điện thoại cũ giá cao - iPhone, Samsung, Oppo",
    description: "Thu mua điện thoại cũ mọi hãng, mọi tình trạng. Giá cao, thanh toán nhanh, thu mua tận nhà.",
    url: "https://luxthumua.com/thu-mua-dien-thoai",
  },
  alternates: {
    canonical: "https://luxthumua.com/thu-mua-dien-thoai",
  },
}

const brands = [
  "iPhone (Apple)",
  "Samsung Galaxy",
  "Oppo",
  "Xiaomi",
  "Vivo",
  "Realme",
  "Huawei",
  "Nokia",
  "Sony Xperia",
  "OnePlus",
]

const priceTable = [
  { model: "iPhone 15 Pro Max", price: "26.000.000 - 30.000.000" },
  { model: "iPhone 15", price: "18.000.000 - 22.000.000" },
  { model: "iPhone 14", price: "15.000.000 - 18.000.000" },
  { model: "iPhone 13", price: "12.000.000 - 15.000.000" },
  { model: "Samsung S24 Ultra", price: "22.000.000 - 26.000.000" },
  { model: "Samsung S23", price: "13.000.000 - 16.000.000" },
]

const process = [
  {
    step: "1",
    title: "Liên hệ và tư vấn",
    description: "Gọi hotline hoặc nhắn tin qua Zalo/Messenger để được tư vấn và báo giá sơ bộ",
  },
  {
    step: "2",
    title: "Kiểm tra máy",
    description: "Nhân viên đến tận nơi hoặc bạn mang máy đến cửa hàng để kiểm tra chi tiết",
  },
  {
    step: "3",
    title: "Định giá và thanh toán",
    description: "Thỏa thuận giá, xóa dữ liệu và thanh toán ngay bằng tiền mặt hoặc chuyển khoản",
  },
]

const faqs = [
  {
    question: "Điện thoại màn hình vỡ có thu mua không?",
    answer:
      "Có, chúng tôi nhận thu mua điện thoại màn hình vỡ. Giá sẽ thấp hơn máy nguyên zin tùy mức độ vỡ và khả năng hoạt động của máy.",
  },
  {
    question: "Máy hỏng nguồn có mua không?",
    answer:
      "Có, chúng tôi vẫn thu mua máy hỏng nguồn, hỏng main. Giá sẽ tính theo linh kiện còn sử dụng được như màn hình, camera, pin.",
  },
  {
    question: "Cần mang theo giấy tờ gì?",
    answer:
      "Bạn cần mang theo CMND/CCCD để xác nhận danh tính. Nếu có hóa đơn mua máy, hộp máy, phụ kiện thì giá sẽ cao hơn.",
  },
  {
    question: "Thanh toán bằng hình thức nào?",
    answer: "Chúng tôi hỗ trợ thanh toán bằng tiền mặt ngay tại chỗ hoặc chuyển khoản ngân hàng.",
  },
]

export default function ThuMuaDienThoaiPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Trang chủ", url: "https://luxthumua.com" },
    { name: "Thu mua điện thoại", url: "https://luxthumua.com/thu-mua-dien-thoai" },
  ])

  const faqSchema = getFAQSchema(faqs)

  const serviceSchema = getServiceSchema({
    name: "Thu mua điện thoại cũ",
    description: "Dịch vụ thu mua điện thoại cũ uy tín, giá cao, thanh toán nhanh",
    url: "https://luxthumua.com/thu-mua-dien-thoai",
  })

  return (
    <div className="flex flex-col">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />
      <StructuredData data={serviceSchema} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Breadcrumbs items={[{ label: "Thu mua điện thoại" }]} />

        {/* Hero Section */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-3 sm:mb-4 text-balance">
            Thu mua điện thoại cũ giá cao nhất thị trường
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground text-pretty">
            Chuyên thu mua điện thoại iPhone, Samsung, Oppo, Xiaomi và các hãng khác. Mọi tình trạng, giá cao, thanh
            toán nhanh.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-12 sm:mb-16">
          <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-lg bg-card border border-border">
            <Smartphone className="h-10 w-10 sm:h-12 sm:w-12 text-green-700 mb-3 sm:mb-4" />
            <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Mọi thương hiệu</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Thu mua tất cả các hãng điện thoại</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-lg bg-card border border-border">
            <DollarSign className="h-10 w-10 sm:h-12 sm:w-12 text-green-700 mb-3 sm:mb-4" />
            <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Giá cao nhất</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Cam kết giá tốt nhất thị trường</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-lg bg-card border border-border">
            <Clock className="h-10 w-10 sm:h-12 sm:w-12 text-green-700 mb-3 sm:mb-4" />
            <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Thanh toán nhanh</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Chỉ 15-20 phút hoàn tất</p>
          </div>
          <div className="flex flex-col items-center text-center p-4 sm:p-6 rounded-lg bg-card border border-border">
            <Shield className="h-10 w-10 sm:h-12 sm:w-12 text-green-700 mb-3 sm:mb-4" />
            <h3 className="font-semibold text-sm sm:text-base mb-1 sm:mb-2">Bảo mật dữ liệu</h3>
            <p className="text-xs sm:text-sm text-muted-foreground">Xóa sạch thông tin cá nhân</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mb-12 sm:mb-16">
          <div className="lg:col-span-2 space-y-8 sm:space-y-12">
            {/* Brands */}
            <section>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Thương hiệu điện thoại chúng tôi thu mua</h2>
              <p className="text-muted-foreground mb-6">
                Chúng tôi nhận thu mua mọi thương hiệu điện thoại từ phổ thông đến cao cấp, dù máy còn hoạt động tốt hay
                đã hỏng hóc.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {brands.map((brand) => (
                  <div key={brand} className="flex items-center gap-2 p-3 rounded-lg bg-muted">
                    <CheckCircle2 className="h-5 w-5 text-green-700 flex-shrink-0" />
                    <span className="text-sm font-medium">{brand}</span>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Quy trình thu mua điện thoại</h2>
              <div className="space-y-6">
                {process.map((item) => (
                  <div key={item.step} className="flex gap-4">
                    <div className="flex-shrink-0 flex h-12 w-12 items-center justify-center rounded-full bg-green-700 text-white font-bold text-lg">
                      {item.step}
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-2">{item.title}</h3>
                      <p className="text-muted-foreground">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Price Table */}
            <section>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Bảng giá thu mua tham khảo</h2>
              <p className="text-muted-foreground mb-6">
                Giá dưới đây chỉ mang tính chất tham khảo. Giá thực tế phụ thuộc vào tình trạng máy, phụ kiện và thời
                điểm thu mua.
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border border-border p-3 text-left font-semibold">Model</th>
                      <th className="border border-border p-3 text-left font-semibold">Giá thu mua (VNĐ)</th>
                    </tr>
                  </thead>
                  <tbody>
                    {priceTable.map((item) => (
                      <tr key={item.model}>
                        <td className="border border-border p-3">{item.model}</td>
                        <td className="border border-border p-3 text-green-700 font-semibold">{item.price}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>

            {/* FAQ */}
            <section>
              <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">Câu hỏi thường gặp</h2>
              <div className="space-y-4">
                {faqs.map((faq, index) => (
                  <div key={index} className="rounded-lg border border-border bg-card p-6">
                    <h3 className="font-semibold text-lg mb-2">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-4 sm:space-y-6">
              <div className="rounded-lg border border-border bg-card p-4 sm:p-6">
                <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Nhận báo giá ngay</h3>
                <ContactForm />
              </div>
              <div className="rounded-lg bg-green-700 p-4 sm:p-6 text-white">
                <h3 className="font-semibold text-base sm:text-lg mb-3 sm:mb-4">Liên hệ trực tiếp</h3>
                <div className="space-y-2 sm:space-y-3 text-xs sm:text-sm">
                  <p>Hotline: 0328488888</p>
                  <p>Email: contact@luxphone.vn</p>
                  <p>Giờ làm việc: 8:00 - 21:00</p>
                </div>
                <Button asChild className="w-full mt-3 sm:mt-4 bg-yellow-500 hover:bg-yellow-600 text-gray-900 text-sm sm:text-base">
                  <Link href="/lien-he">Xem thông tin liên hệ</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
