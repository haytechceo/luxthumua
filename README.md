# LuxPhone - Website Thu Mua Điện Thoại & Laptop

Website tĩnh Next.js cho dịch vụ thu mua điện thoại, laptop cũ. Tối ưu SEO, responsive, dễ tùy biến.

## Cài đặt

\`\`\`bash
npm install
npm run dev
\`\`\`

Mở [http://localhost:3000](http://localhost:3000) để xem website.

## Build tĩnh

\`\`\`bash
npm run build
\`\`\`

Website sẽ được export ra thư mục `out/` và có thể deploy lên bất kỳ hosting nào.

## Tùy biến nội dung

### 1. Thông tin liên hệ

Mở file `data/site.ts` và chỉnh sửa:

\`\`\`typescript
export const siteConfig = {
  name: "LuxPhone", // Tên thương hiệu
  phone: "0328488888", // Số điện thoại
  email: "luxphonemobile@gmail.com", // Email
  zalo: "https://zalo.me/0328488888", // Link Zalo
  messenger: "https://m.me/luxphone.vn", // Link Messenger
  address: "123 Đường Láng, Đống Đa, Hà Nội", // Địa chỉ
  workingHours: "Thứ 2 - Chủ nhật: 8:00 - 21:00", // Giờ làm việc
}
\`\`\`

### 2. Dịch vụ

Chỉnh sửa file `data/services.ts` để thay đổi các dịch vụ hiển thị trên trang chủ.

### 3. Bài viết chi tiết

Chỉnh sửa file `data/posts.ts` để thay đổi nội dung các trang dịch vụ chi tiết.

### 4. Hình ảnh

Thay thế các file ảnh trong thư mục `public/images/`:
- `banner.jpg` - Ảnh banner trang chủ
- `services/*.jpg` - Ảnh dịch vụ
- `posts/*.jpg` - Ảnh bài viết chi tiết

### 5. Màu sắc

Chỉnh sửa file `app/globals.css` để thay đổi màu chủ đạo:
- `--primary` - Màu chính (mặc định: xanh lá đậm)
- `--accent` - Màu nhấn (mặc định: vàng)

## Cấu trúc thư mục

\`\`\`
├── app/                    # Pages (App Router)
│   ├── page.tsx           # Trang chủ
│   ├── thu-mua-dien-thoai/
│   ├── thu-mua-laptop/
│   ├── lien-he/
│   └── dich-vu/
├── components/            # Components
│   ├── header.tsx
│   ├── footer.tsx
│   ├── floating-buttons.tsx
│   └── ui/               # shadcn/ui components
├── data/                 # Dữ liệu tĩnh
│   ├── site.ts
│   ├── services.ts
│   └── posts.ts
└── public/
    └── images/           # Hình ảnh
\`\`\`

## SEO

Website đã được tối ưu SEO với:
- Metadata cho mỗi trang
- Structured Data (JSON-LD)
- Sitemap.xml
- Robots.txt
- Open Graph & Twitter Card

## Hỗ trợ

Nếu cần hỗ trợ, vui lòng liên hệ qua email hoặc tạo issue trên GitHub.
