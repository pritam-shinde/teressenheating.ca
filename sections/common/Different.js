import { Box, Container, Grid, List, ListItem, ListItemIcon, ListItemText } from '@mui/material'
import React from 'react'
import { SectionalHeading } from '../../components/components'
import { FiCheckSquare } from 'react-icons/fi'

const Different = ({ title, titleVariant, titleAlign, list }) => {
    return (
        <>
            <section className='my-3' id="different">
                <Container maxWidth="xxl">
                    <Grid container>
                        <Grid item xs={12} md={10} className="mx-auto">
                            <Box py={3}>
                                {
                                    title ? <SectionalHeading simpletext={title} variant={titleVariant} align={titleAlign} /> : null
                                }
                                <Box mt={5}>
                                {
                                    list ?
                                        <Grid container>
                                            {
                                                list.map(item => <Grid key={item} item xs={12} sm={6} md={4}>
                                                    <ListItem>
                                                        <ListItemIcon>
                                                            <FiCheckSquare className='text--blue' style={{fontSize:"1.5rem"}} />
                                                        </ListItemIcon>
                                                        <ListItemText primary={<h4>{item}</h4>} />
                                                    </ListItem>
                                                </Grid>)
                                            }
                                        </Grid> : null
                                }
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Container>
            </section>
        </>
    )
}

export default Different