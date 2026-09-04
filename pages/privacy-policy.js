import { Box, Container, Grid, Typography } from '@mui/material'
import Head from 'next/head'
import Link from 'next/link'
import { CommonBanner, SectionalHeading } from '../components/components'
import Banner from '../public/privacy-policy/pp.webp'

const PrivacyPolicy = () => {
    return (
        <>
            <Head>
                <title>Privacy Policy - Airlinx Heating</title>
                <meta name="description" content="Read the Airlinx Heating Privacy Policy to understand how we collect, use, and protect your personal information and website usage data." />
                <meta name="robots" content="index, follow" />
                <link rel="canonical" href="https://airlinxheating.ca/privacy-policy/" />
            </Head>
            <main>
                <CommonBanner bg={Banner} title="Privacy Policy" color="#fff" />
                <section>
                    <Container maxWidth="xxl">
                        <Grid container>
                            <Grid item xs={12} md={10} className="mx-auto">
                                <Box py={5}>
                                    <Typography className='para'>Airlinx Heating & Air Conditioning is sensitive to the private nature of information you provide to us over the Internet. Our Privacy Policy is designed to protect your personal information while at the same time giving you the opportunity to obtain interesting and useful information, products and services.</Typography>


                                    <Typography className='para'>Personal information may include your name, phone number, address and e-mail address along with other information by which you can be personally identified.</Typography>


                                    <Typography className='para'>We also collect usage information from you when you visit us. Web Site usage information is not identifiable information. It describes how our Web Site is used and navigated, including the number and frequency of visitors to each Web page and the length of their stay. Web Site usage information also includes the domain names of browsers that visit our Web Site, time of day the Web Site was visited and other non-personally identifiable information.</Typography>


                                    <Typography className='para'>We also collect usage information from you when you visit us. Web Site usage information is not identifiable information. It describes how our Web Site is used and navigated, including the number and frequency of visitors to each Web page and the length of their stay. Web Site usage information also includes the domain names of browsers that visit our Web Site, time of day the Web Site was visited and other non-personally identifiable information.</Typography>


                                    <Typography className='para'>Airlinx is collecting user demographic insights using select Google Analytics Advertising Features. The information collected will only be used to analyze data in the Demographics and Interest Reports as they appear in Google Analytics. Airlinx will not use this data for any other purposes. If you wish to opt out of this, please visit Google Analytics to download the Opt Out browser plug in.</Typography>

                                    <Typography className='para'><Link legacyBehavior href="/contact-us/"><a className='text--red'>Please click here to contact us</a></Link> if you have any further questions about our privacy policy or to stop receiving future emails, phone calls, or other direct communications from Airlinx Heating & Air Conditioning.</Typography>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </section>
            </main>
        </>
    )
}

export default PrivacyPolicy