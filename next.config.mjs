/** @type {import('next').NextConfig} */
const nextConfig = {
  // Removed 'output: export' to support dynamic routes (robots.ts, sitemap.ts)
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
