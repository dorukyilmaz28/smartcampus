'use client'

import { 
  ArrowRight
} from 'lucide-react'
import Image from 'next/image'
import useTranslations from '@/hooks/useTranslations'

export default function CollaborationSection() {
  const { t } = useTranslations()

  return (
    <section id="collaboration" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            {t('collaboration.title')}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {t('collaboration.description')}
          </p>
        </div>


        {/* Solution Cards */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Video Conferencing */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-apple-lg mb-4">
                <Image
                  src="/images/video-conferencing.png"
                  alt="Video Conferencing"
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{t('collaboration.solutions.videoConferencing.title')}</h4>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">
                  <div className="mb-1">Executive Video Conferencing Solution</div>
                  <div>Enterprise Collaborative Office Meeting Solution</div>
                </div>
              </div>
            </div>

            {/* Visual Dispatch Center */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-apple-lg mb-4">
                <Image
                  src="/images/visual-dispatch-center.png"
                  alt="Visual Dispatch Center"
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{t('collaboration.solutions.visualDispatchCenter.title')}</h4>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  {t('collaboration.solutions.visualDispatchCenter.description')}
                </p>
              </div>
            </div>

            {/* Remote Collaboration */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-apple-lg mb-4">
                <Image
                  src="/images/remote-collaboration.png"
                  alt="Remote Collaboration"
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{t('collaboration.solutions.remoteCollaboration.title')}</h4>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  {t('collaboration.solutions.remoteCollaboration.description')}
                </p>
              </div>
            </div>

            {/* Smart Office */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-apple-lg mb-4">
                <Image
                  src="/images/smart-office.png"
                  alt="Smart Office"
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{t('collaboration.solutions.smartOffice.title')}</h4>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  {t('collaboration.solutions.smartOffice.description')}
                </p>
              </div>
            </div>

            {/* Smart Classroom */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-apple-lg mb-4">
                <Image
                  src="/images/smart-classroom.png"
                  alt="Smart Classroom"
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{t('collaboration.solutions.smartClassroom.title')}</h4>
              <div className="space-y-2">
                <p className="text-sm text-gray-600">
                  {t('collaboration.solutions.smartClassroom.description')}
                </p>
              </div>
            </div>

            {/* 5G Private Network Solutions */}
            <div className="group cursor-pointer">
              <div className="relative overflow-hidden rounded-apple-lg mb-4">
                <Image
                  src="/images/5Gsolutions.jpg"
                  alt="5G Private Network Solutions"
                  width={400}
                  height={192}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors"></div>
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{t('collaboration.solutions.private5gNetwork.title')}</h4>
              <div className="space-y-2">
                <div className="text-sm text-gray-600">
                  <div className="mb-1">5G Network Deployment</div>
                  <div>5G Usecase Development</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </section>
  )
}

