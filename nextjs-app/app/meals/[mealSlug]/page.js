import Image from 'next/image'

import { getMeal } from '@/lib/meals'
import classes from './page.module.css'

export default function Page({ params }) {
  const meal = getMeal(params.mealSlug)
  // replace()를 사용하여 줄바꿈 문자(\n)를 <br>로 변경
  meal.instructions = meal.instructions.replace(/\n/g, '<br>')

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill></Image>
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  )
}
