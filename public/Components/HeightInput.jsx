import React from 'react'

function HeightInput(props) {
  return  <input
  type="number"
  value={height}
  onChange={(e) => setHeight(e.target.value)}
  placeholder="Enter Height"
></input>
}

export default HeightInput
