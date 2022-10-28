import { Box, Typography } from '@mui/material'
import React from 'react'

const BrandDetails = ({ title, brandDetaillArr }) => {
  return (
    <>
      <Box>
        <Typography variant="h1" color='#fff'>{title}</Typography>
        {
          brandDetaillArr.map(item => <Typography key={item} className='textWhite' mt={3}>{item.text}</Typography>)
        }
      </Box>
    </>
  )
}

export default BrandDetails
