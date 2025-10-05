import type { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactForm } from "@/components/contact-form"
import { StructuredData } from "@/components/structured-data"
import { getBreadcrumbSchema, getServiceSchema } from "@/lib/structured-data"
import { CheckCircle2, Laptop, DollarSign, Home, Shield } from "lucide-react"

export const metadata: Metadata = {
  title: "Thu mua laptop cũ giá cao - Dell, HP, Asus, Lenovo, Macbook",
  description:
    "Dịch vụ thu mua laptop cũ uy tín tại Hà Nội và TP.HCM. Thu mua laptop Dell, HP, Asus, Lenovo, Macbook với giá cao nhất. Thu mua tận nhà, thanh toán nhanh.",
  keywords: [
    "thu mua laptop",
    "thu mua laptop cũ",
    "thu mua Macbook",
    "thu mua laptop Dell",
    "bán laptop cũ",
    "thu mua laptop giá cao",
  ],
  openGraph: {
    title: "Thu mua laptop cũ giá cao - Dell, HP, Asus, Lenovo, Macbook",
    description: "Thu mua laptop cũ mọi hãng, mọi tình trạng. Giá cao, thanh toán nhanh, thu mua tận nhà.",
    url: "https://luxthumua.com/thu-mua-laptop",
  },
  alternates: {
    canonical: "https://luxthumua.com/thu-mua-laptop",
  },
}

const brands = [
  { name: "Dell", description: "Inspiron, Latitude, XPS, Precision, Alienware" },
  { name: "HP", description: "Pavilion, Envy, EliteBook, ProBook, Omen" },
  { name: "Asus", description: "VivoBook, ZenBook, ROG, TUF Gaming" },
  { name: "Lenovo", description: "ThinkPad, IdeaPad, Legion, Yoga" },
  { name: "Apple", description: "Macbook Air, Macbook Pro (2015-2024)" },
  { name: "Acer", description: "Aspire, Swift, Predator, Nitro" },
  { name: "MSI", description: "Gaming laptops, Workstation" },
  { name: "Khác", description: "Razer, LG, Microsoft Surface, Gigabyte..." },
]

const signs = [
  {
    title: "Laptop chạy chậm",
    description: "Khởi động lâu, mở ứng dụng chậm, không đủ sức chạy phần mềm mới",
  },
  {
    title: "Pin chai",
    description: "Pin chỉ dùng được 1-2 giờ, phải cắm sạc liên tục",
  },
  {
    title: "Màn hình vỡ/lỗi",
    description: "Chi phí thay màn hình cao, nên cân nhắc bán máy cũ và mua máy mới",
  },
  {
    title: "Muốn nâng cấp",
    description: "Laptop mới có hiệu năng tốt hơn, pin trâu hơn, thiết kế đẹp hơn",
  },
]

const process = [
  {
    step: "1",
    title: "Liên hệ và cung cấp thông tin",
    description: "Gọi hotline hoặc nhắn tin, cung cấp thông tin về laptop (hãng, model, cấu hình, tình trạng)",
  },
  {
    step: "2",
    title: "Hẹn lịch kiểm tra tận nơi",
    description: "Nhân viên đến tận nhà/văn phòng để kiểm tra máy chi tiết và định giá chính xác",
  },
  {
    step: "3",
    title: "Định giá và thanh toán",
    description: "Thỏa thuận giá, xóa dữ liệu và thanh toán ngay bằng tiền mặt hoặc chuyển khoản",
  },
]

export default function ThuMuaLaptopPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Trang chủ", url: "https://luxthumua.com" },
    { name: "Thu mua laptop", url: "https://luxthumua.com/thu-mua-laptop" },
  ])

  const serviceSchema = getServiceSchema({
    name: "Thu mua laptop cũ",
    description: "Dịch vụ thu mua laptop cũ uy tín, giá cao, thanh toán nhanh",
    url: "https://luxthumua.com/thu-mua-laptop",
  })

  return (
    <div className="flex flex-col">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={serviceSchema} />
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8">
        <Breadcrumbs items={[{ label: "Thu mua laptop" }]} />

        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-4 text-balance">
            Thu mua laptop cũ giá cao - Mọi hãng, mọi tình trạng
          </h1>
          <p className="text-xl text-muted-foreground text-pretty">
            Chuyên thu mua laptop Dell, HP, Asus, Lenovo, Macbook và các hãng khác. Thu mua tận nhà, định giá minh bạch,
            thanh toán nhanh.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-16">
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border">
            <Laptop className="h-12 w-12 text-green-700 mb-4" />
            <h3 className="font-semibold mb-2">Mọi thương hiệu</h3>
            <p className="text-sm text-muted-foreground">Thu mua tất cả các hãng laptop</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border">
            <DollarSign className="h-12 w-12 text-green-700 mb-4" />
            <h3 className="font-semibold mb-2">Giá cao nhất</h3>
            <p className="text-sm text-muted-foreground">Macbook cao hơn thị trường 10-15%</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border">
            <Home className="h-12 w-12 text-green-700 mb-4" />
            <h3 className="font-semibold mb-2">Thu mua tận nhà</h3>
            <p className="text-sm text-muted-foreground">Miễn phí trong nội thành</p>
          </div>
          <div className="flex flex-col items-center text-center p-6 rounded-lg bg-card border border-border">
            <Shield className="h-12 w-12 text-green-700 mb-4" />
            <h3 className="font-semibold mb-2">Bảo mật dữ liệu</h3>
            <p className="text-sm text-muted-foreground">Xóa sạch dữ liệu trên ổ cứng</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          <div className="lg:col-span-2 space-y-12">
            {/* Brands */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Các thương hiệu laptop chúng tôi thu mua</h2>
              <p className="text-muted-foreground mb-6">
                Chúng tôi nhận thu mua mọi thương hiệu laptop từ phổ thông đến cao cấp, từ laptop văn phòng đến laptop
                gaming và workstation.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {brands.map((brand) => (
                  <div key={brand.name} className="rounded-lg border border-border bg-card p-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-green-700 flex-shrink-0 mt-1" />
                      <div>
                        <h3 className="font-semibold mb-1">{brand.name}</h3>
                        <p className="text-sm text-muted-foreground">{brand.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Signs to sell */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Dấu hiệu bạn nên bán laptop cũ</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {signs.map((sign, index) => (
                  <div key={index} className="rounded-lg border border-border bg-card p-6">
                    <h3 className="font-semibold text-lg mb-2">{sign.title}</h3>
                    <p className="text-sm text-muted-foreground">{sign.description}</p>
                  </div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Quy trình thu mua laptop tận nhà</h2>
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
              <div className="mt-6 rounded-lg bg-yellow-50 border border-yellow-200 p-6">
                <p className="text-sm text-gray-700">
                  <strong>Lưu ý:</strong> Toàn bộ quy trình chỉ mất 20-30 phút. Nhanh chóng, tiện lợi, không mất phí.
                </p>
              </div>
            </section>

            {/* Support */}
            <section>
              <h2 className="text-3xl font-bold mb-6">Hỗ trợ thu mua tận nơi</h2>
              <p className="text-muted-foreground mb-4">
                Chúng tôi cung cấp dịch vụ thu mua laptop tận nhà/văn phòng hoàn toàn miễn phí trong khu vực nội thành
                Hà Nội và TP.HCM. Nhân viên sẽ mang theo thiết bị kiểm tra chuyên nghiệp để định giá chính xác nhất.
              </p>
              <p className="text-muted-foreground mb-4">
                Đối với khách hàng ở tỉnh, bạn có thể gửi máy qua bưu điện (chúng tôi hỗ trợ phí ship) hoặc liên hệ để
                được tư vấn phương án phù hợp nhất.
              </p>
              <div className="flex gap-4 mt-6">
                <Button asChild className="bg-green-700 hover:bg-green-800 text-white">
                  <Link href="/lien-he">Liên hệ ngay</Link>
                </Button>
                <Button asChild variant="outline">
                  <a href="tel:0328488888">Gọi hotline: 0328488888</a>
                </Button>
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
                <h3 className="font-semibold text-lg mb-4">Cam kết của chúng tôi</h3>
                <ul className="space-y-3 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Giá cao nhất thị trường</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Thu mua tận nhà miễn phí</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Thanh toán ngay sau thỏa thuận</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 flex-shrink-0 mt-0.5" />
                    <span>Bảo mật thông tin tuyệt đối</span>
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
