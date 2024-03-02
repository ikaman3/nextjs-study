import PropTypes from 'prop-types'

export default function Controller({ buttonNumbers, onCountChange }) {
  // 부모 컴포넌트로부터 buttonNumbers 배열을 받아 원소의 개수만큼 버튼을 생성
  return (
    <div>
      {buttonNumbers.map((value) => {
        return (
          <button
            type="button"
            key={value} // react에서 같은 컴포넌트를 구분하기 위한 고유한 값
            onClick={() => {
              onCountChange(value)
            }}
          >
            {value}
          </button>
        )
      })}
    </div>
  )
}

Controller.propTypes = {
  buttonNumbers: PropTypes.arrayOf,
  onCountChange: PropTypes.func,
}

Controller.defaultProps = {
  buttonNumbers: [],
  onCountChange: () => {},
}
