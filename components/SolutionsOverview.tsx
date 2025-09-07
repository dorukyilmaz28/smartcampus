'use client'

import { 
  Building2, 
  Wifi, 
  Shield, 
  Leaf, 
  Cpu, 
  Users, 
  ArrowRight,
  CheckCircle 
} from 'lucide-react'
import Image from 'next/image'
import useTranslations from '@/hooks/useTranslations'

export default function SolutionsOverview() {
  const { t } = useTranslations()
  const solutions = [
    {
      icon: Cpu,
      title: t('solutions.items.digitalPlatform.title'),
      description: t('solutions.items.digitalPlatform.description'),
      features: t('solutions.items.digitalPlatform.features'),
      color: 'primary',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Wifi,
      title: t('solutions.items.iotSensing.title'),
      description: t('solutions.items.iotSensing.description'),
      features: t('solutions.items.iotSensing.features'),
      color: 'secondary',
      image: '/images/campus-network.jpg'
    },
    {
      icon: Building2,
      title: t('solutions.items.smartBuildings.title'),
      description: t('solutions.items.smartBuildings.description'),
      features: t('solutions.items.smartBuildings.features'),
      color: 'green',
      image: '/images/smart-buildings.png'
    },
    {
      icon: Shield,
      title: t('solutions.items.resilience.title'),
      description: t('solutions.items.resilience.description'),
      features: t('solutions.items.resilience.features'),
      color: 'red',
      image: '/images/cybersecurity.png'
    },
    {
      icon: Leaf,
      title: t('solutions.items.zeroCarbon.title'),
      description: t('solutions.items.zeroCarbon.description'),
      features: t('solutions.items.zeroCarbon.features'),
      color: 'emerald',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    },
    {
      icon: Users,
      title: t('solutions.items.smartCollaboration.title'),
      description: t('solutions.items.smartCollaboration.description'),
      features: t('solutions.items.smartCollaboration.features'),
      color: 'purple',
      image: '/images/smart-office-classrooms.png'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'bg-primary-100 text-primary-600',
      secondary: 'bg-secondary-100 text-secondary-600',
      green: 'bg-green-100 text-green-600',
      red: 'bg-red-100 text-red-600',
      emerald: 'bg-emerald-100 text-emerald-600',
      purple: 'bg-purple-100 text-purple-600'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.primary
  }

  return (
    <section id="solutions" className="section-padding bg-neutral-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-24">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full bg-neutral-100 text-neutral-600 text-sm font-medium mb-8">
            <Cpu className="h-3.5 w-3.5 mr-2" />
            Çözümlerimiz
          </div>
          <h2 className="font-semibold text-neutral-900 mb-6">
            {t('solutions.title')}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            {t('solutions.description')}
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-24">
          {solutions.map((solution, index) => {
            const Icon = solution.icon
            return (
              <div
                key={index}
                className="group card overflow-hidden hover:shadow-apple-lg transition-all duration-300"
              >
                {/* Image Section */}
                <div className="relative h-48 w-full overflow-hidden">
                  {solution.image.includes('campus-network.jpg') ? (
                    <img
                      src="/images/campus-network.jpg"
                      alt={solution.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80';
                      }}
                    />
                  ) : (
                    <Image
                      src={solution.image}
                      alt={solution.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      unoptimized
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                  
                  {/* Icon Overlay */}
                  <div className="absolute top-4 left-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center bg-white/90 backdrop-blur-sm">
                      <Icon className="h-5 w-5 text-neutral-600" />
                    </div>
                  </div>
                </div>
                
                {/* Content Section */}
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-3">
                    {solution.title}
                  </h3>
                  
                  <p className="text-neutral-600 mb-4 leading-relaxed text-sm">
                    {solution.description}
                  </p>
                  
                  <ul className="space-y-2">
                    {Array.isArray(solution.features) ? solution.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-neutral-600">
                        <CheckCircle className="h-4 w-4 text-neutral-600 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    )) : null}
                  </ul>
                </div>
              </div>
            )
          })}
        </div>

        {/* Benefits Section */}
        <div className="relative overflow-hidden rounded-apple-xl bg-neutral-700 p-12 md:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h3 className="font-semibold text-white mb-6">
                {t('solutions.whyUs.title')}
              </h3>
              <p className="text-xl text-neutral-200 mb-8 leading-relaxed">
                {t('solutions.whyUs.description')}
              </p>
              
              <div className="space-y-4">
                {Array.isArray(t('solutions.whyUs.features')) ? t('solutions.whyUs.features').map((feature: string, index: number) => (
                  <div key={index} className="flex items-center">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-neutral-200">{feature}</span>
                  </div>
                )) : (
                  <div className="flex items-center">
                    <div className="w-6 h-6 bg-white/20 rounded-full flex items-center justify-center mr-3">
                      <CheckCircle className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-neutral-200">15+ yıl deneyim</span>
                  </div>
                )}
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-apple-lg p-8 shadow-apple-xl">
                <h4 className="text-xl font-semibold text-neutral-900 mb-4">
                  {t('solutions.whyUs.getStarted.title')}
                </h4>
                <p className="text-neutral-600 mb-6">
                  {t('solutions.whyUs.getStarted.description')}
                </p>
                <a
                  href="#contact"
                  className="bg-neutral-700 text-white hover:bg-neutral-600 font-medium py-3 px-8 rounded-apple transition-colors duration-200 inline-flex items-center w-full justify-center group border border-neutral-600"
                >
                  {t('solutions.whyUs.cta')}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
