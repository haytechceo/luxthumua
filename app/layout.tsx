import type React from "react"
import type { Metadata } from "next"
import { Roboto } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import Script from "next/script"
import "./globals.css"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { FloatingButtons } from "@/components/floating-buttons"
import { Toaster } from "@/components/ui/toaster"
import { StructuredData } from "@/components/structured-data"
import { getOrganizationSchema, getLocalBusinessSchema } from "@/lib/structured-data"
import { siteConfig } from "@/data/site"
import { Suspense } from "react"

const roboto = Roboto({
  subsets: ["latin", "vietnamese"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-roboto",
  display: "swap",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://luxthumua.com"),
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "thu mua điện thoại",
    "thu mua laptop",
    "thu mua iPhone",
    "thu mua Samsung",
    "thu mua Macbook",
    "bán điện thoại cũ",
    "bán laptop cũ",
    "thu mua điện thoại giá cao",
    "thu mua laptop giá cao",
    "thu mua điện thoại Hà Nội",
    "thu mua laptop TP.HCM",
  ],
  authors: [{ name: siteConfig.name }],
  creator: siteConfig.name,
  publisher: siteConfig.name,
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "https://luxthumua.com",
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [
      {
        url: "https://luxthumua.com/images/banner.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.name,
    description: siteConfig.description,
    images: ["https://luxthumua.com/images/banner.jpg"],
  },
  verification: {
    google: "your-google-verification-code", // TODO: Replace with actual Google Search Console verification code
  },
  alternates: {
    canonical: "https://luxthumua.com",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/logo.png" />
      </head>
      <body className={`${roboto.variable} antialiased`}>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9FY6RLJ9YB" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9FY6RLJ9YB');
          `}
        </Script>
        <Suspense fallback={<div>Loading...</div>}>
          <StructuredData data={getOrganizationSchema()} />
          <StructuredData data={getLocalBusinessSchema()} />
          <Header />
          <main className="min-h-screen">{children}</main>
          <Footer />
          <FloatingButtons />
          <Toaster />
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
