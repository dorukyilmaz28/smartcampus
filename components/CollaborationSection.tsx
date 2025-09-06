'use client'

import { 
  Monitor, 
  Video, 
  Users, 
  Share2, 
  MessageSquare, 
  Calendar,
  ArrowRight,
  CheckCircle,
  Play
} from 'lucide-react'
import Image from 'next/image'
import useTranslations from '@/hooks/useTranslations'

export default function CollaborationSection() {
  const { t } = useTranslations()
  const features = [
    {
      icon: Monitor,
      title: 'Akıllı Ekranlar',
      description: '4K çözünürlüklü, dokunmatik akıllı ekranlar ile etkileşimli sunumlar ve iş birliği.',
      benefits: ['55" - 86" boyut seçenekleri', 'Dokunmatik arayüz', '4K Ultra HD', 'Kablosuz bağlantı']
    },
    {
      icon: Video,
      title: 'Görüntülü Konferans',
      description: 'Yüksek kaliteli görüntülü konferans çözümleri ile uzaktan iş birliğini kolaylaştırın.',
      benefits: ['4K video kalitesi', 'AI destekli ses', 'Otomatik odaklama', 'Çoklu ekran desteği']
    },
    {
      icon: Users,
      title: 'Toplantı Odaları',
      description: 'Akıllı toplantı odaları ile verimli ve etkileşimli toplantı deneyimi.',
      benefits: ['Akıllı rezervasyon', 'Otomatik kurulum', 'Ses yalıtımı', 'Çevre dostu tasarım']
    },
    {
      icon: Share2,
      title: 'Dosya Paylaşımı',
      description: 'Güvenli ve hızlı dosya paylaşımı ile ekip çalışmasını destekleyin.',
      benefits: ['Bulut entegrasyonu', 'Güvenli paylaşım', 'Versiyon kontrolü', 'Mobil erişim']
    }
  ]

  const useCases = [
    {
      title: 'Eğitim ve Öğretim',
      description: 'Sanal sınıflar ve hibrit eğitim modelleri',
      icon: '🎓'
    },
    {
      title: 'Kurumsal Toplantılar',
      description: 'Yönetici toplantıları ve strateji oturumları',
      icon: '💼'
    },
    {
      title: 'Araştırma ve Geliştirme',
      description: 'Uzaktan iş birliği ve proje yönetimi',
      icon: '🔬'
    },
    {
      title: 'Etkinlik Yönetimi',
      description: 'Sanal konferanslar ve seminerler',
      icon: '🎪'
    }
  ]

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

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Features */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                {t('collaboration.platform.title')}
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                {t('collaboration.platform.description')}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {features.map((feature, index) => {
                const Icon = feature.icon
                return (
                  <div key={index} className="bg-white rounded-apple p-6 shadow-apple border border-neutral-100">
                    <div className="flex items-center mb-3">
                      <div className="w-10 h-10 bg-neutral-100 rounded-lg flex items-center justify-center mr-3">
                        <Icon className="h-5 w-5 text-neutral-600" />
                      </div>
                      <h4 className="font-semibold text-neutral-900">{feature.title}</h4>
                    </div>
                    <p className="text-sm text-neutral-600 mb-3">{feature.description}</p>
                    <ul className="space-y-1">
                      {feature.benefits.map((benefit, benefitIndex) => (
                        <li key={benefitIndex} className="flex items-center text-xs text-neutral-500">
                          <CheckCircle className="h-3 w-3 text-neutral-600 mr-2" />
                          {benefit}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </div>

          {/* Visual Content */}
          <div className="relative">
            <div className="relative w-full h-96 rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Modern meeting room with smart collaboration technology"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors group">
                  <Play className="h-6 w-6 text-primary-600 ml-1 group-hover:scale-110 transition-transform" />
                </button>
              </div>
            </div>

            {/* Floating Stats */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-xl shadow-lg p-4 max-w-xs">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-secondary-100 rounded-lg flex items-center justify-center">
                  <Users className="h-6 w-6 text-secondary-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">1000+</h4>
                  <p className="text-sm text-gray-600">Aktif Kullanıcı</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Use Cases */}
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-sm border border-gray-100">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Kullanım Alanları
            </h3>
            <p className="text-gray-600">
              Akıllı iş birliği çözümlerimiz farklı sektörlerde geniş uygulama alanı buluyor.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {useCases.map((useCase, index) => (
              <div key={index} className="text-center p-6 rounded-lg hover:bg-gray-50 transition-colors">
                <div className="text-4xl mb-4">{useCase.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{useCase.title}</h4>
                <p className="text-sm text-gray-600">{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12">
          <div className="bg-neutral-700 rounded-apple-xl p-8 md:p-12 text-white">
            <h3 className="text-2xl md:text-3xl font-semibold mb-4">
              İş Birliği Çözümlerinizi Keşfedin
            </h3>
            <p className="text-lg mb-6 text-neutral-200">
              Uzman ekibimizle görüşün ve ihtiyaçlarınıza özel çözüm önerileri alın.
            </p>
            <a
              href="#contact"
              className="bg-neutral-700 text-white hover:bg-neutral-600 font-medium py-3 px-8 rounded-apple transition-colors duration-200 inline-flex items-center group border border-neutral-600"
            >
              Demo Talep Et
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
