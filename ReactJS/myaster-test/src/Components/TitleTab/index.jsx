import React from 'react'
// import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '../../assets/images/opendropdownIcon.svg';
import './style.scss';

const TitleTab = ({ title }) => {
  return (
    <div className='title-div'>
      <p className='title'>
        {title}
        <span className='title-dropdown-icon'>
          <img src={ExpandMore} alt="" />
        </span>
      </p>
    </div>
  )
}

export default TitleTab