import React, { useState } from 'react'
import homeIcon from '../../assets/images/homeIcon.svg'
import './style.scss'
const index = () => {

  const [isActive, setIsActive] = useState(false);
  const btnClass = 'page-button';
  return (
    <button className={btnClass} onClick={() => setIsActive({})}>
      <img src={homeIcon} alt="icon" />
      <span>Homepages</span>
    </button>
  )
}

export default index