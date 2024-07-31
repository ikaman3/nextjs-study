import Image from 'next/image'

export default function RootPage() {
  const filename = 'test-문서.hwp'
  const fileURL = `http://localhost:3000/api/${filename}`

  return (
    <>
      <h2>Unwelcome</h2>
      <p>Hell!</p>
      <Image
        src="/apple.png"
        alt="Apple logo"
        width="100"
        height="100"
        priority
      />
      <a href={fileURL} download={filename}>
        {filename}
      </a>
    </>
  )
}
