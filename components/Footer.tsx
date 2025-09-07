'use client'

import { Mail } from 'lucide-react'
import useTranslations from '@/hooks/useTranslations'

export default function Footer() {
  const { t } = useTranslations()
  return (
    <footer className="bg-neutral-900 text-white">
      <div className="container-max section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="space-y-3">
              <div className="text-white">
                <span className="font-bold text-2xl">SmartCampus</span>
                <span className="font-bold text-xl opacity-90 ml-1">5G</span>
              </div>
            </div>
            <p className="text-neutral-300 text-sm leading-relaxed max-w-xs">
              {t('footer.description')}
            </p>
          </div>

          {/* Solutions */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">{t('footer.solutions')}</h3>
            <ul className="space-y-4 text-sm text-neutral-300">
              {Array.isArray(t('footer.solutionsList')) ? t('footer.solutionsList').map((solution: string, index: number) => (
                <li key={index} className="hover:text-white transition-colors cursor-pointer">{solution}</li>
              )) : (
                <>
                  <li className="hover:text-white transition-colors cursor-pointer">Dijital Platform</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Kablosuz Akıllı Kampüs Ağı</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Akıllı Binalar</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Siber Güvenlik</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Sıfır Karbon</li>
                </>
              )}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">{t('footer.services')}</h3>
            <ul className="space-y-4 text-sm text-neutral-300">
              {Array.isArray(t('footer.servicesList')) ? t('footer.servicesList').map((service: string, index: number) => (
                <li key={index} className="hover:text-white transition-colors cursor-pointer">{service}</li>
              )) : (
                <>
                  <li className="hover:text-white transition-colors cursor-pointer">Danışmanlık</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Sistem Entegrasyonu</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Proje Yönetimi</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Teknik Destek</li>
                  <li className="hover:text-white transition-colors cursor-pointer">Eğitim ve Sertifikasyon</li>
                </>
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold text-white">{t('footer.contact')}</h3>
            <div className="space-y-4 text-sm text-neutral-300">
              <div className="flex items-center hover:text-white transition-colors cursor-pointer">
                <Mail className="h-5 w-5 mr-3 text-neutral-400" />
                <span>{t('footer.contactInfo.email')}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-neutral-800 mt-16 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-neutral-400">
              {t('footer.copyright')}
            </p>
            <div className="flex space-x-8">
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