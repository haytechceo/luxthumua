export interface Service {
  id: string
  title: string
  slug: string
  description: string
  image: string
  detailSlug: string
}

export const services: Service[] = [
  {
    id: "1",
    title: "Thu mua laptop gaming",
    slug: "thu-mua-laptop-gaming",
    description: "Thu mua laptop gaming mọi hãng MSI, Asus ROG, Acer Predator, Dell Alienware. Giá cao nhất thị trường.",
    image: "/images/services/1.png",
    detailSlug: "/dich-vu/thu-mua-laptop-gaming",
  },
  {
    id: "2",
    title: "Thu mua Macbook",
    slug: "thu-mua-macbook",
    description: "Thu mua Macbook Air, Macbook Pro mọi đời. Giá cao hơn thị trường 10-15%, thanh toán ngay.",
    image: "/images/services/2.png",
    detailSlug: "/dich-vu/thu-mua-macbook",
  },
  {
    id: "3",
    title: "Thu mua Surface",
    slug: "thu-mua-surface",
    description: "Thu mua Microsoft Surface Pro, Surface Laptop, Surface Book. Mọi tình trạng, giá tốt nhất.",
    image: "/images/services/3.png",
    detailSlug: "/dich-vu/thu-mua-surface",
  },
  {
    id: "4",
    title: "Thu mua điện thoại",
    slug: "thu-mua-dien-thoai",
    description: "Thu mua điện thoại iPhone, Samsung, Oppo, Xiaomi. Mọi tình trạng, giá cao nhất thị trường.",
    image: "/images/services/4.png",
    detailSlug: "/dich-vu/thu-mua-dien-thoai",
  },
  {
    id: "5",
    title: "Thu mua máy tính bảng",
    slug: "thu-mua-may-tinh-bang",
    description: "Thu mua máy tính bảng iPad, Samsung Tab, Huawei MatePad. Giá cao, thanh toán nhanh.",
    image: "/images/services/5.png",
    detailSlug: "/dich-vu/thu-mua-may-tinh-bang",
  },
  {
    id: "6",
    title: "Thu mua Android",
    slug: "thu-mua-android",
    description: "Thu mua điện thoại Android Samsung, Xiaomi, Oppo, Vivo, Realme. Giá tốt, thanh toán nhanh.",
    image: "/images/services/6.png",
    detailSlug: "/dich-vu/thu-mua-android",
  },
]

export interface DetailService {
  slug: string
  title: string
  description: string
  longDescription: string
  image: string
  metaTitle: string
  metaDescription: string
  keywords: string[]
  features: string[]
  process: {
    title: string
    description: string
  }[]
  priceRange?: {
    model: string
    price: string
  }[]
  faqs?: {
    question: string
    answer: string
  }[]
}

export const detailServices: DetailService[] = [
  {
    slug: "thu-mua-laptop-gaming",
    title: "Thu mua laptop gaming giá cao",
    description: "Thu mua laptop gaming mọi hãng MSI, Asus ROG, Acer Predator, Dell Alienware, Lenovo Legion. Giá cao nhất thị trường.",
    longDescription:
      "Chuyên thu mua laptop gaming với giá cao nhất thị trường. Chúng tôi nhận thu mua mọi dòng laptop gaming từ phổ thông đến cao cấp của các hãng MSI, Asus ROG, Acer Predator, Dell Alienware, Lenovo Legion, HP Omen. Dù máy còn mới hay đã qua sử dụng, cấu hình mạnh hay trung bình, chúng tôi đều sẵn sàng thu mua với giá hợp lý nhất. Quy trình nhanh chóng, thu mua tận nhà miễn phí.",
    image: "/images/services/1.png",
    metaTitle: "Thu mua laptop gaming giá cao - MSI, Asus ROG, Acer Predator, Alienware | LuxPhone",
    metaDescription:
      "Thu mua laptop gaming mọi hãng, mọi cấu hình. Giá cao nhất thị trường, thu mua tận nhà, thanh toán ngay.",
    keywords: [
      "thu mua laptop gaming",
      "thu mua laptop MSI",
      "thu mua Asus ROG",
      "thu mua Acer Predator",
      "thu mua Dell Alienware",
      "bán laptop gaming cũ",
    ],
    features: [
      "Thu mua mọi dòng laptop gaming",
      "Giá cao nhất cho laptop gaming cao cấp",
      "Nhận máy màn hình vỡ, pin chai",
      "Thu mua tận nhà miễn phí",
      "Thanh toán ngay sau kiểm tra",
      "Xóa dữ liệu an toàn",
    ],
    process: [
      {
        title: "Liên hệ và cung cấp thông tin",
        description: "Gọi hotline, cung cấp thông tin laptop gaming (hãng, model, CPU, RAM, VGA, tình trạng)",
      },
      {
        title: "Báo giá sơ bộ",
        description: "Chúng tôi báo giá sơ bộ dựa trên cấu hình và tình trạng máy",
      },
      {
        title: "Kiểm tra tận nơi",
        description: "Nhân viên đến tận nhà kiểm tra máy chi tiết, test hiệu năng",
      },
      {
        title: "Thanh toán ngay",
        description: "Thỏa thuận giá, xóa dữ liệu và thanh toán ngay bằng tiền mặt hoặc chuyển khoản",
      },
    ],
    priceRange: [
      { model: "Laptop gaming phổ thông (i5, GTX 1650)", price: "8.000.000 - 12.000.000" },
      { model: "Laptop gaming tầm trung (i7, RTX 3050)", price: "12.000.000 - 18.000.000" },
      { model: "Laptop gaming cao cấp (i7, RTX 3060)", price: "18.000.000 - 25.000.000" },
      { model: "Laptop gaming high-end (i9, RTX 3070)", price: "25.000.000 - 35.000.000" },
      { model: "Laptop gaming top (i9, RTX 4080/4090)", price: "35.000.000 - 55.000.000" },
    ],
    faqs: [
      {
        question: "Laptop gaming màn hình vỡ có thu mua không?",
        answer:
          "Có, chúng tôi nhận thu mua laptop gaming màn hình vỡ. Giá sẽ giảm tùy mức độ vỡ và chi phí thay màn hình.",
      },
      {
        question: "Card đồ họa yếu có ảnh hưởng nhiều đến giá không?",
        answer:
          "Có, card đồ họa là yếu tố quan trọng ảnh hưởng đến giá laptop gaming. Chúng tôi định giá dựa trên cấu hình tổng thể.",
      },
      {
        question: "Laptop gaming pin chai có thu mua không?",
        answer:
          "Có, chúng tôi vẫn thu mua. Pin chai là tình trạng phổ biến của laptop gaming, giá sẽ trừ chi phí thay pin.",
      },
    ],
  },
  {
    slug: "thu-mua-macbook",
    title: "Thu mua Macbook giá cao",
    description: "Thu mua Macbook Air, Macbook Pro mọi đời M1, M2, M3. Giá cao hơn thị trường 10-15%, thanh toán ngay.",
    longDescription:
      "Dịch vụ thu mua Macbook uy tín với giá cao nhất thị trường. Chúng tôi chuyên thu mua Macbook Air, Macbook Pro các đời từ Intel đến chip M1, M2, M3. Cam kết giá thu mua cao hơn thị trường 10-15%, quy trình nhanh chóng chỉ 15-20 phút. Thu mua tận nhà miễn phí, thanh toán ngay bằng tiền mặt hoặc chuyển khoản. Đặc biệt ưu tiên Macbook còn nguyên seal, fullbox.",
    image: "/images/services/2.png",
    metaTitle: "Thu mua Macbook giá cao - Air, Pro M1 M2 M3 | LuxPhone",
    metaDescription:
      "Thu mua Macbook Air, Pro mọi đời. Giá cao hơn thị trường 10-15%, thu mua tận nhà, thanh toán nhanh.",
    keywords: [
      "thu mua Macbook",
      "thu mua Macbook Air",
      "thu mua Macbook Pro",
      "thu mua Macbook M1",
      "thu mua Macbook M2",
      "bán Macbook cũ",
    ],
    features: [
      "Giá cao hơn thị trường 10-15%",
      "Thu mua mọi đời Macbook",
      "Ưu tiên máy fullbox, nguyên seal",
      "Nhận máy màn hình vỡ, pin chai",
      "Thu mua tận nhà miễn phí",
      "Thanh toán nhanh 15-20 phút",
    ],
    process: [
      {
        title: "Liên hệ và mô tả Macbook",
        description: "Gọi hotline, cung cấp thông tin Macbook (model, năm sản xuất, cấu hình, tình trạng)",
      },
      {
        title: "Báo giá ngay",
        description: "Chúng tôi báo giá cụ thể dựa trên thông tin bạn cung cấp",
      },
      {
        title: "Kiểm tra và thanh toán",
        description: "Nhân viên đến tận nơi kiểm tra máy, thỏa thuận giá và thanh toán ngay",
      },
    ],
    priceRange: [
      { model: "Macbook Air M1 (8GB/256GB)", price: "15.000.000 - 18.000.000" },
      { model: "Macbook Air M2 (8GB/256GB)", price: "20.000.000 - 24.000.000" },
      { model: "Macbook Pro M1 13 inch", price: "22.000.000 - 26.000.000" },
      { model: "Macbook Pro M2 14 inch", price: "30.000.000 - 38.000.000" },
      { model: "Macbook Pro M3 Max 16 inch", price: "55.000.000 - 75.000.000" },
    ],
    faqs: [
      {
        question: "Macbook màn hình vỡ có thu mua không?",
        answer:
          "Có, chúng tôi nhận thu mua Macbook màn hình vỡ. Giá sẽ giảm tùy mức độ vỡ và chi phí thay màn hình.",
      },
      {
        question: "Macbook Intel có thu mua không?",
        answer:
          "Có, chúng tôi thu mua cả Macbook Intel và Macbook chip M. Giá Macbook M sẽ cao hơn do hiệu năng tốt hơn.",
      },
      {
        question: "Macbook không có hóa đơn có thu mua không?",
        answer:
          "Có, chúng tôi vẫn thu mua. Tuy nhiên, giá sẽ cao hơn nếu bạn có đầy đủ hóa đơn, hộp và phụ kiện.",
      },
    ],
  },
  {
    slug: "thu-mua-surface",
    title: "Thu mua Microsoft Surface giá cao",
    description: "Thu mua Microsoft Surface Pro, Surface Laptop, Surface Book, Surface Go. Mọi tình trạng, giá tốt nhất.",
    longDescription:
      "Chuyên thu mua Microsoft Surface các dòng với giá cao nhất thị trường. Chúng tôi nhận thu mua Surface Pro, Surface Laptop, Surface Book, Surface Go mọi thế hệ. Dù máy còn mới hay đã qua sử dụng, màn hình nguyên zin hay có trầy xước, chúng tôi đều sẵn sàng thu mua. Quy trình nhanh chóng, thu mua tận nhà miễn phí trong nội thành.",
    image: "/images/services/3.png",
    metaTitle: "Thu mua Microsoft Surface giá cao - Pro, Laptop, Book, Go | LuxPhone",
    metaDescription:
      "Thu mua Microsoft Surface mọi dòng, mọi tình trạng. Giá cao nhất thị trường, thu mua tận nhà, thanh toán nhanh.",
    keywords: [
      "thu mua Surface",
      "thu mua Surface Pro",
      "thu mua Surface Laptop",
      "thu mua Surface Book",
      "bán Surface cũ",
    ],
    features: [
      "Thu mua mọi dòng Surface",
      "Giá cao cho Surface mới",
      "Nhận máy màn hình vỡ, pin chai",
      "Thu mua cả bút Surface Pen",
      "Thu mua tận nhà miễn phí",
      "Thanh toán ngay sau kiểm tra",
    ],
    process: [
      {
        title: "Liên hệ và mô tả Surface",
        description: "Gọi hotline, cung cấp thông tin Surface (model, cấu hình, tình trạng, có bút không)",
      },
      {
        title: "Báo giá sơ bộ",
        description: "Chúng tôi báo giá dựa trên thông tin và tình trạng máy",
      },
      {
        title: "Kiểm tra và thanh toán",
        description: "Nhân viên đến tận nơi kiểm tra máy chi tiết, thỏa thuận giá và thanh toán ngay",
      },
    ],
    priceRange: [
      { model: "Surface Go 3", price: "6.000.000 - 9.000.000" },
      { model: "Surface Pro 7/8", price: "12.000.000 - 18.000.000" },
      { model: "Surface Pro 9", price: "18.000.000 - 25.000.000" },
      { model: "Surface Laptop 5", price: "15.000.000 - 22.000.000" },
      { model: "Surface Book 3", price: "20.000.000 - 30.000.000" },
    ],
    faqs: [
      {
        question: "Surface màn hình vỡ có thu mua không?",
        answer:
          "Có, chúng tôi nhận thu mua Surface màn hình vỡ. Giá sẽ giảm tùy mức độ vỡ và chi phí sửa chữa.",
      },
      {
        question: "Surface không có bút có thu mua không?",
        answer:
          "Có, chúng tôi vẫn thu mua. Tuy nhiên, giá sẽ cao hơn nếu có đầy đủ bút Surface Pen và phụ kiện.",
      },
      {
        question: "Surface pin chai có thu mua không?",
        answer:
          "Có, chúng tôi vẫn thu mua. Giá sẽ trừ chi phí thay pin, thường khoảng 1.000.000 - 2.000.000đ.",
      },
    ],
  },
  {
    slug: "thu-mua-dien-thoai",
    title: "Thu mua điện thoại giá cao",
    description: "Thu mua điện thoại iPhone, Samsung, Oppo, Xiaomi, Vivo, Realme. Mọi tình trạng, giá cao nhất thị trường.",
    longDescription:
      "Chuyên thu mua điện thoại mọi hãng với giá cao nhất thị trường. Chúng tôi nhận thu mua iPhone, Samsung, Oppo, Xiaomi, Vivo, Realme và các hãng khác dù máy còn hoạt động tốt hay đã hỏng hóc. Quy trình nhanh chóng chỉ 15-20 phút, thanh toán ngay, bảo mật dữ liệu tuyệt đối. Thu mua tận nơi miễn phí trong nội thành Hà Nội và TP.HCM.",
    image: "/images/services/4.png",
    metaTitle: "Thu mua điện thoại giá cao - iPhone, Samsung, Oppo, Xiaomi | LuxPhone",
    metaDescription:
      "Thu mua điện thoại mọi hãng, mọi tình trạng. Giá cao nhất thị trường, thanh toán nhanh trong 15 phút.",
    keywords: [
      "thu mua điện thoại",
      "thu mua iPhone",
      "thu mua Samsung",
      "thu mua điện thoại cũ",
      "bán điện thoại cũ",
    ],
    features: [
      "Thu mua mọi thương hiệu điện thoại",
      "Giá cao nhất thị trường",
      "Thanh toán nhanh 15-20 phút",
      "Nhận máy màn hình vỡ, hỏng nguồn",
      "Bảo mật dữ liệu tuyệt đối",
      "Thu mua tận nơi miễn phí",
    ],
    process: [
      {
        title: "Liên hệ và tư vấn",
        description: "Gọi hotline hoặc nhắn tin qua Zalo/Messenger để được tư vấn và báo giá sơ bộ",
      },
      {
        title: "Kiểm tra máy",
        description: "Nhân viên đến tận nơi hoặc bạn mang máy đến cửa hàng để kiểm tra chi tiết",
      },
      {
        title: "Định giá và thanh toán",
        description: "Thỏa thuận giá, xóa dữ liệu và thanh toán ngay bằng tiền mặt hoặc chuyển khoản",
      },
    ],
    priceRange: [
      { model: "iPhone 15 Pro Max", price: "26.000.000 - 32.000.000" },
      { model: "iPhone 15/15 Plus", price: "18.000.000 - 24.000.000" },
      { model: "iPhone 14 Pro Max", price: "22.000.000 - 26.000.000" },
      { model: "iPhone 13", price: "12.000.000 - 15.000.000" },
      { model: "Samsung S24 Ultra", price: "22.000.000 - 28.000.000" },
      { model: "Samsung S23", price: "13.000.000 - 17.000.000" },
    ],
    faqs: [
      {
        question: "Điện thoại màn hình vỡ có thu mua không?",
        answer:
          "Có, chúng tôi nhận thu mua điện thoại màn hình vỡ. Giá sẽ thấp hơn máy nguyên zin tùy mức độ vỡ và khả năng hoạt động.",
      },
      {
        question: "Máy hỏng nguồn có mua không?",
        answer:
          "Có, chúng tôi vẫn thu mua máy hỏng nguồn, hỏng main. Giá sẽ tính theo linh kiện còn sử dụng được như màn hình, camera, pin.",
      },
      {
        question: "Cần mang theo giấy tờ gì?",
        answer:
          "Bạn cần mang theo CMND/CCCD để xác nhận danh tính. Nếu có hóa đơn mua máy, hộp máy, phụ kiện thì giá sẽ cao hơn.",
      },
    ],
  },
  {
    slug: "thu-mua-may-tinh-bang",
    title: "Thu mua máy tính bảng iPad, Samsung Tab",
    description: "Thu mua máy tính bảng iPad, Samsung Tab, Huawei MatePad. Giá cao, thanh toán nhanh.",
    longDescription:
      "Dịch vụ thu mua máy tính bảng uy tín với giá cao nhất thị trường. Chúng tôi chuyên thu mua iPad các đời, Samsung Galaxy Tab, Huawei MatePad và các dòng tablet khác. Dù máy còn mới hay đã qua sử dụng, màn hình nguyên zin hay đã thay thế, chúng tôi đều sẵn sàng thu mua với giá hợp lý nhất.",
    image: "/images/services/5.png",
    metaTitle: "Thu mua máy tính bảng iPad, Samsung Tab giá cao | LuxPhone",
    metaDescription:
      "Thu mua máy tính bảng iPad, Samsung Tab, Huawei MatePad. Mọi tình trạng, giá cao, thanh toán nhanh.",
    keywords: ["thu mua iPad", "thu mua Samsung Tab", "thu mua máy tính bảng", "bán iPad cũ", "thu mua tablet"],
    features: [
      "Thu mua mọi dòng máy tính bảng",
      "Giá iPad cao hơn thị trường",
      "Nhận máy màn hình vỡ, pin chai",
      "Thanh toán ngay sau kiểm tra",
      "Thu mua tận nhà miễn phí",
      "Xóa dữ liệu an toàn",
    ],
    process: [
      {
        title: "Liên hệ và mô tả máy",
        description: "Gọi hotline, cung cấp thông tin về máy tính bảng (model, dung lượng, tình trạng)",
      },
      {
        title: "Báo giá và hẹn lịch",
        description: "Chúng tôi báo giá sơ bộ và hẹn lịch kiểm tra tận nơi",
      },
      {
        title: "Kiểm tra và thanh toán",
        description: "Kiểm tra máy chi tiết, thỏa thuận giá và thanh toán ngay",
      },
    ],
    priceRange: [
      { model: "iPad Pro M2 12.9 inch", price: "20.000.000 - 28.000.000" },
      { model: "iPad Air M1", price: "12.000.000 - 16.000.000" },
      { model: "iPad Gen 9/10", price: "6.000.000 - 9.000.000" },
      { model: "Samsung Tab S9 Ultra", price: "18.000.000 - 24.000.000" },
      { model: "Samsung Tab S8", price: "10.000.000 - 14.000.000" },
    ],
    faqs: [
      {
        question: "iPad màn hình vỡ có thu mua không?",
        answer:
          "Có, chúng tôi nhận thu mua iPad màn hình vỡ. Giá sẽ giảm tùy theo mức độ vỡ và chi phí sửa chữa ước tính.",
      },
      {
        question: "iPad bị khóa iCloud có thu mua không?",
        answer:
          "Rất tiếc, chúng tôi không thu mua iPad bị khóa iCloud vì không thể sử dụng được. Bạn cần mở khóa trước khi bán.",
      },
    ],
  },
  {
    slug: "thu-mua-android",
    title: "Thu mua điện thoại Android giá cao",
    description: "Thu mua điện thoại Android Samsung, Xiaomi, Oppo, Vivo, Realme. Giá tốt, thanh toán nhanh.",
    longDescription:
      "Chuyên thu mua điện thoại Android các hãng với giá cao nhất thị trường. Chúng tôi nhận thu mua Samsung, Xiaomi, Oppo, Vivo, Realme, OnePlus và các hãng Android khác. Dù máy cũ hay mới, màn hình nguyên zin hay có trầy xước, chúng tôi đều sẵn sàng thu mua với giá hợp lý. Quy trình nhanh chóng 15-20 phút, thanh toán ngay, thu mua tận nhà miễn phí.",
    image: "/images/services/6.png",
    metaTitle: "Thu mua điện thoại Android giá cao - Samsung, Xiaomi, Oppo, Vivo | LuxPhone",
    metaDescription:
      "Thu mua điện thoại Android mọi hãng, mọi tình trạng. Giá cao nhất thị trường, thanh toán nhanh trong 15 phút.",
    keywords: [
      "thu mua Android",
      "thu mua Samsung",
      "thu mua Xiaomi",
      "thu mua Oppo",
      "thu mua Vivo",
      "bán điện thoại Android",
    ],
    features: [
      "Thu mua mọi hãng Android",
      "Giá cao cho máy flagship",
      "Nhận máy màn hình vỡ, hỏng nguồn",
      "Thanh toán nhanh 15-20 phút",
      "Thu mua tận nhà miễn phí",
      "Bảo mật dữ liệu tuyệt đối",
    ],
    process: [
      {
        title: "Liên hệ và tư vấn",
        description: "Gọi hotline hoặc nhắn tin để được tư vấn và báo giá sơ bộ cho điện thoại Android",
      },
      {
        title: "Kiểm tra máy",
        description: "Nhân viên đến tận nơi hoặc bạn mang máy đến cửa hàng để kiểm tra chi tiết",
      },
      {
        title: "Thanh toán ngay",
        description: "Thỏa thuận giá, xóa dữ liệu và thanh toán ngay bằng tiền mặt hoặc chuyển khoản",
      },
    ],
    priceRange: [
      { model: "Samsung S24 Ultra", price: "22.000.000 - 28.000.000" },
      { model: "Samsung S23", price: "13.000.000 - 17.000.000" },
      { model: "Samsung Fold 5", price: "25.000.000 - 32.000.000" },
      { model: "Xiaomi 14", price: "12.000.000 - 16.000.000" },
      { model: "Oppo Find N3", price: "15.000.000 - 20.000.000" },
      { model: "Vivo X100 Pro", price: "18.000.000 - 23.000.000" },
    ],
    faqs: [
      {
        question: "Điện thoại Android màn hình vỡ có thu mua không?",
        answer:
          "Có, chúng tôi nhận thu mua điện thoại Android màn hình vỡ. Giá sẽ thấp hơn máy nguyên zin tùy mức độ vỡ.",
      },
      {
        question: "Máy Android cũ nhiều năm có thu mua không?",
        answer:
          "Có, chúng tôi vẫn thu mua điện thoại Android cũ. Tuy nhiên, giá sẽ phụ thuộc vào model, tình trạng và thời gian sử dụng.",
      },
      {
        question: "Máy Android hỏng nguồn có thu mua không?",
        answer:
          "Có, chúng tôi vẫn thu mua máy hỏng nguồn. Giá sẽ tính theo các linh kiện còn hoạt động như màn hình, camera, pin.",
      },
    ],
  },
]
