import { Typography } from '@mui/material'
import React from 'react'

const SectionalHeading = ({variant, align, blacktext, blueText, simpletext}) => {
  return (
    <>
    {
        blacktext && blueText ? <Typography variant={variant} align={align} gutterBottom><span className='text--black'>{blacktext}</span> <span className='text--blue'>{blueText}</span></Typography> : null
    }
    {
        simpletext ? <Typography variant={variant} align={align} gutterBottom></Typography> : null
    }
    </>
  )
}

export default SectionalHeading