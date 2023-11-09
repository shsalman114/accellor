import React, { useState } from 'react'

import './style.scss'

const Index = (props) => {

  const [isActive, setIsActive] = useState(false);

  let btnClass = isActive ? 'page-button active' : 'page-button';
  return (
    <button className={btnClass} onClick={() => setIsActive(!isActive)} >
      <img src={props.icon} alt="icon" />
      {props.name}
    </button>
  )
}

export default Index