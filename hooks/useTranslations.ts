'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useState } from 'react'
import trTranslations from '@/locales/tr.json'
import enTranslations from '@/locales/en.json'
import zhTranslations from '@/locales/zh.json'

const translations = {
  tr: trTranslations,
  en: enTranslations,
  zh: zhTranslations,
}

export default function useTranslations() {
  const pathname = usePathname()
  const [mounted, setMounted] = useState(false)
  
  useEffect(() => {
    setMounted(true)
  }, [])
  
  const locale = (pathname.split('/')[1] || 'tr') as keyof typeof translations
  
  const t = (key: string) => {
    if (!mounted) return key
    
    const keys = key.split('.')
    let value: any = translations[locale]
    
    for (const k of keys) {
      value = value?.[k]
    }
    
    // Return empty string if value is empty, otherwise return value or key
    if (value === '') return ''
    return value || key
  }

  return { t, locale }
}
