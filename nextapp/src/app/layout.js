import './globals.css'

export const metadata = {
  title: 'My Counter',
  description: '졸려',
}

export default function RootLayout({ children }) {
  return (
    <html>
      <body>{children}</body>
    </html>
  )
}
