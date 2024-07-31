'use client'

import { deleteDiaryAction } from '@/actions/diary-actions'

export default function DiaryDeleteButton({ id }) {
  function deleteDiaryHandler() {
    deleteDiaryAction(id)
  }

  return (
    <button type="button" onClick={deleteDiaryHandler}>
      내 일기 구려 ㅠㅠㅠ
    </button>
  )
}
