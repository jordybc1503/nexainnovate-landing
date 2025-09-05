import type { Metadata } from 'next'
import { Poppins, Inter } from 'next/font/google'
import '../styles/globals.css'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import { Analytics } from '@vercel/analytics/react'

const poppins = Poppins({ subsets: ['latin'], weight: ['600','700'], variable: '--font-poppins' })
const inter = Inter({ subsets: ['latin'], weight: ['400','500'], variable: '--font-inter' })

export const metadata: Metadata = {
  title: { default: 'Nexa Innovate', template: '%s · Nexa Innovate' },
  description: 'Diseñamos el futuro digital de tu empresa con innovación y tecnología inteligente.',
  icons: [{ rel: 'icon', url: '/icons/favicon.ico' }]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className={`${poppins.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-bgBase text-textPrimary">
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
        <Analytics />
      </body>
    </html>
  )
}
