import { List } from '@mui/icons-material'
import { Avatar, Box, IconButton, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import './listSet.scss'
import { useState } from 'react';
import React from 'react';
const ListSet = ({ data }) => {
  const [dense, setDense] = useState(false);
  const [secondary, setSecondary] = useState(false);

  return (
    <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              {" — I'll be in your neighborhood doing errands this…"}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
  )
}

export default ListSet