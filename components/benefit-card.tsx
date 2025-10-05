import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

interface BenefitCardProps {
  icon: string
  title: string
  description: string
}

export function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <Card className="text-center transition-all hover:shadow-md">
      <CardHeader>
        <div className="mx-auto mb-2 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-4xl">
          {icon}
        </div>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription>{description}</CardDescription>
      </CardContent>
    </Card>
  )
}
