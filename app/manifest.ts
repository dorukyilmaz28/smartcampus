import { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Smart Campus Solutions - Akıllı Kampüs Danışmanlığı',
    short_name: 'Smart Campus',
    description: 'Akıllı kampüs çözümleri, dijital dönüşüm ve sürdürülebilir kampüs danışmanlığı',
    start_url: '/',
    display: 'standalone',
    background_color: '#ffffff',
    theme_color: '#3b82f6',
    icons: [
      {
        src: '/icon-192x192.png',
        sizes: '192x192',
        type: 'image/png',
      },
      {
        src: '/icon-512x512.png',
        sizes: '512x512',
        type: 'image/png',
      },
    ],
  }
}
