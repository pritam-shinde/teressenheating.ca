import { Button } from '@mui/material'
import React from 'react'

const GreyFilledBtn = ({ navlink, anchor, btnlink, btnTitle }) => {
  return (
    <>
      {
        navlink ? <Button component="span" className='greyFilledBtn'><a href={btnlink}>{btnTitle}</a></Button> : null
      }
      {
        anchor ? <Button component="span" className='greyFilledBtn'><a href={btnlink}>{btnTitle}</a></Button> : null
      }
    </>
  )
}

export default GreyFilledBtn