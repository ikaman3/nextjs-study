'use client'

import { useFormStatus } from 'react-dom'

export default function DiaryFormSubmit() {
  const { pending, data } = useFormStatus()

  return (
    <>
      <button type="submit" disabled={pending}>
        {pending ? '저장 중...' : '저장하기'}
      </button>
      {pending && <p>저장하고 있습니다. 잠시만 기다려주세요...</p>}
      <p>{data ? `제목: \n${data?.get('title')}` : ''}</p>
      <p>{data ? `내용: \n${data?.get('body')}` : ''}</p>
    </>
  )
}
