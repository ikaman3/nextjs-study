import PropTypes from 'prop-types'

import './globals.css'

export const metadata = {
  title: 'nextapp',
  description: '졸려',
}

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  )
}

RootLayout.propTypes = {
  children: PropTypes.node,
}

RootLayout.defaultProps = {
  children: <div className="Counter" />,
}
