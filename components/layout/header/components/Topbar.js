import { Avatar, Box, Container, Grid, List, ListItem, ListItemAvatar } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import blueLogo from '../../../../public/logo/blue-logo.svg'
import { GreyFilledBtn } from '../../../components'
import { FaPinterestP, FaTwitter, FaFacebookF, FaInstagram} from 'react-icons/fa'
import {Google} from '@mui/icons-material'

const Topbar = () => {
    return (
        <>
            <Container maxWidth="xxl" id="topbar">
                <Grid container>
                    <Grid item xs={12} md={10} className="mx-auto">
                        <Box py={1}>
                            <Grid container>
                                <Grid item xs={12} sm={3} lg={4}>
                                    <Box>
                                        <Link legacyBehavior={true} href="/" passHref>
                                            <a className='navbar-brand'><img src={blueLogo.src} alt="Teressenheating Logo" className='img-fluid' title='Teressenheating Logo' /></a>
                                        </Link>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} sm={9} lg={8}>
                                    <Box>
                                        <Grid container spacing={5}>
                                            <Grid item xs={12}  className="d-flex justify-content-end align-items-center">
                                                <strong className='callText'><small className='text--grey'>24/7 Emergency Service</small></strong>
                                                <Box ml={2} mt={1}>
                                                    <GreyFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="604-363-6622" />
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
