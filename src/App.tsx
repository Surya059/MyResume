// src/App.tsx
import './index.css'
import { AchievementsSection } from './components/AchievementsSection'
import { ExperienceSection } from './components/ExperienceSection'
import { IntroductionSection } from './components/IntroductionSection'
import { EducationSection } from './components/EducationSection'
import { TechnologiesSection } from './components/TechnologiesSection'
import { HeaderSection } from './components/HeaderSection'






function App() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      {/* Add other components like Header, Achievements here */}
      <HeaderSection />
      <IntroductionSection />
<AchievementsSection />
<ExperienceSection />
<EducationSection />
<TechnologiesSection />
    </div>
  )
}

export default App
