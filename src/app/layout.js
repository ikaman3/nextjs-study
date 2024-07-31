import Link from 'next/link'
import './globals.css'

export const metadata = {
  title: '갬정 일기쟁',
  description: '내가 만듦',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko-KR">
      <body>
        <h1>
          <Link href="/">갬정 일기쟁</Link>
        </h1>
        <ol>
          <ul>
            <li>
              <Link href="/diary">일기 목록</Link>
            </li>
            <li>
              <Link href="/diary/write">일기 쓰기</Link>
            </li>
            <li>
              <Link href="/signup">계정 만들기</Link>
            </li>
            <li>
              <Link href="/login">로그인</Link>
            </li>
          </ul>
        </ol>
        {children}
      </body>
    </html>
  )
}
