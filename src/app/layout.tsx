import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'DotOne Homepage',
  description: 'DotOne Homepage task for the role of Frontend Developer',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='fa-IR' dir='rtl'>
      <body>{children}</body>
    </html>
  )
}
