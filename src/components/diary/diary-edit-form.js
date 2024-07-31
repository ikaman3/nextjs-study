'use client'

import { useFormState, useFormStatus } from 'react-dom'
import { updateDiaryAction } from '@/actions/diary-actions'
import DiaryFormSubmit from './diary-form-submit'

function DiaryEditFormTitleInput({ state, diary }) {
  const { pending } = useFormStatus()

  return (
    <>
      <p>
        <label htmlFor="title">제목 </label>
        <input
          type="text"
          id="title"
          name="title"
          defaultValue={diary.title}
          required
          readOnly={pending}
        />
      </p>
      {!state.isSuccess && <p>{state.message}</p>}
    </>
  )
}

function DiaryEditFormBodyInput({ diary }) {
  const { pending } = useFormStatus()

  return (
    <p>
      <label htmlFor="body">내용 </label>
      <textarea
        id="body"
        name="body"
        rows="10"
        defaultValue={diary.body}
        required
        readOnly={pending}
      />
    </p>
  )
}

export default function DiaryEditForm({ diary }) {
  const [state, formAction] = useFormState(updateDiaryAction, {
    isSuccess: true,
    message: null,
  })

  return (
    <form action={formAction}>
      <h2>Update</h2>
      <input type="hidden" id="id" name="id" value={diary.id} readOnly />
      <DiaryEditFormTitleInput state={state} diary={diary} />
      <DiaryEditFormBodyInput diary={diary} />
      <DiaryFormSubmit />
    </form>
  )
}
