'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { delay } from '@/lib/utils'

export async function getAllDiarysAction() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/diarys`)
  const topics = await response.json()

  revalidatePath('/diary')
  return topics
}

// default로 해도 서버에 저장된 캐시를 사용함. no-cache로 설정해야 리소스를 다운로드하고 캐시가 업데이트됨
// Next.js는 fetch API를 직접 확장해서 사용하기 때문에 default cache 옵션은 force-cache다.
// Next는 fetch로 가져온 데이터를 캐싱하는데 시간을 이용한 재검증, 태그를 이용한 수동 재검증 등의 수단을 사용하지 않으면
// 서버를 다시 빌드해서 재시작할 때까지 캐싱된 데이터는 사라지지 않는다.
// 여기까지는 Next.js의 문제인줄 알았는데...
// 원인 분석: Link 컴포넌트에서 사용하는 URL path를 기준으로 캐싱하는 줄 알고 slug를 id + title 조합으로 변경해보았으나 효과가 없었다.
// 그런데 json-server의 id 값을 랜덤 문자열로 바꾸니 정상적으로 동작했다. fetch 함수에 전달하는 URL이 중복되지 않아서 그런듯하다.
// 추측한 근거: Next 공식문서에서 React의 Request Memoization이 동일한 render pass로 전달한 요청을 메모리에 저장하고 캐시로 사용한다.
// 결론: React의 fetch API는 Request Memoization이라고 불리는 기능이 있다. 동일한 URL과 옵션으로 요청하면 캐싱된 데이터를 제공한다.
//       하필이면 json-server는 마지막 데이터의 id값에서 1증가 시키는 방식이라 삭제된 id와 중복될 가능성이 있었고 그로인해 fetch API에 전달한
//       URL이 겹치면서 잘못된 캐싱 데이터가 반환되는 것이었다.
// 해결방법:
// 1. json-server의 id 값을 랜덤한 문자열로 사용 - 별루임
// 2. fetch API의 옵션에 next 프로퍼티를 생성해서 cache 옵션을 설정 - 간단하지만 다른 fetch랑 생긴게 달라져서 맘에 안들어 ㅇㅅㅇ
// 3. fetch API의 옵션에 next 프로퍼티를 생성해서 tag를 활용한 수동 재검증 - 서버 액션을 사용한 곳에 일일이 작성해야 함
// 4. fetch API의 옵션에 next 프로퍼티를 생성해서 시간에 따른 재검증 - 설정한 시간이 지나야 최신 데이터를 표시함
// 5. revalidatePath(`/read/${id}`)으로 Server Action에서 재검증 - 이게 가장 간편하고 가독성도 좋아서 채택함
export async function getDiaryAction(id) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/diarys/${id}`,
  )
  const topic = await response.json()

  revalidatePath(`/diary/${id}`)
  return topic
}

export async function createDiaryAction(prevState, formData) {
  if (!formData || !formData.get('title') || formData.get('title') === '') {
    return {
      isSuccess: false,
      message: '제목을 입력하시오.',
    }
  }

  await delay(4000)

  const body = JSON.stringify({
    title: formData.get('title'),
    body: formData.get('body'),
  })
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/diarys`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
  })

  revalidatePath(`/diary`)
  redirect(`/diary`)
}

export async function updateDiaryAction(prevState, formData) {
  if (!formData || !formData.get('title') || formData.get('title') == '') {
    return {
      isSuccess: false,
      message: '제목을 입력하시오.',
    }
  }

  await delay(4000)

  const id = formData.get('id')
  const body = JSON.stringify({
    title: formData.get('title'),
    body: formData.get('body'),
  })
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/diarys/${id}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
  })

  revalidatePath(`/diary/${id}`)
  redirect(`/diary/${id}`)
}

export async function deleteDiaryAction(id) {
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/diarys/${id}`, {
    method: 'DELETE',
  })

  revalidatePath('/diary')
  redirect('/diary')
}
