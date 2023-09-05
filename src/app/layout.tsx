import './globals.css'

import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const titleHead = `Jon's portfolio`;
  return (
    <html lang="en">
      <head>
        <title>
          {titleHead}
        </title>

      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
