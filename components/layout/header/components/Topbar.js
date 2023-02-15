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
                                            <Grid item xs={12} sm={8} className="d-flex justify-content-end align-items-center">
                                                <strong className='callText'><small className='text--grey'>24/7 Emergency Service</small></strong>
                                                <Box ml={2} mt={1}>
                                                    <GreyFilledBtn anchor={true} btnlink="tel:604-363-6622" btnTitle="604-363-6622" />
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={4} className="d-flex justify-content-end align-items-center">
                                                <Box>
                                                    <List className='d-flex p-0 m-0'>
                                                        <ListItem className='p-0 me-1'>
                                                            <a href="https://www.facebook.com/profile.php?id=100088431184715">
                                                                <ListItemAvatar>
                                                                    <Avatar>
                                                                        <FaFacebookF />
                                                                    </Avatar>
                                                                </ListItemAvatar>
                                                            </a>
                                                        </ListItem>
                                                        <ListItem className='p-0 me-1'>
                                                            <a href="https://twitter.com/BaymanShawqi">
                                                                <ListItemAvatar>
                                                                    <Avatar>
                                                                        <FaTwitter />
                                                                    </Avatar>
                                                                </ListItemAvatar>
                                                            </a>
                                                        </ListItem>
                                                        <ListItem className='p-0 me-1'>
                                                            <a href="https://www.pinterest.com.au/teressenheating/">
                                                                <ListItemAvatar>
                                                                    <Avatar>
                                                                        <FaPinterestP />
                                                                    </Avatar>
                                                                </ListItemAvatar>
                                                            </a>
                                                        </ListItem>
                                                        <ListItem className='p-0 me-1'>
                                                            <a href="https://g.page/r/CdlSgou1yAB-EB0/review">
                                                                <ListItemAvatar>
                                                                    <Avatar>
                                                                        <Google/>
                                                                    </Avatar>
                                                                </ListItemAvatar>
                                                            </a>
                                                        </ListItem>
                                                       <ListItem className='p-0 me-1'>
                                                        <a href="https://www.instagram.com/terrssenheating/">
                                                            <ListItemAvatar>
                                                                <Avatar>
                                                                    <FaInstagram/>
                                                                </Avatar>
                                                            </ListItemAvatar>
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
