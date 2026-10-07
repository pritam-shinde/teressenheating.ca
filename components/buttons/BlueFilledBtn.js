import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const BlueFilledBtn = ({ navlink, anchor, btnlink, btnTitle }) => {
  if (anchor) {
    return (
      <Button component="a" href={btnlink} className="blueFilledBtn">
        {btnTitle}
      </Button>
    )
  }

  if (navlink || btnlink) {
    return (
      <Link href={btnlink || '#'} passHref legacyBehavior prefetch={false}>
        <Button component="a" href={btnlink} className="blueFilledBtn">
          {btnTitle}
        </Button>
      </Link>
    )
  }

  return (
    <Button className="blueFilledBtn">
      {btnTitle}
    </Button>
  )
}

export default BlueFilledBtn