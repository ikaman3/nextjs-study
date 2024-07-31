'use client'

import { useFormStatus } from 'react-dom'

export default function SignFormSubmit() {
  const { pending, data } = useFormStatus()

  return (
    <>
      <button type="submit" disabled={pending}>
        {pending ? 'Submitting...' : 'Submit'}
      </button>
      {pending && <p>제출 중입니다. 잠시만 기다려주세요...</p>}
      <p>{data ? `Email: \n${data?.get('email')}` : ''}</p>
      <p>{data ? `Password: \n${data?.get('password')}` : ''}</p>
    </>
  )
}
