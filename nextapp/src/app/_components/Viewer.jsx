import PropTypes from 'prop-types'

export default function Viewer({ count = 0 }) {
  return (
    <div>
      <div>현재 카운트: </div>
      <h2>{count}</h2>
    </div>
  )
}

Viewer.propTypes = {
  count: PropTypes.number.isRequired,
}
