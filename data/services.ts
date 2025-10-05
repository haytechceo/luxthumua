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
    title: "Thu mua máy tính cũ",
    slug: "thu-mua-may-tinh-cu",
    description: "Thu mua máy tính để bàn các loại, giá cao, thanh toán ngay",
    image: "/images/services/computer.jpg",
    detailSlug: "/dich-vu/thu-mua-may-tinh-cu",
  },
  {
    id: "2",
    title: "Thu mua laptop cũ",
    slug: "thu-mua-laptop-cu",
    description: "Thu mua laptop mọi hãng Dell, HP, Asus, Lenovo, Macbook",
    image: "/images/services/laptop.jpg",
    detailSlug: "/dich-vu/thu-mua-laptop-cu",
  },
  {
    id: "3",
    title: "Thu mua điện thoại cũ",
    slug: "thu-mua-dien-thoai-cu",
    description: "Thu mua điện thoại iPhone, Samsung, Oppo... giá tốt nhất",
    image: "/images/services/phone.jpg",
    detailSlug: "/dich-vu/thu-mua-dien-thoai-cu",
  },
  {
    id: "4",
    title: "Thu mua máy tính bảng",
    slug: "thu-mua-may-tinh-bang",
    description: "Thu mua máy tính bảng iPad, Samsung Tab, Huawei MatePad. Giá cao, thanh toán nhanh.",
    image: "/images/services/tablet.jpg",
    detailSlug: "/dich-vu/thu-mua-may-tinh-bang",
  },
  {
    id: "5",
    title: "Thu mua đồng hồ thông minh",
    slug: "thu-mua-dong-ho-thong-minh",
    description: "Thu mua đồng hồ thông minh Apple Watch, Samsung Galaxy Watch, Huawei Watch. Giá cao nhất.",
    image: "/images/services/smartwatch.jpg",
    detailSlug: "/dich-vu/thu-mua-dong-ho-thong-minh",
  },
  {
    id: "6",
    title: "Thu mua phụ kiện công nghệ",
    slug: "thu-mua-phu-kien-cong-nghe",
    description: "Thu mua tai nghe AirPods, sạc dự phòng, bàn phím, chuột và các phụ kiện công nghệ khác.",
    image: "/images/services/accessories.jpg",
    detailSlug: "/dich-vu/thu-mua-phu-kien-cong-nghe",
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
    slug: "thu-mua-may-tinh-cu",
    title: "Thu mua máy tính cũ giá cao",
    description: "Dịch vụ thu mua máy tính để bàn cũ mọi cấu hình, mọi tình trạng. Giá cao, thanh toán nhanh.",
    longDescription:
      "Chúng tôi chuyên thu mua máy tính để bàn cũ các loại từ văn phòng đến gaming, workstation. Với hơn 10 năm kinh nghiệm, chúng tôi cam kết mang đến giá thu mua cao nhất thị trường, quy trình nhanh chóng và minh bạch. Dù máy tính của bạn còn hoạt động tốt hay đã hỏng hóc, chúng tôi đều sẵn sàng thu mua với giá hợp lý nhất.",
    image: "/images/services/computer.jpg",
    metaTitle: "Thu mua máy tính cũ giá cao - PC văn phòng, gaming, workstation | LuxPhone",
    metaDescription:
      "Thu mua máy tính để bàn cũ mọi cấu hình, mọi tình trạng. Giá cao nhất thị trường, thu mua tận nhà, thanh toán ngay.",
    keywords: [
      "thu mua máy tính cũ",
      "thu mua PC cũ",
      "thu mua máy tính để bàn",
      "bán máy tính cũ",
      "thu mua máy tính gaming",
    ],
    features: [
      "Thu mua mọi cấu hình từ thấp đến cao",
      "Nhận máy tính hỏng, lỗi phần cứng",
      "Định giá theo từng linh kiện",
      "Thu mua tận nhà miễn phí",
      "Thanh toán ngay sau thỏa thuận",
      "Bảo mật dữ liệu tuyệt đối",
    ],
    process: [
      {
        title: "Liên hệ và mô tả cấu hình",
        description: "Gọi hotline hoặc nhắn tin, cung cấp thông tin về cấu hình máy tính (CPU, RAM, Card đồ họa...)",
      },
      {
        title: "Báo giá sơ bộ",
        description: "Chúng tôi sẽ báo giá sơ bộ dựa trên thông tin bạn cung cấp",
      },
      {
        title: "Kiểm tra và định giá chính xác",
        description: "Nhân viên đến tận nơi kiểm tra máy và đưa ra mức giá chính xác",
      },
      {
        title: "Thanh toán và bàn giao",
        description: "Thỏa thuận giá, xóa dữ liệu và thanh toán ngay bằng tiền mặt hoặc chuyển khoản",
      },
    ],
    priceRange: [
      { model: "PC văn phòng cơ bản (i3, 4GB RAM)", price: "1.500.000 - 3.000.000" },
      { model: "PC văn phòng cao cấp (i5, 8GB RAM)", price: "3.000.000 - 5.000.000" },
      { model: "PC Gaming (i7, 16GB RAM, GTX 1660)", price: "8.000.000 - 12.000.000" },
      { model: "PC Gaming cao cấp (i9, 32GB RAM, RTX 3070)", price: "15.000.000 - 25.000.000" },
      { model: "Workstation (Xeon, 64GB RAM)", price: "20.000.000 - 40.000.000" },
    ],
    faqs: [
      {
        question: "Máy tính hỏng nguồn có thu mua không?",
        answer:
          "Có, chúng tôi vẫn thu mua máy tính hỏng nguồn. Giá sẽ tính theo các linh kiện còn hoạt động như CPU, RAM, Card đồ họa, ổ cứng.",
      },
      {
        question: "Có thu mua từng linh kiện riêng lẻ không?",
        answer:
          "Có, chúng tôi nhận thu mua cả bộ máy tính hoàn chỉnh hoặc từng linh kiện riêng lẻ như CPU, RAM, Card đồ họa, mainboard.",
      },
      {
        question: "Cần chuẩn bị gì khi bán máy tính?",
        answer:
          "Bạn chỉ cần chuẩn bị CMND/CCCD để xác nhận danh tính. Nếu còn hóa đơn mua hàng thì tốt, nhưng không bắt buộc.",
      },
    ],
  },
  {
    slug: "thu-mua-laptop-cu",
    title: "Thu mua laptop cũ giá cao",
    description: "Thu mua laptop mọi hãng Dell, HP, Asus, Lenovo, Macbook. Mọi tình trạng, giá cao nhất.",
    longDescription:
      "Dịch vụ thu mua laptop cũ uy tín với giá cao nhất thị trường. Chúng tôi nhận thu mua mọi thương hiệu laptop từ phổ thông đến cao cấp, từ laptop văn phòng đến laptop gaming và Macbook. Đặc biệt, chúng tôi cam kết giá thu mua Macbook cao hơn thị trường 10-15%. Quy trình nhanh chóng, thu mua tận nhà miễn phí trong nội thành.",
    image: "/images/services/laptop.jpg",
    metaTitle: "Thu mua laptop cũ giá cao - Dell, HP, Asus, Lenovo, Macbook | LuxPhone",
    metaDescription:
      "Thu mua laptop cũ mọi hãng, mọi tình trạng. Giá cao nhất thị trường, thu mua tận nhà, thanh toán nhanh.",
    keywords: ["thu mua laptop cũ", "thu mua Macbook", "thu mua laptop Dell", "thu mua laptop HP", "bán laptop cũ"],
    features: [
      "Thu mua mọi thương hiệu laptop",
      "Giá Macbook cao hơn thị trường 10-15%",
      "Thu mua tận nhà miễn phí",
      "Nhận máy màn hình vỡ, pin chai",
      "Thanh toán ngay sau kiểm tra",
      "Xóa dữ liệu an toàn",
    ],
    process: [
      {
        title: "Liên hệ và cung cấp thông tin",
        description: "Gọi hotline, cung cấp thông tin laptop (hãng, model, cấu hình, tình trạng)",
      },
      {
        title: "Hẹn lịch kiểm tra tận nơi",
        description: "Nhân viên đến tận nhà/văn phòng để kiểm tra máy chi tiết",
      },
      {
        title: "Định giá và thanh toán",
        description: "Thỏa thuận giá, xóa dữ liệu và thanh toán ngay",
      },
    ],
    priceRange: [
      { model: "Laptop văn phòng cơ bản (i3, 4GB)", price: "2.000.000 - 4.000.000" },
      { model: "Laptop văn phòng cao cấp (i5, 8GB)", price: "5.000.000 - 8.000.000" },
      { model: "Laptop gaming (i7, 16GB, GTX 1650)", price: "10.000.000 - 15.000.000" },
      { model: "Macbook Air M1", price: "15.000.000 - 18.000.000" },
      { model: "Macbook Pro M1/M2", price: "20.000.000 - 35.000.000" },
    ],
    faqs: [
      {
        question: "Laptop màn hình vỡ có thu mua không?",
        answer:
          "Có, chúng tôi nhận thu mua laptop màn hình vỡ. Giá sẽ thấp hơn máy nguyên zin tùy mức độ vỡ và khả năng hoạt động.",
      },
      {
        question: "Laptop pin chai có ảnh hưởng đến giá không?",
        answer:
          "Có ảnh hưởng nhưng không nhiều. Chúng tôi sẽ trừ chi phí thay pin mới vào giá thu mua, thường khoảng 500.000 - 1.500.000đ tùy model.",
      },
    ],
  },
  {
    slug: "thu-mua-dien-thoai-cu",
    title: "Thu mua điện thoại cũ giá cao",
    description: "Thu mua điện thoại iPhone, Samsung, Oppo, Xiaomi. Mọi tình trạng, giá cao nhất thị trường.",
    longDescription:
      "Chuyên thu mua điện thoại cũ mọi hãng với giá cao nhất thị trường. Chúng tôi nhận thu mua iPhone, Samsung, Oppo, Xiaomi và các hãng khác dù máy còn hoạt động tốt hay đã hỏng hóc. Quy trình nhanh chóng chỉ 15-20 phút, thanh toán ngay, bảo mật dữ liệu tuyệt đối.",
    image: "/images/services/phone.jpg",
    metaTitle: "Thu mua điện thoại cũ giá cao - iPhone, Samsung, Oppo, Xiaomi | LuxPhone",
    metaDescription:
      "Thu mua điện thoại cũ mọi hãng, mọi tình trạng. Giá cao nhất thị trường, thanh toán nhanh trong 15 phút.",
    keywords: [
      "thu mua điện thoại cũ",
      "thu mua iPhone",
      "thu mua Samsung",
      "bán điện thoại cũ",
      "thu mua điện thoại giá cao",
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
      { model: "iPhone 15 Pro Max", price: "26.000.000 - 30.000.000" },
      { model: "iPhone 15", price: "18.000.000 - 22.000.000" },
      { model: "iPhone 14", price: "15.000.000 - 18.000.000" },
      { model: "iPhone 13", price: "12.000.000 - 15.000.000" },
      { model: "Samsung S24 Ultra", price: "22.000.000 - 26.000.000" },
      { model: "Samsung S23", price: "13.000.000 - 16.000.000" },
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
    image: "/images/services/tablet.jpg",
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
    slug: "thu-mua-dong-ho-thong-minh",
    title: "Thu mua đồng hồ thông minh Apple Watch, Samsung Watch",
    description: "Thu mua đồng hồ thông minh Apple Watch, Samsung Galaxy Watch, Huawei Watch. Giá cao nhất.",
    longDescription:
      "Chuyên thu mua đồng hồ thông minh các hãng với giá cao nhất thị trường. Chúng tôi nhận thu mua Apple Watch mọi series, Samsung Galaxy Watch, Huawei Watch và các dòng smartwatch khác. Dù đồng hồ còn mới hay đã qua sử dụng, màn hình nguyên zin hay có trầy xước, chúng tôi đều sẵn sàng thu mua.",
    image: "/images/services/smartwatch.jpg",
    metaTitle: "Thu mua đồng hồ thông minh Apple Watch, Samsung Watch giá cao | LuxPhone",
    metaDescription:
      "Thu mua đồng hồ thông minh Apple Watch, Samsung Galaxy Watch, Huawei Watch. Giá cao, thanh toán nhanh.",
    keywords: [
      "thu mua Apple Watch",
      "thu mua Samsung Watch",
      "thu mua đồng hồ thông minh",
      "bán Apple Watch cũ",
      "thu mua smartwatch",
    ],
    features: [
      "Thu mua mọi dòng smartwatch",
      "Giá Apple Watch cao nhất",
      "Nhận máy trầy xước, pin yếu",
      "Thanh toán ngay tại chỗ",
      "Kiểm tra kỹ lưỡng",
      "Bảo mật thông tin",
    ],
    process: [
      {
        title: "Liên hệ và mô tả đồng hồ",
        description: "Gọi hotline, cung cấp thông tin về đồng hồ (model, size, tình trạng)",
      },
      {
        title: "Báo giá sơ bộ",
        description: "Chúng tôi báo giá sơ bộ dựa trên thông tin bạn cung cấp",
      },
      {
        title: "Kiểm tra và thanh toán",
        description: "Kiểm tra đồng hồ chi tiết, thỏa thuận giá và thanh toán ngay",
      },
    ],
    priceRange: [
      { model: "Apple Watch Ultra 2", price: "15.000.000 - 18.000.000" },
      { model: "Apple Watch Series 9", price: "8.000.000 - 12.000.000" },
      { model: "Apple Watch SE 2", price: "4.000.000 - 6.000.000" },
      { model: "Samsung Galaxy Watch 6", price: "5.000.000 - 8.000.000" },
      { model: "Huawei Watch GT 4", price: "3.000.000 - 5.000.000" },
    ],
  },
  {
    slug: "thu-mua-phu-kien-cong-nghe",
    title: "Thu mua phụ kiện công nghệ",
    description: "Thu mua tai nghe AirPods, sạc dự phòng, bàn phím, chuột và các phụ kiện công nghệ khác.",
    longDescription:
      "Dịch vụ thu mua phụ kiện công nghệ chính hãng với giá hợp lý. Chúng tôi nhận thu mua tai nghe AirPods, tai nghe Sony/Bose, sạc dự phòng, bàn phím cơ, chuột gaming và nhiều phụ kiện công nghệ khác. Đặc biệt ưu tiên các sản phẩm chính hãng, còn nguyên hộp hoặc tình trạng tốt.",
    image: "/images/services/accessories.jpg",
    metaTitle: "Thu mua phụ kiện công nghệ - AirPods, tai nghe, sạc dự phòng | LuxPhone",
    metaDescription:
      "Thu mua phụ kiện công nghệ chính hãng: AirPods, tai nghe Sony/Bose, sạc dự phòng, bàn phím, chuột. Giá tốt.",
    keywords: ["thu mua AirPods", "thu mua tai nghe", "thu mua phụ kiện", "bán AirPods cũ", "thu mua sạc dự phòng"],
    features: [
      "Thu mua phụ kiện chính hãng",
      "Giá hợp lý, minh bạch",
      "Kiểm tra kỹ lưỡng",
      "Thanh toán nhanh chóng",
      "Nhận hàng tại chỗ",
      "Tư vấn nhiệt tình",
    ],
    process: [
      {
        title: "Liên hệ và mô tả sản phẩm",
        description: "Gọi hotline, cung cấp thông tin về phụ kiện (loại, hãng, tình trạng)",
      },
      {
        title: "Báo giá",
        description: "Chúng tôi báo giá dựa trên thông tin và tình trạng sản phẩm",
      },
      {
        title: "Giao dịch",
        description: "Kiểm tra sản phẩm, thỏa thuận giá và thanh toán",
      },
    ],
    priceRange: [
      { model: "AirPods Pro 2", price: "3.500.000 - 4.500.000" },
      { model: "AirPods 3", price: "2.500.000 - 3.200.000" },
      { model: "Sony WH-1000XM5", price: "5.000.000 - 7.000.000" },
      { model: "Bàn phím cơ (Keychron, Leopold)", price: "1.500.000 - 3.000.000" },
      { model: "Chuột gaming (Logitech, Razer)", price: "800.000 - 2.000.000" },
    ],
  },
]
