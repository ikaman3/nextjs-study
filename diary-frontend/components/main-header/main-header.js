import Image from 'next/image'
import Link from 'next/link'
import logoImg from '@/public/images/logo.png'
import NavLink from './nav-link'

export default function MainHeader() {
  return (
    <header>
      <Link href="/">
        <Image
          src={logoImg}
          alt="감정 일기장"
          width={50}
          height={50}
          priority
        />
        감정일기장
      </Link>

      <nav>
        {/* <ul>
          <li>
            <NavLink href="/create">생성</NavLink>
          </li>
          <li>
            <NavLink href="/list">목록</NavLink>
          </li>
        </ul> */}
      </nav>
    </header>
  )
}
