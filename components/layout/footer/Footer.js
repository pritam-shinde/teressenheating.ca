 import { Box, Container, Grid, List, ListItem, ListItemText, Typography, ListItemAvatar, Avatar, Divider } from '@mui/material'
import Image from 'next/legacy/image'
import React, { useEffect, useState } from 'react'
import Styles from '../../../styles/Footer.module.css'
import GreyLogo from '../../../public/logo/grey-logo.svg'
import Link from 'next/link'
import { Copyright, Google } from '@mui/icons-material'
import { FaPinterestP, FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa'

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
                                                            <Google />
                                                        </Link>
                                                    </Avatar>
                                                </Box>
                                                <Box p={1}>
                                                    <Avatar>
                                                        <Link passHref href="https://www.instagram.com/teressenheatingltd/" className='text-white'>
                                                            <FaInstagram />
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
                <Grid item xs={12} sm={6} lg={12} className="p-0" >
                    <Box mb={2} style={{ borderBottom: "1px solid #fff", borderTop: "1px solid #fff" }}>
                    <Typography className='text-white text-center'>Areas : </Typography>
                    <hr className='text-white'/>
                        <List className="d-flex flex-wrap justify-content-center">
                            {
                                [
                                    { id: "subUrb-1", text: "Vancouver", link: "/vancouver/" },
                                    { id: "subUrb-2", text: "Burnaby", link: "/burnaby/" },
                                    { id: "subUrb-3", text: "West Vancouver", link: "/west-vancouver/" },
                                    { id: "subUrb-4", text: "North Vancouver", link: "/north-vancouver/" },
                                    { id: "subUrb-5", text: "Coquitlam", link: "/coquitlam/" },
                                    { id: "subUrb-6", text: "Richmond", link: "/richmond/" },
                                    { id: "subUrb-7", text: "White-Rock", link: "/white-rock/" },
                                    { id: "subUrb-8", text: "Tsawwassen", link: "/tsawwassen/" },
                                    { id: "subUrb-9", text: "Port Moody", link: "/port-moody/" },
                                    { id: "subUrb-10", text: "Pitt Meadows", link: "pitt-meadows/" },
                                    { id: "subUrb-11", text: "New Westminster", link: "/new-westminster/" },
                                    { id: "subUrb-12", text: "Maple Ridge", link: "/maple-ridge/" },
                                ].map(item => <ListItem key={item.id} className="p-1 m-1" style={{ width: "fit-content"}}> 
                                    <Link href={item.link} legacyBehavior>
                                        <a className="text-white">{item.text}</a>   
                                    </Link>
                                </ListItem>)
                            }
                        </List>
                    </Box>
                </Grid>
                <Container maxWidth="xxl">
                    <Box pb={15}>
                        <Grid container>
                            <Grid item xs={12} md={12}>
                                <Box>
                                    <Grid container>
                                        <Grid item xs={12} md={10} className="mx-auto">
                                            <box className={`${width > 320 ? 'd-flex' : 'flex-column'} justify-content-center`}>
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
