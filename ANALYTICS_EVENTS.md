# Google Analytics Events Tracking

## Tổng quan
Dự án đã được tích hợp Google Analytics event tracking để theo dõi hành vi người dùng. Tracking ID: `G-9FY6RLJ9YB`

## Các sự kiện được theo dõi

### 1. Contact Events (Liên hệ)
**Category:** `contact`

| Event Action | Component | Mô tả |
|--------------|-----------|-------|
| `submit` | ContactForm | Khi người dùng submit form liên hệ (bao gồm tên thiết bị) |
| `call` | Header, Footer, FloatingButtons | Khi click vào số điện thoại |
| `message` | FloatingButtons, Footer | Khi click vào nút Zalo/Messenger |

**Event Labels:**
- Form submit: `Contact Form - {device_name}`
- Phone click: Số điện thoại được click
- Floating button: `Floating phone`, `Floating zalo`, `Floating messenger`

### 2. Service Events (Dịch vụ)
**Category:** `service`

| Event Action | Component | Mô tả |
|--------------|-----------|-------|
| `click` | ServiceCard | Khi click vào card dịch vụ |

**Event Labels:** Tên dịch vụ được click (vd: "Thu mua laptop gaming")

### 3. Navigation Events (Điều hướng)
**Category:** `navigation`

| Event Action | Component | Mô tả |
|--------------|-----------|-------|
| `click` | Header, Footer | Khi click vào các link menu |

**Event Labels:**
- Header: Tên menu item (vd: "Trang chủ", "Liên hệ", "Thu mua Macbook")
- Footer: `Footer - {service_name}` hoặc `Footer - Liên hệ`

### 4. Engagement Events (Tương tác)
**Category:** `engagement`

| Event Action | Component | Mô tả |
|--------------|-----------|-------|
| `click` | BannerSlider | Khi click vào banner (nếu được thêm) |
| `click` | Social Links | Khi click vào social media links |

## File cấu trúc

```
lib/
  └── analytics.ts          # Utility functions cho tracking
components/
  ├── contact-form.tsx      # Form tracking
  ├── floating-buttons.tsx  # Floating buttons tracking
  ├── header.tsx            # Navigation tracking
  ├── footer.tsx            # Footer links tracking
  └── service-card.tsx      # Service card tracking
```

## Cách sử dụng

### Import tracking function
```typescript
import { trackEvent, trackFormSubmit, trackPhoneClick } from '@/lib/analytics'
```

### Tracking một event tùy chỉnh
```typescript
trackEvent(
  'click',           // action
  'custom',          // category
  'Button Name',     // label (optional)
  100                // value (optional)
)
```

### Tracking form submit
```typescript
trackFormSubmit('Form Name')
```

### Tracking phone click
```typescript
trackPhoneClick('0328488888')
```

## Kiểm tra events

### Trong môi trường development
1. Mở Developer Console (F12)
2. Vào tab **Network**
3. Filter theo `google-analytics` hoặc `gtag`
4. Click vào các elements để xem events được gửi

### Trong Google Analytics
1. Vào Google Analytics Dashboard
2. Chọn **Reports** > **Engagement** > **Events**
3. Xem danh sách events theo:
   - Event name
   - Event count
   - Total users
   - Event parameter values

## Events được track

### Contact Flow
- ✅ Form submission với tên thiết bị
- ✅ Phone clicks từ header, footer, floating buttons
- ✅ Zalo/Messenger clicks từ floating buttons và footer

### Navigation Flow
- ✅ Menu clicks (desktop & mobile)
- ✅ Service dropdown clicks
- ✅ Footer service links

### Service Flow
- ✅ Service card clicks

## Lưu ý
- Events chỉ được gửi đi khi có internet connection
- Events sẽ không hiển thị ngay lập tức trong GA (delay 24-48h cho real-time reports)
- Sử dụng GA4 Debug Mode để test real-time events
