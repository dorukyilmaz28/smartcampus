import HeroSection from '@/components/HeroSection'
import SolutionsOverview from '@/components/SolutionsOverview'
import CollaborationSection from '@/components/CollaborationSection'
import CaseStudies from '@/components/CaseStudies'
import ContactSection from '@/components/ContactSection'

export default function Home() {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <SolutionsOverview />
      <CollaborationSection />
      <CaseStudies />
      <ContactSection />
    </div>
  )
}
