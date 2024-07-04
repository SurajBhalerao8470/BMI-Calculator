import React from 'react'

function ResetBtn(props) {
  return  <button
  type="button"
  className="btn btn-primary"
  id="reset-btn"
  onClick={reset}
>
  Reset
</button>
}

export default ResetBtn
