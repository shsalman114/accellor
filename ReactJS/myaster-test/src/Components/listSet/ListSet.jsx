
import { Avatar, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import './listSet.scss'
import React from 'react';
const ListSet = ({ data }) => {
  return (
    <List className='c-listSet'>
      {data.map(item => (
        <ListItem alignItems="flex-start" sx={{ pt: '-14px', pb: '10px' }} key={item.id}>
          <ListItemAvatar>
            <Avatar sx={{ bgcolor: '#F8F9FA', width: 40, height: 40, color: '#144D92', fontSize: '14px', fontWeight: 600, fontFamily: 'Mulish' }}>{item.type.split(/\s/).reduce((response, word) => response += word.slice(0, 1), '')}</Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={item.title}
            secondary={
              <React.Fragment>
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                  style={{ fontWeight: 600, fontFamily: 'Mulish' }}
                >
                  Rejected on:
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                  style={{ fontWeight: 400, marginLeft: 3, fontFamily: 'Mulish' }}
                >
                  {item.rejected_on}
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                  style={{ fontWeight: 600, marginLeft: 12, fontFamily: 'Mulish' }}
                >
                  Rejected by:
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                  style={{ fontWeight: 400, marginLeft: 3, fontFamily: 'Mulish' }}
                >
                  {item.rejected_by}
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                  style={{ fontWeight: 600, marginLeft: 12, fontFamily: 'Mulish' }}
                >
                  Component type:
                </Typography>
                <Typography
                  component="span"
                  variant="body2"
                  color="text.primary"
                  style={{ fontWeight: 400, marginLeft: 3, fontFamily: 'Mulish' }}
                >
                  {item.type}
                </Typography>
              </React.Fragment>
            }
          />
        </ListItem>
      ))
      }
    </List>
  )
}

export default ListSet