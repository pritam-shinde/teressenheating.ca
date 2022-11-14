import { Box, Container, Grid, Typography } from '@mui/material'
import Link from 'next/link'
import React from 'react'
import {useRouter} from "next/router";
import { SectionalHeading } from '../../components/components';

const Locations = () => {
    const router = useRouter();
    return (
        <>
            <section className='my-3' id="locationSec">
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={3}>
                                <SectionalHeading blacktext="Areas we" blueText="serve in" variant="h2" align="center"  />
                                <Box mt={5}>
                                <Grid container spacing={5}>
                                    {
                                        [
                                            { id: "loc-1", link: "/vancouver", title: "Vancouver" },
                                            { id: "loc-2", link: "/burnaby", title: "Burnaby" },
                                            { id: "loc-3", link: "/west-vancouver", title: "West Vancouver" },
                                            { id: "loc-4", link: "/north-vancouver", title: "North Vancouver" },
                                            { id: "loc-5", link: "/coquitlam", title: "Coquitlam" },
                                            { id: "loc-6", link: "/richmond", title: "Richmond" },
                                            { id: "loc-7", link: "/white-rock", title: "White Rock" },
                                            { id: "loc-8", link: "/tsawwassen", title: "Tsawwassen" },
                                            { id: "loc-9", link: "/port-moody", title: "Port Moody" },
                                            { id: "loc-10", link: "/pitt-meadows", title: "Pitt Meadows" },
                                            { id: "loc-11", link: "/new-westminster", title: "New Westminster" },
                                            { id: "loc-12", link: "/maple-ridge", title: "Maple Ridge" },
                                        ].map(item => <Grid key={item.id} item xs={12} sm={6} md={4} lg={3}>
                                            <Box p={2} className={`locationBox ${router.pathname == item.link ? 'active' : null}`}>
                                                <Typography variant='h4'><Link legacyBehavior={true} href={`${item.link}/`}><a className="title">{item.title}</a></Link></Typography>
                                            </Box>
                                        </Grid>)
                                    }
                                </Grid>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Locations