import './sectionTabs.scss'
import { sectionTabsData } from '../../data'
import { NavLink } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import ListSet from '../listSet/ListSet';
import { useState } from 'react';
import { styled } from '@mui/system';
import FilterMenu from '../filterMenu/FilterMenu';
import { Button, ButtonGroup, Pagination } from '@mui/material';
import { ReactComponent as Draft } from '../../assets/images/list-icons/draft.svg';
import { ReactComponent as Page } from '../../assets/images/list-icons/page.svg';
import { ReactComponent as Published } from '../../assets/images/list-icons/published.svg';
import { ReactComponent as Rejected } from '../../assets/images/list-icons/rejected.svg';
import { ReactComponent as Submitted } from '../../assets/images/list-icons/submitted.svg';
const SectionTabs = () => {


  // Extract all statuses from the array
  const allStatuses = sectionTabsData.flatMap(item => item.status);

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
  const addUrlProperty = (item) => {
    switch (item.name) {
      case 'draft':
        item["url"] = <Draft />;
        break;
      case 'submitted':
        item["url"] = <Submitted />;
        break;
      case 'rejected':
        item["url"] = <Published />;
        break;
      case 'published':
        item["url"] = <Rejected />;
        break;
      // Add more cases as needed for other status values
      case 'all component':
        item["url"] = <Page />;
        break;

    }
    return item;
  };

  const newData = tabsStatusArray.map(addUrlProperty);
  console.log(newData)


  const [currentPage, setCurrentPage] = useState(1);
  let postPerPage = 8;
  let count = Math.ceil(sectionTabsData.length / postPerPage)

  // GET CURRENT POSTS
  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPost = sectionTabsData.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (event, number) => {
    setCurrentPage(number);
  }

  const useStyles = styled(() => ({
    ul: {
      "& .MuiPaginationItem-root": {
        color: "#144D92"
      }
    }
  }));
  const classes = useStyles();
  return (
    <div className='sectionTabs'>
      <div className="tabs">
        <div className="tabs-menu">
          <ButtonGroup>

            {newData.map(item => (
              <Button variant='text' className="item" key={item.id}>
                <div className="icon">
                  {item.url}
                </div>
                <span className="name">
                  {item.name}
                  <span className='entries'>{item.count}<span>entries</span></span>
                </span>
                <div className="liner"></div>
              </Button>
            ))}
          </ButtonGroup>
        </div>
        <FilterMenu />
      </div>
      <div className="list-section">
        <ListSet data={currentPost} />
      </div>
      <Pagination color='primary' count={count} page={currentPage} onChange={paginate} showFirstButton showLastButton />
    </div>
  )
}

export default SectionTabs 