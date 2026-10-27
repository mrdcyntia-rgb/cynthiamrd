import type { Metadata, Viewport } from 'next'
import '../globals.css'

export const metadata: Metadata = {
  title: 'Portfolio | Sales & Operations',
  description: 'Professional portfolio for Sales & Telemarketing and Administration & Operations.',
  applicationName: 'SMH Portfolio',
  appleWebApp: { capable: true, statusBarStyle: 'default', title: 'SMH Portfolio' },
  icons: {
    icon: [
      { url: '/icons/sintia-photo-192.png', type: 'image/png', sizes: '192x192' },
      { url: '/icons/sintia-photo-512.png', type: 'image/png', sizes: '512x512' },
    ],
    shortcut: [{ url: '/icons/sintia-photo-192.png', type: 'image/png' }],
    apple: [{ url: '/icons/sintia-photo-192.png', type: 'image/png', sizes: '192x192' }],
  },
  manifest: '/manifest.webmanifest',
}

export const viewport: Viewport = {
  themeColor: '#0755c7',
  width: 'device-width',
  initialScale: 1,
  viewportFit: 'cover',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body>{children}</body></html>
}
