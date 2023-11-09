import React from 'react';
import TitleTab from '../../Components/TitleTab';
import Logo from '../../assets/images/logo.svg';
import homeIcon from '../../assets/images/homeIcon.svg'

import PageButton from '../../Components/PageButton/Index';
import './styles.scss'

const Index = () => {
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
        <PageButton name='Homepages' icon={homeIcon} />
        <div className="divider"></div>
        <PageButton name='Components' icon={homeIcon} />
        <div className="divider"></div>
      </div>
    </div>
  )
}

export default Index