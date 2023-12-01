import './sectionTabs.scss'
import { sectionTabsData } from '../../data'
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';


const SectionTabs = () => {


  // Extract all statuses from the array
  const allStatuses = sectionTabsData.flatMap(item => item.statuses.map(status => status.status));

  // Count the occurrences of each status improved version
  const tabsStatus = allStatuses.reduce((acc, status) => {
    acc[status] = (acc[status] || 0) + 1;
    acc['all component'] = (acc['all component'] || 0) + 1;
    return acc;
  }, {});

  // added id in each object property and converted in to array
  const tabsStatusArray = Object.entries(tabsStatus).map(([name, count]) => ({
    id: uuidv4(), // Assuming you want ids starting from 1
    name,
    count
  }));

  tabsStatusArray.sort((a, b) => {
    if (a.name === "all component") return -1;
    return 0;
  });

  const publishedIndex = tabsStatusArray.findIndex(item => item.name === 'published');
  if (publishedIndex !== -1) {
    const published = tabsStatusArray.splice(publishedIndex, 1);
    tabsStatusArray.push(...published);
  }

  console.log(tabsStatusArray)

  return (
    <div className='sectionTabs'>
      <div className="tabs-menu">
        {tabsStatusArray.map(item => (
          <NavLink className="item" key={item.id}>
            <div className="icon"></div>
            <span className="name">
              {item.name}
              <span className='entries'>{item.count}<span>entries</span></span>
            </span>
            <div className="liner"></div>
          </NavLink>
        ))}
      </div>
      <div className="filter-section"></div>
    </div>
  )
}

export default SectionTabs 