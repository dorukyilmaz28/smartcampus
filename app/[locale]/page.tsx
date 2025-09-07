import HeroSection from '@/components/HeroSection'
import SolutionsOverview from '@/components/SolutionsOverview'
import CollaborationSection from '@/components/CollaborationSection'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SolutionsOverview />
      <CollaborationSection />
      <ContactSection />
    </div>
  )
}
