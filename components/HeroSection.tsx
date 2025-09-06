'use client'

import { ArrowRight, Building2, Users, Zap, CheckCircle } from 'lucide-react'
import Image from 'next/image'
import useTranslations from '@/hooks/useTranslations'

export default function HeroSection() {
  const { t } = useTranslations()
  return (
    <section id="home" className="relative bg-white overflow-hidden min-h-screen flex items-center">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}></div>
      </div>
      
      <div className="container-max section-padding relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-12">

            <div className="space-y-8">
              <h1 className="font-semibold leading-tight">
                <span className="text-neutral-900">{t('hero.title')}</span>
                {t('hero.subtitle') && (
                  <span className="block text-neutral-600 mt-2 font-normal">{t('hero.subtitle')}</span>
                )}
              </h1>
              <p className="text-xl text-neutral-600 leading-relaxed whitespace-pre-line max-w-2xl">
                {t('hero.description')}
              </p>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Building2 className="h-6 w-6 text-neutral-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{t('hero.features.smartBuildings.title')}</h3>
                <p className="text-sm text-neutral-600">{t('hero.features.smartBuildings.description')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Users className="h-6 w-6 text-neutral-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{t('hero.features.digitalCollaboration.title')}</h3>
                <p className="text-sm text-neutral-600">{t('hero.features.digitalCollaboration.description')}</p>
              </div>
              
              <div className="text-center">
                <div className="w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                  <Zap className="h-6 w-6 text-neutral-600" />
                </div>
                <h3 className="font-semibold text-neutral-900 mb-2">{t('hero.features.zeroCarbon.title')}</h3>
                <p className="text-sm text-neutral-600">{t('hero.features.zeroCarbon.description')}</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="bg-neutral-700 text-white hover:bg-neutral-600 font-medium py-3 px-8 rounded-apple transition-colors duration-200 inline-flex items-center justify-center group border border-neutral-600"
              >
                {t('hero.cta.primary')}
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#solutions"
                className="bg-white text-neutral-700 hover:bg-neutral-50 font-medium py-3 px-8 rounded-apple transition-colors duration-200 inline-flex items-center justify-center group border border-neutral-300"
              >
                {t('hero.cta.secondary')}
              </a>
            </div>

          </div>

          {/* Hero Image */}
          <div className="relative">
            <div className="relative w-full h-[500px] rounded-apple-xl overflow-hidden shadow-apple-xl">
              <Image
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Modern intelligent campus with smart buildings"
                fill
                className="object-cover"
                priority
              />
              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
