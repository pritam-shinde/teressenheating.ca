import { Typography } from '@mui/material'

const SectionalHeading = ({
  variant,
  align,
  blacktext,
  blueText,
  simpletext,
  fontSize,
  className
}) => {
  return (
    <>
      {blacktext && blueText ? (
        <Typography
          variant={variant}
          align={align}
          gutterBottom
          sx={fontSize ? { fontSize } : {}}
          className={className || ""}
        >
          <span className='text--black'>{blacktext}</span>{' '}
          <span className='text--blue'>{blueText}</span>
        </Typography>
      ) : simpletext ? (
        <Typography
          variant={variant}
          align={align}
          gutterBottom
          sx={fontSize ? { fontSize } : {}}
          className={className || ""}
        >
          {simpletext}
        </Typography>
      ) : null}
    </>
  )
}

export default SectionalHeading

// import { Typography } from '@mui/material'
// import React from 'react'

// const SectionalHeading = ({variant, align, blacktext, blueText, simpletext}) => {
//   return (
//     <>
//     {
//         blacktext && blueText ? <Typography variant={variant} align={align} gutterBottom><span className='text--black'>{blacktext}</span> <span className='text--blue'>{blueText}</span></Typography> : simpletext ? <Typography variant={variant} align={align} gutterBottom>{simpletext}</Typography> : null
//     }
//     </>
//   )
// }

// export default SectionalHeading