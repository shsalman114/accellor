import './actionBar.scss'
import { ReactComponent as IconPlus } from '../../assets/images/icon-plus.svg';
import { ReactComponent as IconSearch } from '../../assets/images/icon-search.svg';

const ActionBar = () => {
  return (
    <div className="action-bar">
      <div className="input-field">
        <IconSearch />
        <input type="search" name="" id="" placeholder='Search by name' />
      </div>
      <button>
        <IconPlus />
        <span>add new component</span>
      </button>
    </div>
  )
}

export default ActionBar