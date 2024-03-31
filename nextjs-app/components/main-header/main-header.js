import Link from 'next/link'
import Image from 'next/image'
import NavLink from './nav-link'

// @를 사용하여 자동적으로 프로젝트의 root 디렉터리를 인용할 수 있다.
import MainHeaderBackground from './main-header-background'
import logoImg from '@/assets/logo.png'
import classes from './main-header.module.css'

export default function MainHeader() {
  return (
    <>
      <MainHeaderBackground />
      <header className={classes.header}>
        <Link className={classes.logo} href="/">
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>

        <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </>
  )
}
