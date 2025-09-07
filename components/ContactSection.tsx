'use client'

import { useState } from 'react'
import { 
  Mail,
  Send,
  CheckCircle,
  Building2,
  MessageSquare
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
  const [submitError, setSubmitError] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError('')
    
    // Form validation
    if (!formData.name.trim()) {
      setSubmitError('Ad soyad alanı zorunludur.')
      setIsSubmitting(false)
      return
    }
    
    if (!formData.email.trim()) {
      setSubmitError('E-posta alanı zorunludur.')
      setIsSubmitting(false)
      return
    }
    
    if (!formData.message.trim()) {
      setSubmitError('Mesaj alanı zorunludur.')
      setIsSubmitting(false)
      return
    }
    
    // Email format validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(formData.email)) {
      setSubmitError('Geçerli bir e-posta adresi giriniz.')
      setIsSubmitting(false)
      return
    }
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (response.ok) {
        setIsSubmitted(true)
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSubmitted(false)
          setFormData({ name: '', email: '', company: '', message: '', service: '' })
        }, 3000)
      } else {
        setSubmitError(result.error || 'Form submission failed. Please try again.')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitError('Network error. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
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
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-neutral-900 mb-3 sm:mb-4">
            {t('contact.title')}
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-neutral-600 max-w-3xl mx-auto px-4">
            {t('contact.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Contact Form */}
          <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
            <div className="mb-4 sm:mb-6">
              <h3 className="text-xl sm:text-2xl font-semibold text-neutral-900 mb-2">
                {t('contact.form.title')}
              </h3>
              <p className="text-sm sm:text-base text-neutral-600">
                {t('contact.form.description')}
              </p>
            </div>

            {isSubmitted ? (
              <div className="text-center py-8 sm:py-12">
                <CheckCircle className="h-12 w-12 sm:h-16 sm:w-16 text-green-500 mx-auto mb-4" />
                <h4 className="text-lg sm:text-xl font-semibold text-neutral-900 mb-2">
                  {t('contact.form.success.title')}
                </h4>
                <p className="text-sm sm:text-base text-neutral-600">
                  {t('contact.form.success.message')}
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                {submitError && (
                  <div className="bg-red-50 border border-red-200 rounded-apple p-4">
                    <p className="text-red-600 text-sm">{submitError}</p>
                  </div>
                )}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-neutral-300 rounded-apple focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-colors text-sm sm:text-base"
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
                      className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-neutral-300 rounded-apple focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-colors text-sm sm:text-base"
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
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 border border-neutral-300 rounded-apple focus:ring-2 focus:ring-neutral-500 focus:border-transparent transition-colors resize-none text-sm sm:text-base"
                    placeholder={t('contact.form.placeholders.message')}
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-neutral-700 text-white hover:bg-neutral-600 font-medium py-2.5 sm:py-3 px-6 sm:px-8 rounded-apple transition-colors duration-200 flex items-center justify-center group disabled:opacity-50 disabled:cursor-not-allowed border border-neutral-600 text-sm sm:text-base"
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
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Details */}
            <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
              <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-4 sm:mb-6">
                {t('contact.info.title')}
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                <div className="flex items-start space-x-3 sm:space-x-4">
                  <div className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-neutral-100 rounded-lg flex items-center justify-center">
                    <Mail className="h-5 w-5 sm:h-6 sm:w-6 text-neutral-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-neutral-900 mb-1 text-sm sm:text-base">{t('contact.info.email.title')}</h4>
                    <p className="text-neutral-600 text-sm sm:text-base">
                      {t('contact.info.email.value').split('\n').map((line: string, index: number) => (
                        <span key={index}>
                          {line}
                          {index < t('contact.info.email.value').split('\n').length - 1 && <br />}
                        </span>
                      ))}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
