import type { Metadata } from 'next'
import './globals.css'
import LenisProvider from '../components/Lenis'

export const metadata: Metadata = {
  title: 'Mujahidul Islam — Full Stack Developer',
  description: 'Full Stack Developer — Next.js, Node.js, PostgreSQL. Dhaka, Bangladesh.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  )
}
