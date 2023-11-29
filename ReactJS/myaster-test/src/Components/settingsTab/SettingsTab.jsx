import './settings-tab.scss';
import { settingsMenu } from '../../data'
import { NavLink } from 'react-router-dom'
const SettingsTab = () => {
  return (
    <div className='settings-tab'>
      <span className='title'>settings</span>
      {settingsMenu.map(item => (
        <NavLink key={item.id} className='list-item'>
          {item.icon}
          <span>{item.name}</span>
        </NavLink>
      ))}
    </div>
  )
}

export default SettingsTab