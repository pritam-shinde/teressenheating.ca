import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const GreyFilledBtn = ({ navlink, anchor, btnlink, btnTitle }) => {
  if (anchor) {
    return (
      <Button component="a" href={btnlink} className="greyFilledBtn">
        {btnTitle}
      </Button>
    )
  }

  if (navlink || btnlink) {
    return (
      <Link href={btnlink || '#'} passHref legacyBehavior prefetch={false}>
        <Button component="a" href={btnlink} className="greyFilledBtn">
          {btnTitle}
        </Button>
      </Link>
    )
  }

  return (
    <Button className="greyFilledBtn">
      {btnTitle}
    </Button>
  )
}

export default GreyFilledBtn