import sql from 'better-sqlite3'
import slugify from 'slugify'
import xss from 'xss'
import fs from 'node:fs'

const db = sql('meals.db')

// better-sqlite3는 Promise를 사용하지 않지만 함수 자체를 async로 만들어 Promise로 래핑할 수 있다.
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  // throw new Error('Failed to fetch meals')
  // run()은 insert, update할 때 사용
  // all()은 모든 데이터를 fetching할 때 사용
  // get()은 한 개의 데이터를 fetching할 때 사용
  return db.prepare('SELECT * FROM meals').all()
}

export function getMeal(slug) {
  return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug)
}

export async function saveMeal(meal) {
  meal.slug = slugify(meal.title, { lower: true })
  meal.instructions = xss(meal.instructions)

  const extension = meal.image.name.split('.').pop()
  const fileName = `${meal.slug}.${extension}`

  const stream = fs.createWriteStream(`public/images/${fileName}`)
  const bufferedImage = await meal.image.arrayBuffer()
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error('Saving image failed!')
    }
  })

  meal.image = `/images/${fileName}`

  db.prepare(
    `
    INSERT INTO meals
      (title, summary, instructions, image, creator, creator_email, slug)
    VALUES (         
      @title,
      @summary,
      @instructions,
      @image,
      @creator,
      @creator_email,
      @slug
    )
  `
  ).run(meal)
}
