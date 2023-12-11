import React from 'react'
import { ArrowDropDown, ArrowDropUp } from '@mui/icons-material';
import { Button, FormControl, Menu, MenuItem, Select } from '@mui/material';
import { sectionNamesData } from '../../data';
const FilterMenu = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [name, setName] = React.useState('');
  return (
    <div className="filter-menu">
      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={open ? <ArrowDropUp fontSize="small" /> : <ArrowDropDown fontSize="small" />}
        variant='outlined'
        sx={{ textTransform: 'none', border: '1px solid rgba(50, 50, 77, 0.20)', color: '#000', fontWeight: 700, fontFamily: 'Mulish' }}
      >
        Filters
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
        sx={{ mt: 1.25 }}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>
          <FormControl sx={{ m: 1, minWidth: 120 }}>
            <Select
              value={name}
              displayEmpty
              onChange={(e) => setName(e.target.value)}
              inputProps={{ 'aria-label': 'Without label' }}
            >
              {sectionNamesData.map(item => (
                <MenuItem value={item.name} key={item.id}>{item.name}</MenuItem>
              ))}
            </Select>
          </FormControl>
        </MenuItem>
      </Menu>
    </div >
  )
}

export default FilterMenu