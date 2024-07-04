import React from 'react'

function WeightInput(props) {
  return <input
  type="number"
  value={WeightInput}
  onChange={(e) => setWeight(e.target.value)}
  placeholder="Enter Width"
></input>
}

export default WeightInput;
