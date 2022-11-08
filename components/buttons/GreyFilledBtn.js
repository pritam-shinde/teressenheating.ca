import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const GreyFilledBtn = ({ navlink, anchor, btnlink, btnTitle }) => {
  return (
    <>
      {
        navlink ? <Button className='greyFilledBtn'><Link passHref prefetch={false} legacyBehavior href={btnlink}><a>{btnTitle}</a></Link></Button> : null
      }
      {
        anchor ? <Button className='greyFilledBtn'><a href={btnlink}>{btnTitle}</a></Button> : null
      }
    </>
  )
}

export default GreyFilledBtn