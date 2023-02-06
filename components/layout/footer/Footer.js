import { Box, Container, Grid, List, ListItem, ListItemText, Typography, ListItemAvatar, Avatar } from '@mui/material'
import Image from 'next/legacy/image'
import React, { useEffect, useState } from 'react'
import Styles from '../../../styles/Footer.module.css'
import GreyLogo from '../../../public/logo/grey-logo.svg'
import Link from 'next/link'
import { Copyright, LocationOn } from '@mui/icons-material'
import { FaPinterestP, FaTwitter, FaFacebookF } from 'react-icons/fa'

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
                                <Grid container spacing={width < 992 ? 2 : 4}>
                                    <Grid item xs={12} md={4} lg={5}>
                                        <Box>
                                            <Box mb={3} style={{ width: "40%" }} >
                                                <Image layout='responsive' src={GreyLogo} alt="Teressenheating Logo" className='img-fluid' title='Teressenheating Logo' />
                                            </Box>
                                            <Box>
                                                <Typography className='text-white' align='justify'>Three elements that make Teressen heating ltd different from the crowd are Quality, trust, and affordability. These elements have always been our brand identity and have made has to stand different from the crowd. They have shaped us, monitored us, and made us the best heating and air conditioning service in Canada .</Typography>
                                            </Box>
                                        </Box>
                                    </Grid>
                                    <Grid item xs={12} md={4} lg={4}>
                                        <Box>
                                            <Box mb={width < 992 ? 2 : width < 1300 ? 3 : 3.2} pt={width < 992 ? 1 : (width < 1403) ? 1 : 4}>
                                                <Typography variant='h3' className='text-white'>QUICK LINKS</Typography>
                                            </Box>

                                            <Grid container>
                                                <Grid item xs={6} md={6} lg={6}>
                                                    <ul>
                                                        <li><Link passHref prefetch={false} legacyBehavior href="/">
                                                            <a className={`${Styles.quickLink} text-white`}>Home</a>
                                                        </Link></li>
                                                        <li><Link passHref prefetch={false} legacyBehavior href="/about-us/">
                                                            <a className={`${Styles.quickLink} text-white`}>About Us</a>
                                                        </Link></li>
                                                        <li><Link passHref prefetch={false} legacyBehavior href="/brand/">
                                                            <a className={`${Styles.quickLink} text-white`}>Brands</a>
                                                        </Link></li>

                                                        <li><Link passHref prefetch={false} legacyBehavior href="/heating-services/">
                                                            <a className={`${Styles.quickLink} text-white`}>Heating</a>
                                                        </Link></li>
                                                        <li><Link passHref prefetch={false} legacyBehavior href="/air-conditioning-service/">
                                                            <a className={`${Styles.quickLink} text-white`}>Cooling</a>
                                                        </Link></li>
                                                        <li><Link passHref prefetch={false} legacyBehavior href="/boilers/">
                                                            <a className={`${Styles.quickLink} text-white`}>Boiler</a>
                                                        </Link></li>
                                                    </ul>
                                                </Grid>
                                                <Grid item xs={6} md={6} lg={6}>
                                                    <ul>
                                                        <li><Link passHref prefetch={false} legacyBehavior href="/commercial-hvac/">
                                                            <a className={`${Styles.quickLink} text-white`}>Commercial HVAC</a>
                                                        </Link></li>
                                                        <li><Link passHref prefetch={false} legacyBehavior href="/tankless-water-heaters/">
                                                            <a className={`${Styles.quickLink} text-white`}>Tankless Water Heater </a>
                                                        </Link></li>
                                                        <li><Link passHref prefetch={false} legacyBehavior href="/faq/">
                                                            <a className={`${Styles.quickLink} text-white`}>FAQ</a>
                                                        </Link></li>
                                                        <li><Link passHref prefetch={false} legacyBehavior href="/contact-us/">
                                                            <a className={`${Styles.quickLink} text-white`}>Contact</a>
                                                        </Link></li>
                                                        <li><Link passHref prefetch={false} legacyBehavior href="/blog/">
                                                            <a className={`${Styles.quickLink} text-white`}>Blog</a>
                                                        </Link></li>
                                                    </ul>
                                                </Grid>
                                            </Grid>
                                        </Box>

                                    </Grid>
                                    <Grid item xs={12} md={4} lg={3}>
                                        <Box>
                                            <Box mb={width < 992 ? 2 : width < 1300 ? 3 : 3.2} pt={width < 992 ? 1 : width < 1403 ? 1 : 4}>
                                                <Typography variant='h3' className='text-white'>Contacts</Typography>
                                            </Box>
                                            <Box>
                                                <List className='p-0'>
                                                    <ListItem className='p-0'>
                                                        <ListItemText primary={<p><strong className='text--blue'>Address :</strong> <span className='text-white'>2025 Willingdon Ave unit 900, Burnaby, BC V5C 0J3, Canada</span></p>} />
                                                    </ListItem>

                                                    <ListItem className='p-0'>
                                                        <ListItemText primary={<p><strong className='text--blue'>Call :</strong> <a href="tel:604-363-6622" className='text-white'>604-363-6622</a></p>} />
                                                    </ListItem>

                                                    <ListItem className='p-0'>
                                                        <ListItemText primary={<p><strong className='text--blue'>Email :</strong> <a href="mailto:info@teressenheating.ca" className='text-white'>info@teressenheating.ca</a></p>} />
                                                    </ListItem>
                                                </List>
                                            </Box>
                                            <Box className='d-flex' mt={1}>
                                                <Box p={1}>
                                                    <Avatar>
                                                        <Link passHref href="https://www.facebook.com/profile.php?id=100088431184715" className='text-white'>
                                                            <FaFacebookF />
                                                        </Link>
                                                    </Avatar>
                                                </Box>
                                                <Box p={1}>
                                                    <Avatar>
                                                        <Link passHref href="https://twitter.com/BaymanShawqi" className='text-white'>
                                                            <FaTwitter />
                                                        </Link>
                                                    </Avatar>
                                                </Box>
                                                <Box p={1}>
                                                    <Avatar>
                                                        <Link passHref href="https://www.pinterest.com.au/teressenheating/" className='text-white'>
                                                            <FaPinterestP />
                                                        </Link>
                                                    </Avatar>
                                                </Box>
                                                <Box p={1}>
                                                    <Avatar>
                                                        <Link passHref href="https://g.page/r/CdlSgou1yAB-EB0/review" className='text-white'>
                                                            <LocationOn />
                                                        </Link>
                                                    </Avatar>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
                <Container maxWidth="xxl">
                    <Box  pb={15}>
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <Box>
                                    <Grid container>
                                        <Grid item xs={12} md={10} className="mx-auto">
                                            <box className={ `${ width > 320 ? 'd-flex' : 'flex-column'} justify-content-center` }>
                                                <Box px={1}>
                                                    <Typography className='text-white'><Copyright /> {new Date().getFullYear()} <Link href="/" className='text-white'>teressenheating.ca</Link> </Typography>
                                                </Box>
                                                <Box>
                                                    <Typography className='text-white'> | </Typography>
                                                </Box>
                                                <Box px={1}>
                                                    <Link legacyBehavior href="/privacy-policy/">
                                                    <span className='headingSecond'> Privacy Policy </span>
                                                    </Link>
                                                </Box>

                                                <Box>
                                                    <Typography className='text-white'> | </Typography>
                                                </Box>
                                                <Box px={1}>
                                                    <Link legacyBehavior href="/terms-of-service/">
                                                        <span className='headingSecond'>Term Of Service</span>
                                                    </Link>
                                                </Box>
                                            </box>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </footer>
        </>
    )
}

export default Footer
