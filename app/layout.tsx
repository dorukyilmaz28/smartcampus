import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Future Smart Campus Solutions | Intelligent Campus Consulting & Integration',
  description: 'Leading consultancy and integration partner for Future Smart Campus solutions. Digital transformation, smart collaboration, and zero-carbon campus implementations.',
  keywords: 'future smart campus, intelligent campus, digital transformation, smart collaboration, IoT sensing, 5G, zero-carbon campus, enterprise solutions',
  authors: [{ name: 'Future Smart Campus Solutions' }],
  openGraph: {
    title: 'Future Smart Campus Solutions | Intelligent Campus Consulting',
    description: 'Leading consultancy and integration partner for Future Smart Campus solutions.',
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
