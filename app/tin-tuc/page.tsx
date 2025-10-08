import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { StructuredData } from "@/components/structured-data"
import { getBreadcrumbSchema } from "@/lib/structured-data"
import newsData from "@/data/news.json"
import { Calendar, User, Tag } from "lucide-react"

export const metadata: Metadata = {
  title: "Tin tức - Kiến thức thu mua điện thoại, laptop | LuxPhone",
  description:
    "Cập nhật tin tức mới nhất về thị trường thu mua điện thoại, laptop cũ. Chia sẻ kinh nghiệm, bảng giá, địa chỉ uy tín.",
  keywords: [
    "tin tức công nghệ",
    "thu mua điện thoại",
    "cửa hàng uy tín",
    "giá điện thoại cũ",
    "kinh nghiệm bán điện thoại",
  ],
  openGraph: {
    title: "Tin tức - Kiến thức thu mua điện thoại, laptop | LuxPhone",
    description: "Cập nhật tin tức, kiến thức về thị trường thu mua điện thoại, laptop cũ",
    url: "https://luxthumua.com/tin-tuc",
  },
  alternates: {
    canonical: "https://luxthumua.com/tin-tuc",
  },
}

export default function TinTucPage() {
  const articles = newsData.articles

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Trang chủ", url: "https://luxthumua.com" },
    { name: "Tin tức", url: "https://luxthumua.com/tin-tuc" },
  ])

  return (
    <div className="flex flex-col">
      <StructuredData data={breadcrumbSchema} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Breadcrumbs items={[{ label: "Tin tức" }]} />

        {/* Hero Section */}
        <div className="mb-8 sm:mb-12">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-3 sm:mb-4">
            Tin tức & Kiến thức
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground">
            Cập nhật tin tức mới nhất về thị trường thu mua điện thoại, laptop cũ. Chia sẻ kinh nghiệm và địa chỉ uy
            tín.
          </p>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <Link
              key={article.slug}
              href={`/tin-tuc/${article.slug}`}
              className="group rounded-lg border border-border bg-card overflow-hidden transition-all hover:shadow-lg hover:border-green-700"
            >
              <div className="relative aspect-video bg-muted">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex items-center gap-2 mb-3 text-xs text-muted-foreground">
                  <Calendar className="h-3.5 w-3.5" />
                  <time dateTime={article.publishDate}>
                    {new Date(article.publishDate).toLocaleDateString("vi-VN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <h2 className="font-bold text-lg mb-2 line-clamp-2 group-hover:text-green-700 transition-colors">
                  {article.title}
                </h2>
                <p className="text-sm text-muted-foreground line-clamp-3 mb-4">{article.description}</p>
                <div className="flex flex-wrap gap-2">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-muted text-xs text-muted-foreground"
                    >
                      <Tag className="h-3 w-3" />
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State */}
        {articles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">Chưa có bài viết nào.</p>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-12 sm:mt-16 rounded-lg bg-green-700 p-6 sm:p-8 text-center text-white">
          <h2 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4">Bạn muốn bán điện thoại, laptop cũ?</h2>
          <p className="text-sm sm:text-base mb-4 sm:mb-6 text-green-100">
            Liên hệ ngay để nhận báo giá cao nhất thị trường
          </p>
          <Link
            href="/#contact-form"
            className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-sm font-semibold text-green-700 transition-colors hover:bg-green-50"
          >
            Nhận báo giá ngay
          </Link>
        </div>
      </div>
    </div>
  )
}
