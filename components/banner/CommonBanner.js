import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Styles from '../../styles/CommonHero.module.css'

const CommonBanner = ({bg, title, color, variant, blogBanner}) => {
    return (
        <>
            <section className={Styles.hero} style={{backgroundImage:`url(${bg.src})`}}>
                <Container maxWidth="xxl" style={{height:"inherit"}}>
                    <Grid container style={{height:"inherit"}}>
                        <Grid item xs={12} md={10} className="mx-auto d-flex align-items-center" style={{height:"inherit"}}>
                        {
                            blogBanner ?  <Typography variant={variant ? variant : "h1"} style={{color:color}} className="BlogBannerTitle">{title}</Typography> :  <Typography variant={variant ? variant : "h1"} style={{color:color}} className="BannerTitle">{title}</Typography>
                        }
                           
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default CommonBanner