import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Emotion Diary',
  description: 'Next.js 감정 일기장 프론트엔드 프로젝트',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
