// use client: useState 처럼 Client Component가 필요한 경우 최상단에 작성

'use client'

import { useCallback, useState } from 'react'

import Controller from './_components/Controller'
import Viewer from './_components/Viewer'

export default function Home() {
  const [count, setCount] = useState(0)

  // 버튼에 표시될 텍스트와 클릭했을 때 반영할 값을 담는 배열
  // 배열 원소 순서: 버튼 배치 순서
  // number type 이외의 값을 넣을 경우 작동을 보장하지 않음
  const buttonNumbers = [-1, -10, -100, 100, 10, 1]

  // 값을 받아서 count 상태 변수를 업데이트하는 이벤트 핸들러
  const handleCount = useCallback(
    (value) => {
      setCount(count + value)
    },
    [count]
  )

  return (
    <div className="Counter">
      <h1>Simple Counter</h1>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller buttonNumbers={buttonNumbers} onCountChange={handleCount} />
      </section>
    </div>
  )
}
