import Link from 'next/link'
import Image from 'next/image'

import logoImg from '@/public/images/logo.png'

export default function Home() {
  return (
    <>
      <header className="header">
        <Link className="logo" href="/">
          <Image
            src={logoImg}
            alt="감정 일기장"
            width={100}
            height={100}
            priority
          />
          감정 일기장
        </Link>
        <div className="cta"></div>
      </header>
      <main>
        <section></section>
        <section></section>
      </main>
    </>
  )
}
