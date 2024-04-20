import sql from 'better-sqlite3'

const db = sql('meals.db')

// better-sqlite3는 Promise를 사용하지 않지만 함수 자체를 async로 만들어 Promise로 래핑할 수 있다.
export async function getMeals() {
  await new Promise((resolve) => setTimeout(resolve, 2000))
  // run()은 insert, update할 때 사용
  // all()은 모든 데이터를 fetching할 때 사용
  // get()은 한 개의 데이터를 fetching할 때 사용
  return db.prepare('SELECT * FROM meals').all()
}
