import { Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Styles from '../../styles/CommonHero.module.css'

const CommonBanner = ({bg, title, color, variant, blogBanner, overlay, bgPosition}) => {
    const bgUrl = bg?.src ? bg.src : bg
    const bgImage = overlay
        ? typeof overlay === 'string'
            ? `${overlay}, url(${bgUrl})`
            : `linear-gradient(to right, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0.58) 48%, rgba(0, 0, 0, 0.3) 85%, rgba(0, 0, 0, 0.2) 100%), url(${bgUrl})`
        : `url(${bgUrl})`

    const sectionStyle = {
        backgroundImage: bgImage,
        ...(bgPosition ? { backgroundPosition: bgPosition } : {})
    }

    return (
        <>
            <section className={Styles.hero} style={sectionStyle}>
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
