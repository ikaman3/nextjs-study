import { getDiaryAction } from '@/actions/diary-actions'
import DiaryEditForm from '@/components/diary/diary-edit-form'
import { isObjEmpty } from '@/lib/utils'

export async function generateMetadata({ params }) {
  const diaryId = params.slug
  const diary = await getDiaryAction(diaryId)

  if (!diary || isObjEmpty(diary)) {
    notFound()
  }

  return {
    title: `${diary.title} 수정 중`,
    description: `${diary.title} 수정 페이지`,
  }
}

export default async function DiaryEditPage({ params }) {
  const diary = await getDiaryAction(params.slug)

  return (
    <main>
      <DiaryEditForm diary={diary} />
    </main>
  )
}
