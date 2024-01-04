import { Inter } from 'next/font/google'
import './globals.css'
import GAnalytics from '@/components/ganalytics'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SchoolConvoy - Building the future of education in Africa',
  description: 'Building the future of education in Africa',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <GAnalytics gaMeasurementId="G-FRHF59WSJT" />
      <body className={inter.className}>{children}</body>
    </html>
  )
}
