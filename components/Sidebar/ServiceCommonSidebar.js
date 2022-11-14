import { ArrowForward } from '@mui/icons-material'
import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Typography, Paper } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const ServiceCommonSidebar = () => {
    return (
        <>
            <aside style={{height:"100%"}}>
                <Container maxWidth="xxl" style={{height:"100%"}}>
                    <Box p={3} component={Paper} className='sticky-top sidebar-sticky shadow'>
                        <Typography variant='h3' align="left" className='text--blue'>Services</Typography>
                        <Box>
                            <List >
                                <ListItem className='ps-0'>
                                    <ListItemIcon>
                                        <ArrowForward className='text--blue' />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong><Link passHref prefetch={false} legacyBehavior={true} href="/heating-services/"><a className='text--black'>Heating</a></Link></strong>} />
                                </ListItem>
                                <ListItem className='ps-0'>
                                    <ListItemIcon>
                                        <ArrowForward className='text--blue' />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong><Link passHref prefetch={false} legacyBehavior={true} href="/air-conditioning-service/"><a className='text--black'>Cooling</a></Link></strong>} />
                                </ListItem>
                                <ListItem className='ps-0'>
                                    <ListItemIcon>
                                        <ArrowForward className='text--blue' />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong><Link passHref prefetch={false} legacyBehavior={true} href="/commercial-hvac/"><a className='text--black'>Commercial HVAC</a></Link></strong>} />
                                </ListItem>
                                <ListItem className='ps-0'>
                                    <ListItemIcon>
                                        <ArrowForward className='text--blue' />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong><Link passHref prefetch={false} legacyBehavior={true} href="/boilers/"><a className='text--black'>Boiler</a></Link></strong>} />
                                </ListItem>
                                <ListItem className='ps-0'>
                                    <ListItemIcon>
                                        <ArrowForward className='text--blue' />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong><Link passHref prefetch={false} legacyBehavior={true} href="/tankles-water-heaters/"><a className='text--black'>Tankles Water Heaters</a></Link></strong>} />
                                </ListItem>
                                <ListItem className='ps-0'>
                                    <ListItemIcon>
                                        <ArrowForward className='text--blue' />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong><Link passHref prefetch={false} legacyBehavior={true} href="/rebates-and-promotions/"><a className='text--black'>Rebates And Promotions</a></Link></strong>} />
                                </ListItem>
                                <ListItem className='ps-0'>
                                    <ListItemIcon>
                                        <ArrowForward className='text--blue' />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong><Link passHref prefetch={false} legacyBehavior={true} href="/emergency/"><a className='text--black'>Emergency</a></Link></strong>} />
                                </ListItem>
                                <ListItem className='ps-0'>
                                    <ListItemIcon>
                                        <ArrowForward className='text--blue' />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong><Link passHref prefetch={false} legacyBehavior={true} href="/lennox-hvac/"><a className='text--black'>Lennox HVAC</a></Link></strong>} />
                                </ListItem>
                                <ListItem className='ps-0'>
                                    <ListItemIcon>
                                        <ArrowForward className='text--blue' />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong><Link passHref prefetch={false} legacyBehavior={true} href="/financing-option/"><a className='text--black'>Financing Option</a></Link></strong>} />
                                </ListItem>
                                <ListItem className='ps-0'>
                                    <ListItemIcon>
                                        <ArrowForward className='text--blue' />
                                    </ListItemIcon>
                                    <ListItemText primary={<strong><Link passHref prefetch={false} legacyBehavior={true} href="/furnace-inspection/"><a className='text--black'>Furnace Inspection</a></Link></strong>} />
                                </ListItem>
                            </List>
                        </Box>
                    </Box>
                </Container>
            </aside>
        </>
    )
}

export default ServiceCommonSidebar