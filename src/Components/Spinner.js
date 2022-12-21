import React from 'react'
import loading from './loading.gif'

function Spinner() {
  return (
    <div style={{textAlign:"center"}}>
      <img src={loading} alt="Loading"></img>
    </div>
  )
}

export default Spinner
