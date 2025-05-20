import './globals.css';
import Navbar from './components/Navbar/index';
import Footer from './components/Footer/index';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'S.M. Travel Co',
  description: 'Making your travel dreams a reality, one trip at a time.',
  keywords: ['travel', 'college formals', 'spring break', 'weekend trips', 'custom travel'],
  authors: [{ name: 'SM Travel Company' }],
  creator: 'SM Travel Company',
  publisher: 'SM Travel Company',
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon.png', type: 'image/png' }
    ],
    apple: { url: '/apple-icon.png', type: 'image/png' }
  },
  viewport: { width: 'device-width', initialScale: 1 },
  themeColor: '#5e2b0c',
  formatDetection: {
    telephone: true,
    date: true,
    address: true,
    email: true,
    url: true
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://smtravelco.com',
    title: 'S.M. Travel Co - Your Travel Dreams, Our Expertise',
    description: 'Making your travel dreams a reality, one trip at a time.',
    siteName: 'SM Travel Company'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  )
}