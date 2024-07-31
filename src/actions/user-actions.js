'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

export async function signupAction(prevState, formData) {
  if (!formData || !formData.get('email') || formData.get('email') === '') {
    return {
      isSuccess: false,
      message: '이메일을 입력하시오.',
    }
  }

  const body = JSON.stringify({
    email: formData.get('email'),
    password: formData.get('password'),
  })
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
  })

  revalidatePath('/')
  redirect('/')
}

export async function loginAction(prevState, formData) {
  if (!formData || !formData.get('email') || formData.get('email') === '') {
    return {
      isSuccess: false,
      message: '이메일을 입력하시오.',
    }
  }

  const body = JSON.stringify({
    email: formData.get('email'),
    password: formData.get('password'),
  })
  await fetch(`${process.env.NEXT_PUBLIC_API_URL}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: body,
  })

  revalidatePath('/')
  redirect('/')
}
