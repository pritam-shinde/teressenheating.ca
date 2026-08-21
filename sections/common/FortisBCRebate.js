import { Box, Container, Grid, Paper, Typography } from '@mui/material'
import { BlueFilledBtn, SectionalHeading } from '../../components/components'
import { FiTag } from 'react-icons/fi'

const FortisBCRebate = () => {
    return (
        <section className="my-md-5 my-4">
            <Container maxWidth="xxl">
                <Grid container>
                    <Grid item xs={12} md={10} className="mx-auto">
                        <Paper
                            elevation={1}
                            sx={{
                                border: '1px solid #eeeeee',
                                borderLeft: '8px solid #10529d',
                                borderRadius: '12px',
                                p: { xs: 4, md: 5 },
                                backgroundColor: '#ffffff',
                                boxShadow: '0 8px 24px rgba(0,0,0,0.04)'
                            }}
                        >
                            <Grid container spacing={4} alignItems="center">
                                <Grid item xs={12} md={8}>
                                    <Box>
                                        <SectionalHeading
                                            blacktext="FortisBC Furnace"
                                            blueText="Maintenance Rebate"
                                            variant="h2"
                                        />
                                        <Typography className='para' sx={{ mt: 1, mb: 4, fontSize: '1.05rem', lineHeight: 1.6 }}>
                                            If you're a FortisBC residential gas customer, you may be eligible for a rebate when you have your furnace professionally serviced. Learn more about the FortisBC Appliance Maintenance Program and eligibility requirements.
                                        </Typography>
                                        <Box>
                                            <BlueFilledBtn
                                                btnlink="https://www.fortisbc.com/rebates/home/furnace-and-boiler-maintenance-rebate"
                                                btnTitle="FortisBC Appliance Maintenance Program"
                                                anchor={true}
                                            />
                                        </Box>
                                    </Box>
                                </Grid>
                                <Grid item xs={12} md={4} sx={{ display: { xs: 'none', md: 'flex' }, justifyContent: 'center' }}>
                                    <Box sx={{
                                        width: '130px',
                                        height: '130px',
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                        backgroundColor: '#f4f7fb',
                                        borderRadius: '50%',
                                    }}>
                                        <FiTag style={{ fontSize: '60px', color: '#10529d', strokeWidth: 2 }} />
                                    </Box>
                                </Grid>
                            </Grid>
                        </Paper>
                    </Grid>
                </Grid>
            </Container>
        </section>
    )
}

export default FortisBCRebate
