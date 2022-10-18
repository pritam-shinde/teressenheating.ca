import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import { BlueFilledBtn } from '../../components/components'
import Styles from '../../styles/Home.module.css'

const Appointment = () => {
  return (
    <>
      <section className={`${Styles.Appointment} mt-3`}>
        <Container maxWidth="xxl" style={{ height: "inherit" }}>
          <Grid container style={{ height: "inherit" }}>
            <Grid item xs={12} md={10} className="mx-auto" style={{ height: "inherit" }}>
              <Box py={5} style={{ height: "inherit" }}>
                <Grid container style={{ height: "inherit" }}>
                  <Grid item xs={12} md={6} className="d-flex align-items-center" style={{ height: "inherit" }}>
                    <Box>
                      <Typography variant='h2' className='text--black'><span className='text--blue'>Air Conditioning</span> & <span className='text--red'>Heating</span> Services, Repair & Maintenance</Typography>
                      <Box mt={3}>
                        <BlueFilledBtn navlink={true} btnlink="/contact-us/" btnTitle="Book An Appointment" />
                      </Box>
                    </Box>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  )
}

export default Appointment