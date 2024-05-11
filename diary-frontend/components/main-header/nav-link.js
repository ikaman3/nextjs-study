'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { node, string } from 'prop-types'

export default function NavLink({ href = string, children = node }) {
  const path = usePathname()
  return <Link href={href}>{children}</Link>
}

NavLink.propTypes = {
  href: string,
  children: node,
}
