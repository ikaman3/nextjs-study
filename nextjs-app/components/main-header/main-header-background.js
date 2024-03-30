import classes from './main-header-background.module.css'

export default function MainHeaderBackground() {
  return (
    // 자바스크립트에서 객체 속성에 접근하는 일반적인 방법
    // 기존의 방식처럼 .으로 접근하면 Prettier가 하이픈을 띄워버리는 문제가 있어서 이 방법을 썼다.
    // 자바스크립트 객체 속성 이름에 하이픈이 포함되면 이 방법으로 접근해야 한다.
    // 기존처럼 .으로 접근할 경우 -를 연산자로 인식하기 때문이다.
    <div className={classes['header-background']}>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop
              offset="0%"
              style={{ stopColor: '#59453c', stopOpacity: '1' }}
            />
            <stop
              offset="100%"
              style={{ stopColor: '#8f3a09', stopOpacity: '1' }}
            />
          </linearGradient>
        </defs>
        <path
          fill="url(#gradient)"
          d="M0,256L48,240C96,224,192,192,288,181.3C384,171,480,181,576,186.7C672,192,768,192,864,181.3C960,171,1056,149,1152,133.3C1248,117,1344,107,1392,101.3L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
        ></path>
      </svg>
    </div>
  )
}
