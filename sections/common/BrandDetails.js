import { CheckCircle } from '@mui/icons-material'
import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'

const BrandDetails = ({ title, brandDetaillArr, list, ListArray }) => {
  return (
    <>
      <Box>
        <Typography variant="h1" color='#fff'>{title}</Typography>
        {
          brandDetaillArr ? brandDetaillArr.map(item => <Typography key={item} className='text-white' mt={3}>{item.text}</Typography>) : null

        }
        {
          list ? <List>
            {
              ListArray.map(item => <ListItem key={item}>
                <ListItemIcon>
                  <CheckCircle className='text-white' />
                </ListItemIcon>
                <ListItemText primary={<span className='text-white'>{item}</span>} />
              </ListItem>)
            }
          </List> : null
        }
      </Box>
    </>
  )
}

export default BrandDetails