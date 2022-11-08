import { Avatar, Box, Container, Grid, List, ListItem, ListItemAvatar } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import blueLogo from '../../../../public/logo/blue-logo.svg'
import { GreyFilledBtn } from '../../../components'
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa'

const Topbar = () => {
    return (
        <>
            <Container maxWidth="xxl" id="topbar">
                <Grid container>
                    <Grid item xs={12} md={10} className="mx-auto">
                        <Box py={1}>
                            <Grid container>
                                <Grid item xs={12} sm={4} lg={6}>
                                    <Box>
                                        <Link legacyBehavior={true} href="/" passHref>
                                            <a className='navbar-brand'><img src={blueLogo.src} alt="Teressenheating Logo" className='img-fluid' title='Teressenheating Logo' /></a>
                                        </Link>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={8} lg={6}>
                                    <Box>
                                        <Grid container spacing={5}>
                                            <Grid item xs={12} sm={8} className="d-flex justify-content-end align-items-center">
                                                    <strong className='callText'><small className='text--grey'>24/7 Emergency Service</small></strong>
                                                    <Box ml={2} mt={1}>
                                                        <GreyFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="604-363-6622" />
                                                    </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={4} className="d-flex justify-content-end align-items-center">
                                                <Box>
                                                    <List className=' d-flex p-0 m-0'>
                                                        <ListItem className='p-0 me-3'>
                                                            <a href="https://www.facebook.com" rel='noreferrer' target="_blank">
                                                                <Avatar>
                                                                    <FaFacebookF />
                                                                </Avatar>
                                                            </a>
                                                        </ListItem>
                                                        <ListItem className='p-0 me-3'>
                                                            <a href="https://www.twitter.com" rel='noreferrer' target="_blank">
                                                                <Avatar>
                                                                    <FaTwitter />
                                                                </Avatar>
                                                            </a>
                                                        </ListItem>
                                                        <ListItem className='p-0'>
                                                            <a href="https://www.instagram.com" rel='noreferrer' target="_blank">
                                                                <Avatar>
                                                                    <FaInstagram />
                                                                </Avatar>
                                                            </a>
                                                        </ListItem>
                                                    </List>
                                                </Box>
                                            </Grid>
                                        </Grid>
                                    </Box>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    )
}

export default Topbar