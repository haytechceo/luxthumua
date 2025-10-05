"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/hooks/use-toast"

export function ContactForm() {
  const { toast } = useToast()
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000))

    toast({
      title: "Đã gửi thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.",
    })

    setIsSubmitting(false)
    ;(e.target as HTMLFormElement).reset()
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Họ và tên *</Label>
          <Input id="name" name="name" placeholder="Nguyễn Văn A" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Số điện thoại *</Label>
          <Input id="phone" name="phone" type="tel" placeholder="0328488888" required />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="device">Thiết bị cần bán</Label>
        <Input id="device" name="device" placeholder="VD: iPhone 14 Pro 256GB" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="condition">Tình trạng máy</Label>
        <Textarea
          id="condition"
          name="condition"
          placeholder="Mô tả tình trạng máy: còn mới, có trầy xước, màn hình vỡ..."
          rows={4}
        />
      </div>
      <Button type="submit" disabled={isSubmitting} className="w-full bg-green-700 hover:bg-green-800 text-white">
        {isSubmitting ? "Đang gửi..." : "Gửi thông tin"}
      </Button>
    </form>
  )
}
