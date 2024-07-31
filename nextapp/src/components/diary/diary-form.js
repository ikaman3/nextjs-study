'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { createDiaryAction } from '@/actions/diary-actions'
import DiaryFormSubmit from './diary-form-submit'

function DiaryFormTitleInput({ state }) {
  const { pending } = useFormStatus()

  return (
    <>
      <p>
        <label htmlFor="title">제목 </label>
        <input type="text" id="title" name="title" readOnly={pending} />
      </p>
      {!state.isSuccess && <p>{state.message}</p>}
    </>
  )
}

function DiaryFormBodyInput() {
  const { pending } = useFormStatus()

  return (
    <p>
      <label htmlFor="body">내용 </label>
      <textarea id="body" name="body" rows="10" required readOnly={pending} />
    </p>
  )
}

export default function DiaryForm() {
  const [state, formAction] = useFormState(createDiaryAction, {
    isSuccess: true,
    message: null,
  })

  return (
    <form action={formAction}>
      <h2>Create</h2>
      <DiaryFormTitleInput state={state} />
      <DiaryFormBodyInput />
      <DiaryFormSubmit />
    </form>
  )
}
