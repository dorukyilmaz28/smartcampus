import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Smart Campus 5G | Intelligent Campus Consulting & Integration',
  description: 'Leading consultancy and integration partner for Smart Campus 5G solutions. Digital transformation, smart collaboration, and zero-carbon campus implementations.',
  keywords: 'smart campus 5G, intelligent campus, digital transformation, smart collaboration, IoT sensing, 5G, zero-carbon campus, enterprise solutions',
  authors: [{ name: 'Smart Campus 5G' }],
  openGraph: {
    title: 'Smart Campus 5G | Intelligent Campus Consulting',
    description: 'Leading consultancy and integration partner for Smart Campus 5G solutions.',
    type: 'website',
    locale: 'en_US',
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
}

export const viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
      </body>
    </html>
  )
}
