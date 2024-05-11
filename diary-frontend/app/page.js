import Link from 'next/link'

export default function Home() {
  return (
    <>
      <header>
        <div className="slideshow">
          <p>대충 그럴싸한 이미지 슬라이드</p>
        </div>
        <div>
          <div className="hero">
            <h1>랜딩페이지</h1>
            <p>아아아ㅏㅇㅇㅇ아ㅏㅏㅏㄴㅁ이ㅏ임;</p>
          </div>
          <div className="cta">
            <Link href="/write">일기쓰기 </Link>
            <Link href="/diarys">일기보기</Link>
          </div>
        </div>
      </header>
      <hr />
      <main>
        <section>
          <h1>Main</h1>
        </section>
      </main>
    </>
  )
}
