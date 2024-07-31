import { getAllDiarysAction } from '@/actions/diary-actions'

import Link from 'next/link'

export const metadata = {
  title: '일기 목록',
  description: '그동안 작성한 일기 목록',
}

export default async function DiaryPage() {
  const diarys = await getAllDiarysAction()

  return (
    <ol>
      {diarys.map((diary) => (
        <li key={diary.id}>
          <Link href={`/diary/${diary.id}`}>{diary.title}</Link>
        </li>
      ))}
    </ol>
  )
}
