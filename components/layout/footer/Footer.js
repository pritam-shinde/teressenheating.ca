import { Box, Container, Grid, List, ListItem, ListItemText, Typography } from '@mui/material'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Styles from '../../../styles/Footer.module.css'
import GreyLogo from '../../../public/logo/grey-logo.svg'
import Link from 'next/link'
import { Copyright } from '@mui/icons-material'

const Footer = () => {

    const [width, setWidth] = useState()

    useEffect(() => {
        setWidth(window.innerWidth)
    }, [width])

    return (
        <>
            <footer className={Styles.footer}>
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={5}>
                                <Grid container spacing={width < 992 ? 3 : 6}>
                                    <Grid item xs={12} md={4} lg={6}>
                                        <Box>
                                            <Box mb={3} style={{ width: "40%" }} >
                                                <img src={GreyLogo.src} alt="logo" className='img-fluid' />
                                            </Box>
                                            <Box>
                                                <Typography className='text-white' align='justify'>Three elements that make Teressen heating Itd different from the crowd are Quality, trust, and affordability. These elements have always been our brand identity and have made has to stand different from the crowd. They have shaped us, monitored us, and made us the top-notched heating experts in Canada.</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={4} lg={2}>
                                        <Box>
                                            <Box mb={width < 992 ? 2 : width < 1300 ? 3 : 4.2} pt={width < 992 ? 1 : (width < 1403) ? 1 : 4}>
                                                <Typography variant='h3' className='text-white'>QUICK LINKS</Typography>
                                            </Box>
                                            <Box>
                                                <ul>
                                                    <li><Link href="/">
                                                        <a className={`${Styles.quickLink} text-white`}>Home</a>
                                                    </Link></li>
                                                    <li><Link href="/about-us/">
                                                        <a className={`${Styles.quickLink} text-white`}>About Us</a>
                                                    </Link></li>
                                                    <li><Link href="/brand/">
                                                        <a className={`${Styles.quickLink} text-white`}>Brands</a>
                                                    </Link></li>
                                                    <li><Link href="/blog/">
                                                        <a className={`${Styles.quickLink} text-white`}>Blog</a>
                                                    </Link></li>
                                                    <li><Link href="/faq/">
                                                        <a className={`${Styles.quickLink} text-white`}>FAQ</a>
                                                    </Link></li>
                                                    <li><Link href="/contact-us/">
                                                        <a className={`${Styles.quickLink} text-white`}>Contact</a>
                                                    </Link></li>
                                                </ul>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={4} lg={4}>
                                        <Box>
                                            <Box mb={width < 992 ? 2 : width < 1300 ? 3 : 4.2} pt={width < 992 ? 1 : width < 1403 ? 1 : 4}>
                                                <Typography variant='h3' className='text-white'>Contacts</Typography>
                                            </Box>
                                            <Box>
                                                <List className='p-0'>
                                                    <ListItem className='p-0'>
                                                        <ListItemText primary={<p><strong className='text--blue'>Head Office :</strong> <span className='text-white'>is simply dummy text of the printing and typesetting industry.</span></p>} />
                                                    </ListItem>
                                                    <ListItem className='p-0'>
                                                        <ListItemText primary={<p><strong className='text--blue'>Call :</strong> <a href="tel:603-363-6622" className='text-white'>603-363-6622</a></p>} />
                                                    </ListItem>
                                                    <ListItem className='p-0'>
                                                        <ListItemText primary={<p><strong className='text--blue'>Email :</strong> <a href="mailto:info@teressenheating.ca" className='text-white'>info@teressenheating.ca</a></p>} />
                                                    </ListItem>
                                                </List>
                                            </Box>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="xxl" style={{ backgroundColor: "var(--light-navy) !important" }}>
                    <Box py={2}>
                        <Typography className='text-white' align="center"><Copyright /> {new Date().getFullYear()} | teressenheating.ca</Typography>
                    </Box>
                </Container>
            </footer>
        </>
    )
}

export default Footer