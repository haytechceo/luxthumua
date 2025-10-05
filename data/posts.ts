export interface Post {
  slug: string
  title: string
  description: string
  image: string
  content: string
  toc: { id: string; title: string }[]
}

export const posts: Post[] = [
  {
    slug: "thu-mua-may-tinh-cu",
    title: "Dịch vụ thu mua máy tính cũ giá cao tại Hà Nội",
    description: "Thu mua máy tính để bàn cũ mọi cấu hình, mọi tình trạng. Định giá minh bạch, thanh toán nhanh chóng.",
    image: "/images/posts/may-tinh-detail.jpg",
    toc: [
      { id: "gioi-thieu", title: "Giới thiệu dịch vụ" },
      { id: "quy-trinh", title: "Quy trình thu mua" },
      { id: "bang-gia", title: "Bảng giá tham khảo" },
      { id: "lien-he", title: "Liên hệ ngay" },
    ],
    content: `
## Giới thiệu dịch vụ {#gioi-thieu}

LuxPhone chuyên cung cấp dịch vụ **thu mua máy tính cũ** tại Hà Nội và TP.HCM với giá cao nhất thị trường. Chúng tôi nhận thu mua mọi loại máy tính để bàn, từ cấu hình văn phòng đến máy gaming cao cấp, dù máy còn hoạt động tốt hay đã hỏng hóc.

Với hơn 10 năm kinh nghiệm, đội ngũ kỹ thuật viên chuyên nghiệp của chúng tôi sẽ định giá chính xác và công bằng nhất cho thiết bị của bạn. Quy trình thu mua nhanh chóng, minh bạch, thanh toán ngay sau khi thỏa thuận.

### Tại sao nên bán máy tính cũ cho LuxPhone?

- **Giá cao nhất**: So sánh giá với nhiều đơn vị, cam kết mua với giá tốt nhất
- **Thu mua tận nơi**: Nhân viên đến tận nhà/văn phòng, không mất phí
- **Thanh toán ngay**: Chuyển khoản hoặc tiền mặt ngay khi thỏa thuận
- **Bảo mật dữ liệu**: Xóa sạch dữ liệu cá nhân trên ổ cứng

## Quy trình thu mua máy tính cũ {#quy-trinh}

### Bước 1: Liên hệ và tư vấn

Khách hàng liên hệ qua hotline **0328488888**, Zalo hoặc Messenger để cung cấp thông tin về máy tính cần bán (cấu hình, tình trạng, năm sản xuất). Chúng tôi sẽ báo giá sơ bộ qua điện thoại.

### Bước 2: Kiểm tra và định giá

Nếu khách hàng đồng ý giá sơ bộ, nhân viên sẽ đến tận nơi để kiểm tra máy trực tiếp. Chúng tôi kiểm tra:
- Cấu hình phần cứng (CPU, RAM, ổ cứng, card đồ họa)
- Tình trạng vỏ máy, màn hình
- Khả năng hoạt động của các linh kiện

### Bước 3: Thỏa thuận và thanh toán

Sau khi kiểm tra, chúng tôi đưa ra mức giá chính thức. Nếu khách hàng đồng ý, chúng tôi tiến hành:
- Ký hợp đồng mua bán (nếu cần)
- Xóa dữ liệu trên ổ cứng
- Thanh toán ngay bằng tiền mặt hoặc chuyển khoản

Toàn bộ quy trình chỉ mất khoảng 30 phút.

## Bảng giá thu mua máy tính cũ tham khảo {#bang-gia}

Dưới đây là bảng giá tham khảo cho một số cấu hình phổ biến (giá có thể thay đổi tùy tình trạng máy):

| Cấu hình | Giá thu mua (VNĐ) |
|----------|-------------------|
| Core i3, RAM 4GB, HDD 500GB | 2.000.000 - 3.500.000 |
| Core i5, RAM 8GB, SSD 256GB | 4.000.000 - 6.500.000 |
| Core i7, RAM 16GB, SSD 512GB | 7.000.000 - 10.000.000 |
| Gaming PC (GTX 1660, i5, 16GB) | 10.000.000 - 15.000.000 |
| Workstation (Xeon, 32GB, Quadro) | 15.000.000 - 25.000.000 |

*Lưu ý: Giá trên chỉ mang tính chất tham khảo. Giá thực tế phụ thuộc vào tình trạng máy, năm sản xuất và thị trường.*

## Liên hệ ngay để nhận báo giá {#lien-he}

Bạn đang có máy tính cũ muốn bán? Hãy liên hệ ngay với LuxPhone để được tư vấn và báo giá miễn phí:

- **Hotline**: 0328488888
- **Zalo**: [Chat ngay](https://zalo.me/0328488888)
- **Messenger**: [Nhắn tin](https://m.me/luxphone.vn)
- **Email**: contact@luxphone.vn

Chúng tôi cam kết mang đến dịch vụ thu mua máy tính cũ uy tín, giá cao, thanh toán nhanh chóng nhất tại Hà Nội và TP.HCM.
    `,
  },
  {
    slug: "thu-mua-laptop-cu",
    title: "Thu mua laptop cũ giá cao - Mọi hãng, mọi tình trạng",
    description:
      "Dịch vụ thu mua laptop cũ uy tín tại Hà Nội. Thu mua laptop Dell, HP, Asus, Lenovo, Macbook... Định giá minh bạch, thu mua tận nơi.",
    image: "/images/posts/laptop-detail.jpg",
    toc: [
      { id: "gioi-thieu", title: "Giới thiệu" },
      { id: "thuong-hieu", title: "Thương hiệu thu mua" },
      { id: "dau-hieu", title: "Dấu hiệu nên bán laptop" },
      { id: "quy-trinh", title: "Quy trình thu mua" },
    ],
    content: `
## Dịch vụ thu mua laptop cũ chuyên nghiệp {#gioi-thieu}

LuxPhone là đơn vị hàng đầu trong lĩnh vực **thu mua laptop cũ** tại Hà Nội và TP.HCM. Chúng tôi nhận thu mua mọi thương hiệu laptop từ phổ thông đến cao cấp, dù máy còn hoạt động tốt hay đã hỏng hóc.

Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi cam kết định giá công bằng, minh bạch dựa trên tình trạng thực tế của máy. Quy trình thu mua nhanh chóng, thanh toán ngay, hỗ trợ thu mua tận nơi miễn phí.

### Ưu điểm khi bán laptop cho LuxPhone

- Thu mua mọi thương hiệu: Dell, HP, Asus, Lenovo, Acer, MSI, Macbook...
- Nhận cả laptop hỏng: màn hình vỡ, pin chai, bàn phím lỗi...
- Định giá chính xác dựa trên cấu hình và tình trạng
- Thu mua tận nhà/văn phòng, không mất phí
- Thanh toán ngay bằng tiền mặt hoặc chuyển khoản
- Bảo mật dữ liệu: xóa sạch thông tin cá nhân

## Các thương hiệu laptop chúng tôi thu mua {#thuong-hieu}

### Laptop Dell

Thu mua các dòng Dell Inspiron, Latitude, XPS, Precision, Alienware... Đặc biệt quan tâm đến các dòng laptop Dell doanh nghiệp với độ bền cao.

### Laptop HP

Nhận thu mua HP Pavilion, Envy, EliteBook, ProBook, Omen... Giá thu mua cạnh tranh cho cả laptop văn phòng và gaming.

### Laptop Asus

Thu mua Asus VivoBook, ZenBook, ROG, TUF Gaming... Đặc biệt ưu tiên các dòng laptop gaming và workstation.

### Laptop Lenovo

Nhận mua ThinkPad, IdeaPad, Legion, Yoga... ThinkPad được đánh giá cao về độ bền và giá thu mua tốt.

### Macbook (Apple)

Thu mua Macbook Air, Macbook Pro các đời từ 2015 đến nay. Giá thu mua Macbook luôn cao hơn thị trường 10-15%.

### Các thương hiệu khác

Acer, MSI, Razer, LG, Microsoft Surface, Gigabyte... Mọi thương hiệu đều được chúng tôi quan tâm và định giá công bằng.

## Dấu hiệu bạn nên bán laptop cũ {#dau-hieu}

### 1. Laptop chạy chậm, không đáp ứng nhu cầu

Nếu laptop của bạn khởi động lâu, mở ứng dụng chậm, không đủ sức chạy phần mềm mới, đó là lúc nên nâng cấp. Thay vì để máy cũ nằm không, hãy bán cho chúng tôi để có thêm ngân sách mua máy mới.

### 2. Pin chai, phải cắm sạc liên tục

Pin laptop thường có tuổi thọ 2-3 năm. Nếu pin đã chai, máy chỉ hoạt động khi cắm sạc, việc thay pin tốn kém không bằng bán máy cũ và mua máy mới.

### 3. Màn hình bị vỡ, lỗi hiển thị

Chi phí thay màn hình laptop thường rất cao (3-5 triệu đồng). Nếu máy đã cũ, bạn nên cân nhắc bán máy cho chúng tôi (dù màn hình vỡ) và mua máy mới.

### 4. Muốn nâng cấp lên laptop mới

Công nghệ phát triển nhanh, laptop mới có hiệu năng tốt hơn, pin trâu hơn, thiết kế đẹp hơn. Bán laptop cũ sớm giúp bạn có giá tốt hơn (máy càng cũ giá càng giảm).

### 5. Không còn sử dụng

Nhiều người có 2-3 chiếc laptop nhưng chỉ dùng 1 chiếc. Thay vì để máy cũ nằm không, hãy bán để thu hồi vốn.

## Quy trình thu mua laptop tận nhà {#quy-trinh}

### Bước 1: Liên hệ và cung cấp thông tin

Gọi hotline **0328488888** hoặc nhắn tin qua Zalo/Messenger. Cung cấp thông tin:
- Thương hiệu và model laptop (VD: Dell Inspiron 15 3000)
- Cấu hình (CPU, RAM, ổ cứng)
- Tình trạng máy (còn hoạt động tốt, có lỗi gì không)
- Năm mua, thời gian sử dụng

Chúng tôi sẽ báo giá sơ bộ qua điện thoại.

### Bước 2: Hẹn lịch kiểm tra tận nơi

Nếu bạn đồng ý giá sơ bộ, chúng tôi sẽ hẹn lịch đến tận nhà/văn phòng để kiểm tra máy. Nhân viên sẽ:
- Kiểm tra cấu hình thực tế
- Test màn hình, bàn phím, touchpad
- Kiểm tra pin, sạc
- Đánh giá tình trạng vỏ máy

### Bước 3: Định giá và thanh toán

Sau khi kiểm tra, chúng tôi đưa ra mức giá chính thức. Nếu bạn đồng ý:
- Ký biên nhận (nếu cần)
- Xóa dữ liệu trên laptop
- Thanh toán ngay bằng tiền mặt hoặc chuyển khoản

Toàn bộ quy trình chỉ mất 20-30 phút. Nhanh chóng, tiện lợi, không mất phí.

---

**Liên hệ ngay**: 0328488888 | [Zalo](https://zalo.me/0328488888) | [Messenger](https://m.me/luxphone.vn)
    `,
  },
  {
    slug: "thu-mua-dien-thoai-cu",
    title: "Thu mua điện thoại cũ giá cao - iPhone, Samsung, Oppo...",
    description:
      "Dịch vụ thu mua điện thoại cũ uy tín tại Hà Nội và TP.HCM. Thu mua iPhone, Samsung, Oppo, Xiaomi... Giá cao, thanh toán nhanh.",
    image: "/images/posts/dien-thoai-detail.jpg",
    toc: [
      { id: "gioi-thieu", title: "Giới thiệu" },
      { id: "bang-gia", title: "Bảng giá tham khảo" },
      { id: "quy-trinh", title: "Quy trình thu mua" },
      { id: "faq", title: "Câu hỏi thường gặp" },
    ],
    content: `
## Thu mua điện thoại cũ giá cao nhất thị trường {#gioi-thieu}

LuxPhone chuyên **thu mua điện thoại cũ** tại Hà Nội và TP.HCM với giá cao nhất thị trường. Chúng tôi nhận thu mua mọi loại điện thoại từ phổ thông đến cao cấp, mọi thương hiệu: iPhone, Samsung, Oppo, Xiaomi, Vivo, Realme, Huawei...

Dù điện thoại của bạn còn mới 99%, hay đã cũ, màn hình vỡ, nguồn hỏng, chúng tôi đều nhận thu mua với giá hợp lý nhất. Quy trình nhanh chóng, minh bạch, thanh toán ngay.

### Tại sao nên bán điện thoại cũ cho LuxPhone?

- **Giá cao nhất**: So sánh với nhiều nơi, chúng tôi luôn mua với giá tốt nhất
- **Thu mua mọi tình trạng**: Máy đẹp, máy cũ, máy hỏng đều nhận
- **Thanh toán ngay**: Tiền mặt hoặc chuyển khoản ngay sau khi thỏa thuận
- **Thu mua tận nơi**: Nhân viên đến tận nhà, tiết kiệm thời gian
- **Bảo mật dữ liệu**: Xóa sạch dữ liệu cá nhân trên máy
- **Hỗ trợ 24/7**: Luôn sẵn sàng tư vấn qua hotline, Zalo, Messenger

## Bảng giá thu mua điện thoại tham khảo {#bang-gia}

### iPhone

| Model | Giá thu mua (VNĐ) |
|-------|-------------------|
| iPhone 11 (64GB) | 6.000.000 - 8.000.000 |
| iPhone 12 (64GB) | 9.000.000 - 11.000.000 |
| iPhone 13 (128GB) | 12.000.000 - 15.000.000 |
| iPhone 14 (128GB) | 15.000.000 - 18.000.000 |
| iPhone 15 (128GB) | 18.000.000 - 22.000.000 |
| iPhone 15 Pro Max (256GB) | 26.000.000 - 30.000.000 |

### Samsung

| Model | Giá thu mua (VNĐ) |
|-------|-------------------|
| Galaxy S21 | 7.000.000 - 9.000.000 |
| Galaxy S22 | 10.000.000 - 13.000.000 |
| Galaxy S23 | 13.000.000 - 16.000.000 |
| Galaxy S24 Ultra | 22.000.000 - 26.000.000 |
| Galaxy Z Fold 5 | 25.000.000 - 30.000.000 |

### Oppo, Xiaomi, Vivo

| Model | Giá thu mua (VNĐ) |
|-------|-------------------|
| Oppo Reno 8 | 4.000.000 - 6.000.000 |
| Xiaomi 13 | 7.000.000 - 9.000.000 |
| Vivo V27 | 5.000.000 - 7.000.000 |

*Lưu ý: Giá trên chỉ mang tính chất tham khảo. Giá thực tế phụ thuộc vào dung lượng, màu sắc, tình trạng máy và thời điểm thu mua.*

## Quy trình thu mua điện thoại nhanh chóng {#quy-trinh}

### Bước 1: Liên hệ và báo giá sơ bộ

Liên hệ qua hotline **0328488888**, Zalo hoặc Messenger. Cung cấp thông tin:
- Model điện thoại (VD: iPhone 14 Pro 256GB)
- Tình trạng máy (còn đẹp, có trầy xước, màn hình vỡ...)
- Phụ kiện kèm theo (hộp, sạc, cáp...)

Chúng tôi sẽ báo giá sơ bộ ngay qua điện thoại.

### Bước 2: Kiểm tra máy

Nếu bạn đồng ý giá sơ bộ, có 2 cách:
- **Đến cửa hàng**: Mang máy đến địa chỉ 123 Đường Láng, Đống Đa, Hà Nội
- **Thu mua tận nhà**: Nhân viên đến tận nơi (miễn phí trong nội thành)

Chúng tôi sẽ kiểm tra:
- Màn hình (cảm ứng, hiển thị, vết nứt)
- Camera trước/sau
- Loa, micro, nút nguồn, nút âm lượng
- Pin (dung lượng pin, sức khỏe pin)
- Face ID / Touch ID (nếu có)
- Kiểm tra iCloud, tài khoản Google

### Bước 3: Thỏa thuận giá và thanh toán

Sau khi kiểm tra, chúng tôi đưa ra mức giá chính thức. Nếu bạn đồng ý:
- Xóa dữ liệu trên máy (ảnh, video, danh bạ...)
- Đăng xuất iCloud / tài khoản Google
- Ký biên nhận (nếu cần)
- Thanh toán ngay bằng tiền mặt hoặc chuyển khoản

Toàn bộ quy trình chỉ mất 15-20 phút.

## Câu hỏi thường gặp (FAQ) {#faq}

### 1. Điện thoại màn hình vỡ có thu mua không?

**Có.** Chúng tôi nhận thu mua điện thoại màn hình vỡ, tuy nhiên giá sẽ thấp hơn máy nguyên zin. Tùy mức độ vỡ (vỡ nhẹ, vỡ nặng, cảm ứng còn hoạt động hay không) mà giá sẽ khác nhau.

### 2. Máy hỏng nguồn, không lên màn hình có mua không?

**Có.** Chúng tôi vẫn thu mua máy hỏng nguồn, hỏng main. Giá sẽ tính theo linh kiện còn sử dụng được (màn hình, camera, pin...).

### 3. Cần mang theo giấy tờ gì khi bán điện thoại?

Bạn cần mang theo **CMND/CCCD** để xác nhận danh tính. Nếu có hóa đơn mua máy, hộp máy, phụ kiện thì càng tốt (giá sẽ cao hơn).

### 4. Bán điện thoại có bị mất dữ liệu không?

Trước khi bán, bạn nên **sao lưu dữ liệu** (ảnh, video, danh bạ) lên Google Drive, iCloud hoặc máy tính. Chúng tôi sẽ hỗ trợ xóa sạch dữ liệu trên máy để bảo mật thông tin cá nhân.

### 5. Thanh toán bằng hình thức nào?

Chúng tôi hỗ trợ 2 hình thức:
- **Tiền mặt**: Thanh toán ngay tại chỗ
- **Chuyển khoản**: Chuyển khoản ngân hàng ngay sau khi thỏa thuận

### 6. Có thu mua điện thoại ở tỉnh không?

Hiện tại chúng tôi chỉ hỗ trợ thu mua tận nhà tại **Hà Nội** và **TP.HCM**. Nếu bạn ở tỉnh, có thể gửi máy qua bưu điện (chúng tôi hỗ trợ phí ship) hoặc liên hệ để được tư vấn.

---

**Liên hệ ngay để nhận báo giá**:
- Hotline: **0328488888**
- Zalo: [Chat ngay](https://zalo.me/0328488888)
- Messenger: [Nhắn tin](https://m.me/luxphone.vn)
- Email: contact@luxphone.vn
    `,
  },
]
