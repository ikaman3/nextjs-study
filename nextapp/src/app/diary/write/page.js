import DiaryForm from '@/components/diary/diary-form'

export const metadata = {
  title: '일기 드개재',
  description: '일기를 써봐요',
}

export default function DiaryWritePage() {
  return (
    <main>
      <DiaryForm />
    </main>
  )
}
