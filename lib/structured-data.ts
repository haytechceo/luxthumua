import { siteConfig } from "@/data/site"

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    description: siteConfig.description,
    url: "https://luxthumua.com",
    logo: "https://luxthumua.com/logo.png",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: siteConfig.addresses.map((addr) => ({
      "@type": "PostalAddress",
      streetAddress: addr.address,
      addressLocality: addr.address.includes("Hà Nội") ? "Hà Nội" : "Hồ Chí Minh",
      addressCountry: "VN",
    })),
    contactPoint: {
      "@type": "ContactPoint",
      telephone: siteConfig.phone,
      contactType: "customer service",
      areaServed: "VN",
      availableLanguage: ["vi"],
    },
    sameAs: [
      siteConfig.zalo,
      siteConfig.messenger,
    ],
  }
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    description: siteConfig.description,
    url: "https://luxthumua.com",
    telephone: siteConfig.phone,
    email: siteConfig.email,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.addresses[0].address,
      addressLocality: "Hà Nội",
      addressCountry: "VN",
    },
    openingHours: "Mo-Su 08:00-21:00",
    priceRange: "$$",
    image: "https://luxthumua.com/images/banner.jpg",
  }
}

export function getArticleSchema(article: {
  title: string
  description: string
  image: string
  slug: string
  datePublished?: string
  publishDate?: string
  author?: string
}) {
  const publishDate = article.publishDate || article.datePublished || new Date().toISOString()
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `https://luxthumua.com${article.image}`,
    author: {
      "@type": "Organization",
      name: article.author || siteConfig.name,
    },
    publisher: {
      "@type": "Organization",
      name: siteConfig.name,
      logo: {
        "@type": "ImageObject",
        url: "https://luxthumua.com/logo.png",
      },
    },
    datePublished: publishDate,
    dateModified: publishDate,
  }
}

export function getBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

export function getFAQSchema(faqs: Array<{ question: string; answer: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

export function getServiceSchema(service: {
  name: string
  description: string
  url: string
  priceRange?: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: service.name,
    provider: {
      "@type": "Organization",
      name: siteConfig.name,
    },
    areaServed: {
      "@type": "Country",
      name: "Vietnam",
    },
    description: service.description,
    url: service.url,
    ...(service.priceRange && { priceRange: service.priceRange }),
  }
}
