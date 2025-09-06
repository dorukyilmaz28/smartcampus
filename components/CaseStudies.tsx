'use client'

import { 
  Building2, 
  Users, 
  Leaf, 
  TrendingUp, 
  Award,
  ArrowRight,
  CheckCircle,
  Calendar
} from 'lucide-react'
import Image from 'next/image'
import useTranslations from '@/hooks/useTranslations'

export default function CaseStudies() {
  const { t } = useTranslations()
  const caseStudies = [
    {
      title: 'Teknoloji Üniversitesi - Dijital Dönüşüm',
      location: 'İstanbul, Türkiye',
      year: '2023',
      description: '15.000 öğrencili üniversitede kapsamlı akıllı kampüs dönüşümü. IoT sensörleri, akıllı bina yönetimi ve dijital iş birliği platformu entegrasyonu.',
      image: 'https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      results: [
        { metric: '%35', label: 'Enerji Tasarrufu' },
        { metric: '500+', label: 'IoT Sensör' },
        { metric: '%90', label: 'Öğrenci Memnuniyeti' },
        { metric: '24/7', label: 'Akıllı İzleme' }
      ],
      technologies: ['IoT Platform', 'Akıllı Binalar', 'Dijital İş Birliği', 'Enerji Yönetimi'],
      color: 'primary'
    },
    {
      title: 'Kurumsal Merkez - Akıllı Ofis',
      location: 'Ankara, Türkiye',
      year: '2023',
      description: '5000 çalışanlı kurumsal merkezde akıllı ofis ekosistemi çözümleri. Görüntülü konferans sistemleri, dijital toplantı odaları ve hibrit çalışma alanları.',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      results: [
        { metric: '%50', label: 'Toplantı Verimliliği' },
        { metric: '200+', label: 'Akıllı Ekran' },
        { metric: '%80', label: 'Uzaktan Çalışma' },
        { metric: '100%', label: 'Sistem Uptime' }
      ],
      technologies: ['Görüntülü Konferans', 'Dijital Toplantı Odaları', 'Akıllı Sınıf Çözümleri', 'Video Wall Center'],
      color: 'secondary'
    },
    {
      title: 'Sürdürülebilir Kampüs - Sıfır Karbon',
      location: 'İzmir, Türkiye',
      year: '2024',
      description: 'Çevre dostu kampüs projesi. Güneş enerjisi, akıllı enerji yönetimi ve karbon takip sistemi ile sürdürülebilir kampüs hedeflerine ulaşma.',
      image: 'https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      results: [
        { metric: '%60', label: 'Karbon Azaltımı' },
        { metric: '2MW', label: 'Güneş Enerjisi' },
        { metric: '%40', label: 'Su Tasarrufu' },
        { metric: 'LEED', label: 'Platinum Sertifika' }
      ],
      technologies: ['Güneş Panelleri', 'Enerji Depolama', 'Akıllı Şebeke', 'Karbon Takibi'],
      color: 'green'
    }
  ]

  const insights = [
    {
      title: '2030 Vizyonu',
      description: 'Intelligent Campus 2030 raporuna göre, gelecekteki kampüsler tamamen dijitalleşmiş, sürdürülebilir ve akıllı olacak.',
      icon: '🔮'
    },
    {
      title: 'Dijital Dönüşüm',
      description: 'Kampüslerin %80\'i 2030\'a kadar akıllı teknolojilerle donatılacak ve dijital iş birliği standart hale gelecek.',
      icon: '📱'
    },
    {
      title: 'Sürdürülebilirlik',
      description: 'Sıfır karbon hedefleri ile kampüsler çevre dostu enerji çözümlerine geçiş yapacak.',
      icon: '🌱'
    },
    {
      title: 'İnsan Odaklı',
      description: 'Teknoloji, öğrenci ve çalışan deneyimini artırmak için kullanılacak, insan merkezli tasarım öncelik olacak.',
      icon: '👥'
    }
  ]

  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: 'bg-neutral-100 text-neutral-600',
      secondary: 'bg-neutral-100 text-neutral-600',
      green: 'bg-neutral-100 text-neutral-600'
    }
    return colorMap[color as keyof typeof colorMap] || colorMap.primary
  }

  return (
    <section className="section-padding bg-white">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-24">
          <h2 className="font-semibold text-neutral-900 mb-6">
            Başarı Hikayeleri
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Intelligent Campus 2030 vizyonu doğrultusunda gerçekleştirdiğimiz 
            dönüşüm projeleri ve elde ettiğimiz sonuçlar.
          </p>
        </div>

        {/* Case Studies */}
        <div className="space-y-24 mb-24">
          {caseStudies.map((study, index) => (
            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
              {/* Content */}
              <div className={`space-y-8 ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                <div>
                  <div className="flex items-center mb-4">
                    <Calendar className="h-4 w-4 text-neutral-400 mr-2" />
                    <span className="text-sm text-neutral-500">{study.year}</span>
                    <span className="mx-2 text-neutral-300">•</span>
                    <span className="text-sm text-neutral-500">{study.location}</span>
                  </div>
                  <h3 className="text-2xl font-semibold text-neutral-900 mb-4">
                    {study.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed text-lg">
                    {study.description}
                  </p>
                </div>

                {/* Results */}
                <div className="grid grid-cols-2 gap-4">
                  {study.results.map((result, resultIndex) => (
                    <div key={resultIndex} className="bg-neutral-50 rounded-apple p-4 text-center">
                      <div className="text-2xl font-semibold text-neutral-900 mb-1">
                        {result.metric}
                      </div>
                      <div className="text-sm text-neutral-600">
                        {result.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Technologies */}
                <div>
                  <h4 className="font-semibold text-neutral-900 mb-4">Kullanılan Teknolojiler</h4>
                  <div className="flex flex-wrap gap-2">
                    {study.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className={`px-3 py-1.5 rounded-apple text-sm font-medium ${getColorClasses(study.color)}`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Image */}
              <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                <div className="relative w-full h-80 rounded-apple-xl overflow-hidden shadow-apple-lg">
                  <Image
                    src={study.image}
                    alt={study.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* 2030 Insights */}
        <div className="bg-gradient-to-br from-gray-50 to-primary-50 rounded-2xl p-8 md:p-12">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Intelligent Campus 2030 Vizyonu
            </h3>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Huawei Intelligent Campus 2030 raporundan alınan öngörüler ve 
              gelecekteki kampüs dönüşümü için stratejik yaklaşımımız.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {insights.map((insight, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm text-center">
                <div className="text-3xl mb-4">{insight.icon}</div>
                <h4 className="font-semibold text-gray-900 mb-2">{insight.title}</h4>
                <p className="text-sm text-gray-600">{insight.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
