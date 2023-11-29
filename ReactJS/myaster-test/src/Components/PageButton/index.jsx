import React, { useState } from 'react'

import './style.scss'

const Index = (props) => {

  return (
    <button className='page-button'>
      {props.icon}
      <span>{props.name}</span>
    </button>
  )
}

export default Index