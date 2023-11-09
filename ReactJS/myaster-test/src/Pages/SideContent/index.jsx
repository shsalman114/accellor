import React from 'react';
import TitleTab from '../../Components/TitleTab';
import Logo from '../../assets/images/logo.svg';
import PageButton from '../../Components/PageButton';
import './styles.scss'

const index = () => {
  return (
    <div className='left-side-panel'>
      <div className='header'>
        <img src={Logo} alt="logo" />
      </div>
      <div className='menu-panel'>
        <p className='menu-title'>super admin</p>
        <TitleTab title={'Teleconsultation'} />
        <div className="divider"></div>
        <TitleTab title={'Homecare'} />
        <div className="divider"></div>
        <TitleTab title={'Pharmacy'} />
        <div className="divider"></div>
        <TitleTab title={'E LAB'} />
        <div className="divider"></div>
        <PageButton />
      </div>
    </div>
  )
}

export default index