import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import Styles from '../../styles/CommonHero.module.css'

const CommonBanner = ({
    bg,
    mobileBg,
    title,
    color,
    variant,
    blogBanner,
    overlay,
    mobileOverlay,
    desktopOverlay,
    bgPosition,
    mobileBgPosition,
    desktopBgPosition,
    sx
}) => {
    const bgUrl = bg?.src ? bg.src : bg
    const mobileBgUrl = mobileBg?.src ? mobileBg.src : (mobileBg || bgUrl)

    // Default overlays:
    // Desktop: gradient dark on the left for text, sheer on the right for equipment
    const defaultDesktopOverlay = 'linear-gradient(to right, rgba(0, 0, 0, 0.78) 0%, rgba(0, 0, 0, 0.58) 48%, rgba(0, 0, 0, 0.3) 85%, rgba(0, 0, 0, 0.15) 100%)'
    // Mobile: richer overlay across full width so text wrapping over equipment is fully legible
    const defaultMobileOverlay = 'linear-gradient(to right, rgba(0, 0, 0, 0.82) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.52) 100%)'

    let overlayInfo = null
    if (overlay || mobileOverlay || desktopOverlay) {
        overlayInfo = {
            xs: mobileOverlay || (typeof overlay === 'object' && overlay?.xs ? overlay.xs : (typeof overlay === 'string' ? overlay : defaultMobileOverlay)),
            md: desktopOverlay || (typeof overlay === 'object' && overlay?.md ? overlay.md : (typeof overlay === 'string' ? overlay : defaultDesktopOverlay))
        }
    }

    // Resolve background image responsively
    let bgImageStyle = null
    if (overlayInfo) {
        bgImageStyle = {
            xs: `${overlayInfo.xs}, url(${mobileBgUrl}) !important`,
            md: `${overlayInfo.md}, url(${bgUrl}) !important`
        }
    } else if (mobileBg) {
        bgImageStyle = {
            xs: `url(${mobileBgUrl}) !important`,
            md: `url(${bgUrl}) !important`
        }
    } else if (bgUrl) {
        bgImageStyle = `url(${bgUrl})`
    }

    // Resolve background position responsively
    const xsPos = mobileBgPosition || (typeof bgPosition === 'object' && bgPosition !== null ? bgPosition?.xs : (typeof bgPosition === 'string' ? bgPosition : null))
    const mdPos = desktopBgPosition || (typeof bgPosition === 'object' && bgPosition !== null ? bgPosition?.md : (typeof bgPosition === 'string' ? bgPosition : null))

    let bgPosStyle = null
    if (xsPos || mdPos) {
        bgPosStyle = {
            ...(xsPos ? { xs: `${xsPos} !important` } : {}),
            ...(mdPos ? { md: `${mdPos} !important` } : {})
        }
    }

    return (
        <Box
            component="section"
            className={Styles.hero}
            sx={{
                ...(bgImageStyle ? { backgroundImage: bgImageStyle } : {}),
                ...(bgPosStyle ? { backgroundPosition: bgPosStyle } : {}),
                ...sx
            }}
        >
            <Container maxWidth="xxl" style={{ height: "inherit" }}>
                <Grid container style={{ height: "inherit" }}>
                    <Grid item xs={12} md={10} className="mx-auto d-flex align-items-center" style={{ height: "inherit" }}>
                        {blogBanner ? (
                            <Typography variant={variant ? variant : "h1"} style={{ color: color }} className="BlogBannerTitle">
                                {title}
                            </Typography>
                        ) : (
                            <Typography variant={variant ? variant : "h1"} style={{ color: color }} className="BannerTitle">
                                {title}
                            </Typography>
                        )}
                    </Grid>
                </Grid>
            </Container>
        </Box>
    )
}

export default CommonBanner
