import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'


export const HeaderSection = () => (
  <header className="mb-12 text-center space-y-4">
    <h1 className="text-4xl font-bold text-gray-900">Surya Teja</h1>

    <div className="flex flex-col sm:flex-row sm:justify-center sm:space-x-6 space-y-2 sm:space-y-0 text-sm text-gray-600">
      <span>San Jose, CA</span>
      <Separator orientation="vertical" className="hidden sm:inline-block h-4" />
      <span>
        <a href="mailto:surya.22091994@gmail.com" className="hover:underline">
          surya.22091994@gmail.com
        </a>
      </span>
      <Separator orientation="vertical" className="hidden sm:inline-block h-4" />
      <span>
        <a href="tel:+1-908-449-0237" className="hover:underline">
          908-449-0237
        </a>
      </span>
      <Separator orientation="vertical" className="hidden sm:inline-block h-4" />
      <span>
        <a
          href="https://www.linkedin.com/in/suryatejaventeddu/"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:underline"
        >
          LinkedIn
        </a>
      </span>
    </div>

    <Button variant="default" className="mt-2" onClick={() => window.print()}>
      Download PDF
    </Button>
  </header>
)
