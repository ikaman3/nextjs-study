export default function WritePage() {
  return (
    <>
      <header>
        <h1>일기쓰시오</h1>
      </header>
      <main>
        <form>
          <div className="row">
            <p>
              <label htmlFor="name">이름 </label>
              <input type="text" id="name" name="name" />
            </p>
            <p>
              <label htmlFor="date">날짜 </label>
              <input type="date" id="date" name="date" />
            </p>
          </div>
          <p>
            <p>내용</p>
            <label htmlFor="body" hidden>
              내용
            </label>
            <textarea id="body" name="body" />
          </p>
        </form>
      </main>
    </>
  )
}
