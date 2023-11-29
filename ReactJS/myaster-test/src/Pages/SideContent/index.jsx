import TitleTab from '../../Components/TitleTab';
import SettingsTab from '../../Components/settingsTab/SettingsTab';
import SideTabs from '../../Components/sideTabs/SideTabs';
import Logo from '../../assets/images/logo.svg';
import './styles.scss';


const Index = () => {
  return (
    <div className='left-side-panel'>
      <div className='header'>
        <img src={Logo} alt="logo" />
      </div>
      <div className='menu-panel'>
        <p className='menu-title'>super admin</p>
        <TitleTab title='Teleconsultation' />
        <div className="divider"></div>
        <TitleTab title='Homecare' />
        <div className="divider"></div>
        <TitleTab title='Pharmacy' />
        <div className="divider"></div>
        <TitleTab title='E LAB' />
        <div className="divider"></div>
        <SideTabs />
        <SettingsTab />
      </div>
    </div>
  )
}

export default Index