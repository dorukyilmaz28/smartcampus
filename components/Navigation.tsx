'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, Users, MessageSquare, Home, Building2 } from 'lucide-react'
import useTranslations from '@/hooks/useTranslations'
import LanguageSwitcher from './LanguageSwitcher'
import Logo from './Logo'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const { t } = useTranslations()

  const navigation = [
    { name: t('nav.home'), href: '#home', icon: Home },
    { name: t('nav.solutions'), href: '#solutions', icon: Building2 },
    { name: t('nav.collaboration'), href: '#collaboration', icon: Users },
    { name: t('nav.contact'), href: '#contact', icon: MessageSquare },
  ]

  return (
    <nav className="bg-white/80 backdrop-blur-xl sticky top-0 z-50 border-b border-neutral-200/50">
      <div className="container-max">
        <div className="flex justify-between items-center h-20 px-4">
          {/* Logo */}
          <Logo variant="full" size="sm" />

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-3 rounded-apple font-semibold text-base transition-all duration-300 hover:bg-neutral-100 hover:text-neutral-900 text-neutral-700"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Language Switcher and CTA Button */}
          <div className="hidden md:flex items-center space-x-4">
            <LanguageSwitcher />
            <Link
              href="#contact"
              className="bg-neutral-700 text-white hover:bg-neutral-600 font-semibold py-3 px-6 rounded-apple transition-colors duration-200 border border-neutral-600 text-base"
            >
              {t('nav.getQuote')}
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-apple text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-neutral-200 transition-all duration-300"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-6 space-y-2 bg-white/95 backdrop-blur-sm border-t border-gray-100">
              {navigation.map((item) => {
                const Icon = item.icon
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="flex items-center text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 px-4 py-3 text-base font-medium rounded-apple transition-all duration-300"
                    onClick={() => setIsOpen(false)}
                  >
                    <Icon className="h-5 w-5 mr-3" />
                    {item.name}
                  </Link>
                )
              })}
              <div className="pt-4 space-y-4 border-t border-gray-100">
                <div className="px-4">
                  <LanguageSwitcher />
                </div>
                <Link
                  href="#contact"
                  className="bg-neutral-700 text-white hover:bg-neutral-600 font-medium py-3 px-6 rounded-apple transition-colors duration-200 w-full text-center block mx-4 border border-neutral-600"
                  onClick={() => setIsOpen(false)}
                >
                  {t('nav.getQuote')}
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
