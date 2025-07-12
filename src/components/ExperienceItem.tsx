import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

type ExperienceItemProps = {
  title: string
  period: string
  highlights: string[]
}

export const ExperienceItem = ({ title, period, highlights }: ExperienceItemProps) => (
  <Card className="mb-6 shadow-md">
    <CardHeader className="pb-2">
      <CardTitle className="text-lg">{title}</CardTitle>
      <p className="text-sm text-gray-500">{period}</p>
    </CardHeader>
    <CardContent>
      <ul className="list-disc list-inside space-y-1 text-sm text-gray-700">
        {highlights.map((h, idx) => (
          <li key={idx}>{h}</li>
        ))}
      </ul>
    </CardContent>
  </Card>
)
