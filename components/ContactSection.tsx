'use client'

import { useState } from 'react'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  CheckCircle,
  Building2,
  MessageSquare,
  Calendar
} from 'lucide-react'
import useTranslations from '@/hooks/useTranslations'

export default function ContactSection() {
  const { t } = useTranslations()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: '',
    service: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)


  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000))
    
    setIsSubmitting(false)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({ name: '', email: '', company: '', message: '', service: '' })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <section id="contact" className="section-padding bg-gray-50">
      <div className="container-max">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-neutral-900 mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-neutral-600 max-w-3xl mx-auto">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="mb-6">
              <h3 className="text-2xl font-semibold text-neutral-900 mb-2">
                {t('contact.form.title')}
              </h3>
              <p className="text-neutral-600">
                {t('contact.form.description')}
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-xl font-semibold text-neutral-900 mb-2">
                  {t('contact.form.success.title')}
                </h4>
                <p className="text-neutral-600">
                  {t('contact.form.success.message')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                      {t('contact.form.fields.name')} *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-apple focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-colors"
                      placeholder={t('contact.form.placeholders.name')}
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                      {t('contact.form.fields.email')} *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-neutral-300 rounded-apple focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-colors"
                      placeholder={t('contact.form.placeholders.email')}
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                    {t('contact.form.fields.company')}
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                    placeholder={t('contact.form.placeholders.company')}
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                    {t('contact.form.fields.service')}
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                  >
                    <option value="">{t('contact.form.placeholders.service')}</option>
                    {Array.isArray(t('contact.form.services')) ? t('contact.form.services').map((service: string, index: number) => (
                      <option key={index} value={service}>
                        {service}
                      </option>
                    )) : null}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                    {t('contact.form.fields.message')} *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-neutral-300 rounded-apple focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-colors resize-none"
                    placeholder={t('contact.form.placeholders.message')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neutral-700 text-white hover:bg-neutral-600 font-medium py-3 px-8 rounded-apple transition-colors duration-200 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed border border-neutral-600"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                      {t('contact.form.submitting')}
                    </>
                  ) : (
                    <>
                      <Send className="h-4 w-4 mr-2 group-hover:translate-x-1 transition-transform" />
                      {t('contact.form.submit')}
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">
                İletişim Bilgileri
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <MapPin className="h-6 w-6 text-neutral-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Adres</h4>
                    <p className="text-neutral-600">
                      Maslak Mahallesi, Büyükdere Caddesi<br />
                      No: 123, Sarıyer/İstanbul
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <Phone className="h-6 w-6 text-neutral-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Telefon</h4>
                    <p className="text-neutral-600">
                      +90 (212) 555 0123<br />
                      +90 (212) 555 0124
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-6 w-6 text-neutral-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">E-posta</h4>
                    <p className="text-neutral-600">
                      info@smartcampus.com<br />
                      projeler@smartcampus.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <Clock className="h-6 w-6 text-neutral-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1">Çalışma Saatleri</h4>
                    <p className="text-neutral-600">
                      Pazartesi - Cuma: 09:00 - 18:00<br />
                      Cumartesi: 09:00 - 14:00
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-neutral-50 rounded-apple-xl p-8">
              <h3 className="text-xl font-semibold text-neutral-900 mb-4">
                Hızlı İletişim
              </h3>
              <p className="text-neutral-600 mb-6">
                Acil durumlar için doğrudan iletişim kanallarımızı kullanabilirsiniz.
              </p>
              
              <div className="space-y-4">
                <a
                  href="tel:+902125550123"
                  className="flex items-center p-4 bg-white rounded-apple shadow-apple hover:shadow-apple-lg transition-shadow group"
                >
                  <Phone className="h-5 w-5 text-neutral-600 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold text-neutral-900">Hemen Ara</div>
                    <div className="text-sm text-neutral-600">+90 (212) 555 0123</div>
                  </div>
                </a>
                
                <a
                  href="mailto:info@smartcampus.com"
                  className="flex items-center p-4 bg-white rounded-apple shadow-apple hover:shadow-apple-lg transition-shadow group"
                >
                  <Mail className="h-5 w-5 text-neutral-600 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold text-neutral-900">E-posta Gönder</div>
                    <div className="text-sm text-neutral-600">info@smartcampus.com</div>
                  </div>
                </a>
                
                <a
                  href="#contact"
                  className="flex items-center p-4 bg-white rounded-apple shadow-apple hover:shadow-apple-lg transition-shadow group"
                >
                  <Calendar className="h-5 w-5 text-neutral-600 mr-3 group-hover:scale-110 transition-transform" />
                  <div>
                    <div className="font-semibold text-neutral-900">Randevu Al</div>
                    <div className="text-sm text-neutral-600">Online randevu sistemi</div>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
