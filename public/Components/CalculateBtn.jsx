import React from 'react'
function Calculatebtn(props) {
  return (<button
  type="button"
  className="btn btn-primary"
  id="btn"
  onClick={props.calculateBmi()}
>
  Calculate
</button>)
}

export default Calculatebtn;
