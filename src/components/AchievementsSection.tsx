import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
} from '@/components/ui/card'
import { Separator } from '@/components/ui/separator'

export const AchievementsSection = () => (
  <section className="mb-12">
    <Card>
      <CardHeader>
        <CardTitle className="text-xl">Achievements</CardTitle>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-6 text-gray-800 text-sm">
        {/* Patent */}
        <div>
          <p className="font-semibold text-gray-900">Patent (2023)</p>
          <p>Submitted a patent for an innovative computer vision system focused on tag analytics (under review).</p>
        </div>

        {/* Awards */}
        <div>
          <p className="font-semibold text-gray-900">Award</p>
          <p>
            Received the <strong>“Verisk - Way to Go”</strong> award for exceptional performance.
            <br />
            <a
              className="text-blue-600 underline"
              href="https://www.linkedin.com/in/surya-teja-v-850b1a74/details/recommendations/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Testimonial from Director
            </a>
          </p>
        </div>

        {/* Presentations */}
        <div>
          <p className="font-semibold text-gray-900">Presentations</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>
              <a
                href="https://www.nvidia.com/en-us/on-demand/session/gtcfall20-a21456/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                NVIDIA GTC (2021)
              </a>{' '}
              – Presented sensor fusion and object tracking techniques for safety analytics.
            </li>
            <li>
              <a
                href="https://www.linkedin.com/posts/vinay-sudhakaran_transportation-smartcities-analytics-activity-6505996414789742592-18e_/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                Smart Cities Conference (2019)
              </a>{' '}
              – Won Smart Urban Innovation Award for traffic flow estimation system using vehicle tracking.
            </li>
          </ul>
        </div>

        {/* Competitions */}
        <div>
          <p className="font-semibold text-gray-900">Competition</p>
          <p>
            Proposed a COVID-19 risk measurement solution (2020) adjudged “Excellent Implementable Idea” in{' '}
            <a
              href="https://www.linkedin.com/posts/vinay-sudhakaran_deeplearning-ai-covid19-activity-6673137944934658049-dBsl/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 underline"
            >
              NVIDIA’s SAMHAR COVID-19 Challenge
            </a>.
          </p>
        </div>
      </CardContent>
    </Card>
  </section>
)
