import { getDiaryAction } from '@/actions/diary-actions'
import DiaryDeleteButton from '@/components/diary/diary-delete-button'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { isObjEmpty } from '@/lib/utils'

export async function generateMetadata({ params }) {
  const diaryId = params.slug
  const diary = await getDiaryAction(diaryId)

  if (!diary || isObjEmpty(diary)) {
    notFound()
  }

  return {
    title: diary.title,
    description: `${diary.title} 페이지`,
  }
}

export default async function DiaryDetailPage({ params }) {
  const diaryId = params.slug
  const diary = await getDiaryAction(diaryId)

  console.log(diary)
  if (!diary || isObjEmpty(diary)) {
    notFound()
  }

  return (
    <>
      <h2>{diary.title}</h2>
      <p>{diary.body}</p>
      <button type="button">
        <Link href={`/diary/edit/${diary.id}`}>내 일기 이상해ㅠㅠ</Link>
      </button>
      <DiaryDeleteButton id={diary.id} />
    </>
  )
}
