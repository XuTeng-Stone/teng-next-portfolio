import type { Metadata } from 'next'
import './globals.css' // 👈 最关键的就是这一行！

export const metadata: Metadata = {
  title: 'Teng.dev - Portfolio',
  description: 'Teng Xu Portfolio',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}