import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export const IntroductionSection = () => (
  <section className="mb-12">
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Introduction</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-700 leading-relaxed">
          <span className="font-semibold">Innovative AI/ML Engineer</span> with a Master in Theoretical Computer Science and ~7 years of experience in NLP, Computer Vision, and Machine Learning.
          Proven ability to lead cross-functional teams delivering <span className="font-medium">scalable, cutting-edge solutions</span>.
          Recognized via <span className="text-blue-700 font-semibold">awards, a patent, and conference presentations</span> for real-world impact.
        </p>
      </CardContent>
    </Card>
  </section>
)
