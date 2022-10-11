import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const BlueFilledBtn = ({ navlink, anchor, btnlink, btnTitle }) => {
  return (
    <>
      {
        navlink ? <Button className='blueFilledBtn'><Link href={btnlink}>{btnTitle}</Link></Button> : null
      }
      {
        anchor ? <Button className='blueFilledBtn'><a href={btnlink}>{btnTitle}</a></Button> : null
      }
    </>
  )
}

export default BlueFilledBtn