'use client'

import { Mail, Phone, MapPin } from 'lucide-react'
import useTranslations from '@/hooks/useTranslations'
import Logo from './Logo'

export default function Footer() {
  const { t } = useTranslations()
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <Logo variant="full" size="lg" className="text-white" />
            <p className="text-neutral-300 text-sm leading-relaxed">
              {t('footer.description')}
            </p>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.solutions')}</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Akıllı Kampüs Platformu</li>
              <li>IoT Algılama Sistemleri</li>
              <li>Akıllı Bina Yönetimi</li>
              <li>Dijital İş Birliği</li>
              <li>Sıfır Karbon Kampüs</li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.services')}</h3>
            <ul className="space-y-2 text-sm text-neutral-300">
              <li>Danışmanlık</li>
              <li>Sistem Entegrasyonu</li>
              <li>Proje Yönetimi</li>
              <li>Teknik Destek</li>
              <li>Eğitim ve Sertifikasyon</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.contact')}</h3>
            <div className="space-y-3 text-sm text-neutral-300">
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-neutral-400" />
                <span>İstanbul, Türkiye</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-neutral-400" />
                <span>+90 (212) 555 0123</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-neutral-400" />
                <span>info@smartcampus.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-neutral-400">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">
                {t('footer.privacy')}
              </a>
              <a href="#" className="text-neutral-400 hover:text-white text-sm transition-colors">
                {t('footer.terms')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
