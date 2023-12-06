import './sideTabs.scss';
import { ReactComponent as IconHome } from '../../assets/images/homeIcon.svg'
import { ReactComponent as IconComponent } from '../../assets/images/IconComponent.svg'
import { ReactComponent as IconMedia } from '../../assets/images/iconMedia.svg'
import PageButton from '../../Components/PageButton/Index';
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
const SideTabs = () => {

  const links = [
    {
      id: uuidv4(),
      name: 'Homepages',
      icon: <IconHome />,
      url: '/s#',
    },
    {
      id: uuidv4(),
      name: 'Components',
      icon: <IconComponent />,
      url: '#',
    },
    {
      id: uuidv4(),
      name: 'Media Library',
      icon: <IconMedia />,
      url: '/w#',
    },
  ]
  return (
    <>
      {
        links.map(item => (
          <div className='side-tabs' key={item.id}>
            <NavLink to={item.url} className='links'>
              <PageButton name={item.name} icon={item.icon} />
            </NavLink >
            <div className="divider"></div>
          </div>
        ))
      }
    </>
  )
}

export default SideTabs