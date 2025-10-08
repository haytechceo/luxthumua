import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Breadcrumbs } from "@/components/breadcrumbs"
import { ContactForm } from "@/components/contact-form"
import { StructuredData } from "@/components/structured-data"
import { getBreadcrumbSchema, getArticleSchema } from "@/lib/structured-data"
import newsData from "@/data/news.json"
import { Calendar, User, Tag, Clock, ArrowLeft, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return newsData.articles.map((article) => ({
    slug: article.slug,
  }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const article = newsData.articles.find((a) => a.slug === slug)

  if (!article) {
    return {
      title: "Bài viết không tồn tại",
    }
  }

  return {
    title: `${article.title} | LuxPhone`,
    description: article.description,
    keywords: article.tags,
    openGraph: {
      title: article.title,
      description: article.description,
      url: `https://luxthumua.com/tin-tuc/${article.slug}`,
      images: [article.image],
      type: "article",
      publishedTime: article.publishDate,
      authors: [article.author],
    },
    alternates: {
      canonical: `https://luxthumua.com/tin-tuc/${article.slug}`,
    },
  }
}

export default async function ArticlePage({ params }: PageProps) {
  const { slug } = await params
  const article = newsData.articles.find((a) => a.slug === slug)

  if (!article) {
    notFound()
  }

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Trang chủ", url: "https://luxthumua.com" },
    { name: "Tin tức", url: "https://luxthumua.com/tin-tuc" },
    { name: article.title, url: `https://luxthumua.com/tin-tuc/${article.slug}` },
  ])

  const articleSchema = getArticleSchema({
    title: article.title,
    description: article.description,
    image: article.image,
    slug: `tin-tuc/${article.slug}`,
    publishDate: article.publishDate,
    author: article.author,
  })

  const otherArticles = newsData.articles.filter((a) => a.slug !== slug).slice(0, 3)

  // Simple markdown to HTML conversion
  const renderContent = (content: string) => {
    // Split by paragraphs
    const lines = content.split("\n")
    let html = ""
    let inList = false

    for (let line of lines) {
      line = line.trim()
      if (!line) continue

      // Headers
      if (line.startsWith("## ")) {
        if (inList) {
          html += "</ul>"
          inList = false
        }
        const match = line.match(/^## (.+?) \{#(.+?)\}/)
        if (match) {
          html += `<h2 id="${match[2]}" class="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-foreground scroll-mt-24">${match[1]}</h2>`
        } else {
          html += `<h2 class="text-2xl sm:text-3xl font-bold mt-8 mb-4 text-foreground">${line.substring(3)}</h2>`
        }
      } else if (line.startsWith("### ")) {
        if (inList) {
          html += "</ul>"
          inList = false
        }
        const match = line.match(/^### (.+?) \{#(.+?)\}/)
        if (match) {
          html += `<h3 id="${match[2]}" class="text-xl sm:text-2xl font-bold mt-6 mb-3 text-foreground scroll-mt-24">${match[1]}</h3>`
        } else {
          html += `<h3 class="text-xl sm:text-2xl font-bold mt-6 mb-3 text-foreground">${line.substring(4)}</h3>`
        }
      } else if (line.startsWith("#### ")) {
        if (inList) {
          html += "</ul>"
          inList = false
        }
        html += `<h4 class="text-lg sm:text-xl font-bold mt-4 mb-2 text-foreground">${line.substring(5)}</h4>`
      }
      // Table
      else if (line.startsWith("|")) {
        if (inList) {
          html += "</ul>"
          inList = false
        }
        if (!html.includes("<table")) {
          html += '<div class="overflow-x-auto my-6"><table class="w-full border-collapse"><tbody>'
        }
        const cells = line
          .split("|")
          .map((c) => c.trim())
          .filter((c) => c)
        if (cells[0].includes("---")) continue // Skip separator line
        const isHeader = cells.some((c) => c.includes("**"))
        const tag = isHeader ? "th" : "td"
        const className = isHeader
          ? "border border-border p-3 text-left font-semibold bg-muted"
          : "border border-border p-3"
        html += `<tr>${cells.map((c) => `<${tag} class="${className}">${c.replace(/\*\*/g, "")}</${tag}>`).join("")}</tr>`
      }
      // Lists
      else if (line.startsWith("- ") || line.startsWith("* ")) {
        if (html.includes("<table") && !html.includes("</table>")) {
          html += "</tbody></table></div>"
        }
        if (!inList) {
          html += '<ul class="list-disc list-inside space-y-2 my-4 text-muted-foreground">'
          inList = true
        }
        let content = line.substring(2)
        content = content.replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground">$1</strong>')
        content = content.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-green-700 hover:underline">$1</a>')
        html += `<li>${content}</li>`
      }
      // Blockquote
      else if (line.startsWith("> ")) {
        if (inList) {
          html += "</ul>"
          inList = false
        }
        if (html.includes("<table") && !html.includes("</table>")) {
          html += "</tbody></table></div>"
        }
        let content = line.substring(2)
        content = content.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
        html += `<blockquote class="border-l-4 border-green-700 pl-4 italic my-4 text-muted-foreground">${content}</blockquote>`
      }
      // Horizontal rule
      else if (line === "---") {
        if (inList) {
          html += "</ul>"
          inList = false
        }
        if (html.includes("<table") && !html.includes("</table>")) {
          html += "</tbody></table></div>"
        }
        html += '<hr class="my-8 border-border" />'
      }
      // Regular paragraph
      else {
        if (inList) {
          html += "</ul>"
          inList = false
        }
        if (html.includes("<table") && !html.includes("</table>")) {
          html += "</tbody></table></div>"
        }
        let content = line
        content = content.replace(/\*\*(.+?)\*\*/g, '<strong class="text-foreground font-semibold">$1</strong>')
        content = content.replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" class="text-green-700 hover:underline">$1</a>')
        html += `<p class="mb-4 text-muted-foreground leading-relaxed">${content}</p>`
      }
    }

    if (inList) {
      html += "</ul>"
    }
    if (html.includes("<table") && !html.includes("</table>")) {
      html += "</tbody></table></div>"
    }

    return html
  }

  return (
    <div className="flex flex-col">
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={articleSchema} />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        <Breadcrumbs items={[{ label: "Tin tức", href: "/tin-tuc" }, { label: article.title }]} />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-6">
          {/* Main Content */}
          <article className="lg:col-span-2">
            {/* Back Button */}
            <Link
              href="/tin-tuc"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-green-700 mb-6 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Quay lại tin tức
            </Link>

            {/* Article Header */}
            <div className="mb-6">
              <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-foreground">{article.title}</h1>
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <time dateTime={article.publishDate}>
                    {new Date(article.publishDate).toLocaleDateString("vi-VN", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <User className="h-4 w-4" />
                  <span>{article.author}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {article.tags.map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-xs text-muted-foreground"
                  >
                    <Tag className="h-3 w-3" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Featured Image */}
            <div className="relative aspect-video mb-8 rounded-lg overflow-hidden bg-muted">
              <Image
                src={article.image}
                alt={article.title}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 66vw"
                priority
              />
            </div>

            {/* Article Content */}
            <div
              className="prose prose-slate max-w-none"
              dangerouslySetInnerHTML={{ __html: renderContent(article.content) }}
            />

            {/* Share Buttons */}
            <div className="mt-8 pt-8 border-t border-border">
              <p className="text-sm text-muted-foreground mb-3">Chia sẻ bài viết:</p>
              <div className="flex gap-3">
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={`https://www.facebook.com/sharer/sharer.php?u=https://luxthumua.com/tin-tuc/${article.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Facebook
                  </a>
                </Button>
                <Button size="sm" variant="outline" asChild>
                  <a
                    href={`https://zalo.me/share?url=https://luxthumua.com/tin-tuc/${article.slug}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Share2 className="h-4 w-4 mr-2" />
                    Zalo
                  </a>
                </Button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <div className="lg:sticky lg:top-24 space-y-6">
              {/* Table of Contents */}
              {article.toc && article.toc.length > 0 && (
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-semibold text-lg mb-4">Nội dung bài viết</h3>
                  <nav>
                    <ul className="space-y-2 text-sm">
                      {article.toc.map((item) => (
                        <li key={item.id}>
                          <a
                            href={`#${item.id}`}
                            className="text-muted-foreground hover:text-green-700 transition-colors"
                          >
                            {item.title}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              )}

              {/* Contact Form */}
              <div className="rounded-lg border border-border bg-card p-6">
                <h3 className="font-semibold text-lg mb-4">Nhận báo giá ngay</h3>
                <ContactForm />
              </div>

              {/* Contact Info */}
              <div className="rounded-lg bg-green-700 p-6 text-white">
                <h3 className="font-semibold text-lg mb-4">Liên hệ trực tiếp</h3>
                <div className="space-y-3 text-sm">
                  <p>📞 Hotline: 0328488888</p>
                  <p>📧 Email: luxphonemobile@gmail.com</p>
                  <p>🕒 Giờ làm việc: 8:00 - 21:00</p>
                </div>
              </div>

              {/* Related Articles */}
              {otherArticles.length > 0 && (
                <div className="rounded-lg border border-border bg-card p-6">
                  <h3 className="font-semibold text-lg mb-4">Bài viết khác</h3>
                  <div className="space-y-4">
                    {otherArticles.map((otherArticle) => (
                      <Link
                        key={otherArticle.slug}
                        href={`/tin-tuc/${otherArticle.slug}`}
                        className="block group"
                      >
                        <h4 className="text-sm font-medium line-clamp-2 group-hover:text-green-700 transition-colors">
                          {otherArticle.title}
                        </h4>
                        <p className="text-xs text-muted-foreground mt-1">
                          {new Date(otherArticle.publishDate).toLocaleDateString("vi-VN")}
                        </p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  )
}
