'use client'

import { signupAction } from '@/actions/user-actions'
import { useFormState, useFormStatus } from 'react-dom'
import SignupFormSubmit from './sign-form-submit'

function SignupFormEmailInput({ state }) {
  const { pending } = useFormStatus()

  return (
    <>
      <p>
        <label htmlFor="email">Email </label>
        <input type="email" id="email" name="email" readOnly={pending} />
      </p>
      {!state.isSuccess && <p>{state.message}</p>}
    </>
  )
}

function SignupFormPasswordInput() {
  const { pending } = useFormStatus()

  return (
    <p>
      <label htmlFor="password">Password </label>
      <input
        type="password"
        id="password"
        name="password"
        required
        readOnly={pending}
      />
    </p>
  )
}

export default function SignupForm() {
  const [state, formAction] = useFormState(signupAction, {
    isSuccess: true,
    message: null,
  })

  return (
    <form action={formAction}>
      <h2>Signup</h2>
      <SignupFormEmailInput state={state} />
      <SignupFormPasswordInput />
      <SignupFormSubmit />
    </form>
  )
}
