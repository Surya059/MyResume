import {
    Card,
    CardHeader,
    CardTitle,
    CardContent,
  } from '@/components/ui/card'
  import { Separator } from '@/components/ui/separator'
  
  export const EducationSection = () => (
    <section className="mb-12">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl">Education</CardTitle>
        </CardHeader>
        <Separator />
        <CardContent className="space-y-2 text-sm text-gray-800">
          <p className="font-semibold text-gray-900">IIIT-B</p>
          <p className="text-gray-600">Aug 2013 – Aug 2018</p>
          <p>
            Integrated M.Tech in Information Technology<br />
            <span className="italic">Specialization: Theoretical Computer Science</span>
          </p>
        </CardContent>
      </Card>
    </section>
  )
  