import Link from 'next/link'

// @를 사용하여 자동적으로 프로젝트의 root 디렉터리를 인용할 수 있다.
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'

export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <img src={logoImg.src} alt="A plate with food on it" />
        NextLevel Food
      </Link>

      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/meals">Brows Meals</Link>
          </li>
          <li>
            <Link href="/community">Foodies Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}
