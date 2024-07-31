// millisecond를 매개변수로 받아서 코드 실행을 지연시키는 함수
export async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

// 객체 프로퍼티를 대상으로 반복문을 실행해서 프로퍼티가 하나라도 존재하면 즉시 false 반환하는 함수
export function isObjEmpty(obj) {
  for (let key in obj) {
    // 이 Loop가 시작됐다는 것은 프로퍼티가 있다는 의미
    return false
  }

  return true
}
