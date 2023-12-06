import React from 'react'
import './mainContent.scss';
import ActionBar from '../../Components/actionBar/ActionBar'
import SectionTabs from '../../Components/sectionTabs/SectionTabs';
const MainContent = () => {
  return (
    <div className='main-content'>
      <ActionBar />
      <SectionTabs />
      
    </div>
  )
}

export default MainContent