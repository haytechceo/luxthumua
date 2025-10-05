# SEO Verification Guide

## How to Verify Your SEO Improvements

### 1. Test Structured Data

#### Google Rich Results Test
1. Build and deploy your site
2. Visit: https://search.google.com/test/rich-results
3. Test these URLs:
   - `https://luxthumua.com` (Organization, LocalBusiness)
   - `https://luxthumua.com/thu-mua-dien-thoai` (Service, FAQ, Breadcrumb)
   - `https://luxthumua.com/thu-mua-laptop` (Service, Breadcrumb)

**Expected Results:**
- ✅ Organization schema detected
- ✅ LocalBusiness schema detected
- ✅ Service schema detected
- ✅ FAQPage schema detected
- ✅ BreadcrumbList schema detected

#### Schema Markup Validator
1. Visit: https://validator.schema.org/
2. Enter your page URL
3. Check for errors or warnings

### 2. Test Open Graph Tags

#### Facebook Sharing Debugger
1. Visit: https://developers.facebook.com/tools/debug/
2. Enter URL: `https://luxthumua.com`
3. Click "Scrape Again" to refresh cache

**Expected Results:**
- ✅ Image displays: `https://luxthumua.com/images/banner.jpg`
- ✅ Title: "LuxPhone - Thu mua điện thoại, laptop cũ giá cao"
- ✅ Description visible
- ✅ Domain: luxthumua.com

#### Twitter Card Validator
1. Visit: https://cards-dev.twitter.com/validator
2. Enter URL: `https://luxthumua.com`

**Expected Results:**
- ✅ Card type: "summary_large_image"
- ✅ Image displays correctly
- ✅ Title and description show

### 3. Test Sitemap & Robots.txt

#### Sitemap
1. Visit: `https://luxthumua.com/sitemap.xml`
2. Verify all URLs are present:
   - Homepage
   - /thu-mua-dien-thoai
   - /thu-mua-laptop
   - /lien-he
   - All /dich-vu/[slug] pages

**Check:**
- ✅ All URLs use `https://luxthumua.com` (not luxphone.vn)
- ✅ lastModified dates are present
- ✅ Priority values are set
- ✅ changeFrequency is defined

#### Robots.txt
1. Visit: `https://luxthumua.com/robots.txt`

**Expected Content:**
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /admin/

Sitemap: https://luxthumua.com/sitemap.xml
```

### 4. Google Search Console Setup

#### Add Property
1. Go to: https://search.google.com/search-console
2. Add property: `https://luxthumua.com`
3. Verify ownership using meta tag method

#### Update Verification Code
After verification, update `app/layout.tsx`:
```typescript
verification: {
  google: "YOUR_ACTUAL_CODE_HERE", // Replace this
}
```

#### Submit Sitemap
1. In Google Search Console
2. Go to: Sitemaps (left menu)
3. Add: `https://luxthumua.com/sitemap.xml`
4. Submit

**Monitor:**
- Coverage report (check for errors)
- Core Web Vitals
- Mobile usability

### 5. Test Canonical URLs

Use browser developer tools or view page source:

#### Homepage
```html
<link rel="canonical" href="https://luxthumua.com" />
```

#### Phone Page
```html
<link rel="canonical" href="https://luxthumua.com/thu-mua-dien-thoai" />
```

#### Laptop Page
```html
<link rel="canonical" href="https://luxthumua.com/thu-mua-laptop" />
```

**Verify:**
- ✅ All canonicals use `luxthumua.com` domain
- ✅ URLs are absolute (include https://)
- ✅ No duplicate canonical tags

### 6. Test PWA Manifest

1. Open site in Chrome
2. Open DevTools (F12)
3. Go to: Application → Manifest

**Expected:**
- ✅ Name: "LuxPhone - Thu mua điện thoại, laptop cũ"
- ✅ Short name: "LuxPhone"
- ✅ Icons: 3 entries (48x48, 192x192, 512x512)
- ✅ Theme color: #15803d
- ✅ No errors

### 7. Check Mobile-Friendliness

#### Google Mobile-Friendly Test
1. Visit: https://search.google.com/test/mobile-friendly
2. Enter: `https://luxthumua.com`

**Expected:**
- ✅ Page is mobile-friendly
- ✅ Text is readable
- ✅ Tap targets are sized appropriately

### 8. Test Page Speed

#### PageSpeed Insights
1. Visit: https://pagespeed.web.dev/
2. Analyze: `https://luxthumua.com`

**Monitor:**
- Performance score (aim for 90+)
- SEO score (aim for 100)
- Best Practices score
- Accessibility score

### 9. Verify Meta Tags in Browser

Right-click → View Page Source, check for:

```html
<!-- Base Meta -->
<meta name="description" content="Dịch vụ thu mua..." />
<meta name="keywords" content="thu mua điện thoại..." />

<!-- Open Graph -->
<meta property="og:type" content="website" />
<meta property="og:url" content="https://luxthumua.com" />
<meta property="og:title" content="..." />
<meta property="og:description" content="..." />
<meta property="og:image" content="https://luxthumua.com/images/banner.jpg" />

<!-- Twitter -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="..." />
<meta name="twitter:image" content="https://luxthumua.com/images/banner.jpg" />

<!-- Canonical -->
<link rel="canonical" href="https://luxthumua.com" />
```

### 10. Check Structured Data in Page Source

Look for `<script type="application/ld+json">` tags:

**Homepage should have:**
- Organization schema
- LocalBusiness schema

**Phone page should have:**
- BreadcrumbList schema
- FAQPage schema
- Service schema

**Laptop page should have:**
- BreadcrumbList schema
- Service schema

## Common Issues & Solutions

### Issue: Sitemap not loading
**Solution**: Make sure Next.js dev server is running or site is deployed. Static export won't work.

### Issue: OG images not showing
**Solution**: 
1. Verify image exists at `/public/images/banner.jpg`
2. Image should be 1200x630px for optimal display
3. Clear Facebook cache using Sharing Debugger

### Issue: Structured data errors
**Solution**:
1. Check for syntax errors in JSON-LD
2. Ensure all required properties are present
3. Use validator.schema.org to debug

### Issue: Multiple canonicals
**Solution**: Each page should have only ONE canonical tag. Check page source.

## Ongoing Monitoring

### Weekly
- [ ] Check Google Search Console for errors
- [ ] Monitor search rankings for key terms
- [ ] Review Core Web Vitals

### Monthly
- [ ] Update sitemap if adding new pages
- [ ] Check for broken links
- [ ] Review and update meta descriptions
- [ ] Analyze search traffic patterns

### Quarterly
- [ ] Audit all structured data
- [ ] Update FAQ schemas with new questions
- [ ] Review and optimize page titles
- [ ] Check competitor SEO strategies

## SEO Checklist Summary

- [ ] All URLs use consistent domain (luxthumua.com)
- [ ] Sitemap submitted to Google Search Console
- [ ] Google verification meta tag added
- [ ] Structured data validated
- [ ] OG images displaying correctly
- [ ] Canonical URLs on all pages
- [ ] PWA manifest properly configured
- [ ] Mobile-friendly test passed
- [ ] PageSpeed scores acceptable
- [ ] All pages indexed by Google

---

## Additional Resources

- [Google Search Central](https://developers.google.com/search)
- [Schema.org Documentation](https://schema.org/)
- [Next.js SEO Guide](https://nextjs.org/learn/seo/introduction-to-seo)
- [Web.dev SEO Guide](https://web.dev/lighthouse-seo/)

Good luck with your SEO optimization! 🚀
