import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] px-6">
      <h1 className="text-4xl font-bold mb-4">404 - Không tìm thấy trang</h1>
      <p className="text-muted-foreground mb-8 text-center">
        Trang dịch vụ bạn đang tìm kiếm không tồn tại hoặc đã bị xóa.
      </p>
      <div className="flex gap-4">
        <Button asChild>
          <Link href="/">Về trang chủ</Link>
        </Button>
        <Button asChild variant="outline">
          <Link href="/lien-he">Liên hệ hỗ trợ</Link>
        </Button>
      </div>
    </div>
  )
}
