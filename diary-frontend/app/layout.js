import { Inter } from 'next/font/google'
import './globals.css'
import { node } from 'prop-types'
import MainHeader from '@/components/main-header/main-header'

const inter = Inter({
  subsets: ['latin'],
})

export const metadata = {
  title: 'Emotion Diary',
  description: 'Next.js 감정 일기장 프론트엔드 프로젝트',
}

export default function RootLayout({ children = node }) {
  return (
    <html lang="ko-KR">
      <body className={inter.className}>
        <MainHeader />
        <hr />
        {children}
        <hr />
        <footer>
          <h2>Footer</h2>
          <p>푸터임</p>
        </footer>
      </body>
    </html>
  )
}

RootLayout.propTypes = {
  children: node,
}
