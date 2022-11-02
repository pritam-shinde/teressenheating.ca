import React, { useEffect, useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import WPAPI from 'wpapi'
import { useRouter } from 'next/router'
import Banner from '../../../public/blog/blog.webp'
import { BlogCommonSidebar, CommonBanner, BlueFilledBtn, GreyFilledBtn } from '../../../components/components'
import { Box, Container, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material'
import Styles from '../../../styles/Blog.module.css'


export const getServerSideProps = async (context) => {
    const { slug } = context.params;
    const res = await fetch(`https://pritams5.sg-host.com/wp-json/wp/v2/categories?slug=${slug}`);
    const data = await res.json();
    const sidebarBlogsRes = await fetch('https://pritams5.sg-host.com/wp-json/wp/v2/posts?_embed=true&page=1');
    const sidebarBlogs = await sidebarBlogsRes.json();
    const cat = await fetch('https://pritams5.sg-host.com/wp-json/wp/v2/categories?page=1&per_page=99')
    const category = await cat.json()
    return {
        props: {
            data,
            sidebarBlogs,
            category
        }
    }
}

const SingleCategory = ({ data, sidebarBlogs, category }) => {
    const [hydration, setHydration] = useState(false)
    const [blogs, setBlogs] = useState([])

    const wp = new WPAPI({
        endpoint: "https://pritams5.sg-host.com/wp-json"
    })

    const fetchBlogs = async (id) => {
        const posts = await wp.posts().embed().param({ categories: [id] }).perPage(99).page(1).get()
        setBlogs(posts)
    }

    useEffect(() => {
        if (data[0].id) {
            fetchBlogs(data[0].id)
        }
    }, [data[0].id]);

    useEffect(() => {
        if (typeof window !== undefined) {
            setHydration(true)
        } else {
            setHydration(false)
        }
    }, []);

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <>
            {
                hydration ? <>
                    <Head>
                        <title>{data ? data[0] ? data[0].name ? data[0].name : null : null : null} - teressenheating.ca</title>
                        <meta name="description" content="" />
                        <meta name="robots" content="index" />
                        <link rel="canonical" href={`/blog/category/${data ? data[0] ? data[0].slug ? data[0].slug : null : null : null}/`} />
                    </Head>
                    <main>
                        <CommonBanner bg={Banner} title={data ? data[0] ? data[0].name ? data[0].name : null : null : null} />
                        <section>
                            <Container maxWidth="xxl">
                                <Grid container>
                                    <Grid item xs={12} md={10} className="mx-auto">
                                        <Box py={5}>
                                            <Grid container spacing={5}>
                                                <Grid item xs={12} md={8}>
                                                {
                                                        blogs ? blogs.map(item => <Card key={item.id} className="m-md-5 m-3 shadow-none">
                                                            {
                                                                item ? item._embedded ? item._embedded['wp:featuredmedia'] ? item._embedded['wp:featuredmedia'][0] ? item._embedded['wp:featuredmedia'][0].source_url ? <CardMedia component="img" image={item._embedded['wp:featuredmedia'][0].source_url} alt={item._embedded['wp:featuredmedia'][0].alt_text
                                                                } /> : null : null : null : null : null
                                                            }
                                                            <CardContent>
                                                                {
                                                                    item ? item._embedded ? item._embedded.author ? item._embedded.author[0] ? item._embedded.author[0].name ? <Typography className='para'>Posted By: <strong className='text--blue'>{item._embedded.author[0].name}</strong></Typography> : null : null : null : null : null

                                                                }
                                                                <Box className='d-flex flex-md-row flex-column'>
                                                                    <Box className='flex-shrink-0 mb-md-0 mb-3'>
                                                                        <Box py={0.5} px={2.5} className='bg--blue rounded'>
                                                                            <Typography className={Styles.date}>{item.date.split("T")[0].split("-")[2]}</Typography>
                                                                            <Typography className={Styles.month}>{months[Number(item.date.split("T")[0].split("-")[1]) - 1]}</Typography>
                                                                        </Box>
                                                                    </Box>
                                                                    <Box className='flex-grow-1 ms-3'>
                                                                        {
                                                                            item ? item.title ? item.title.rendered ? item.slug ? <Typography variant='h3'><Link href={`/blog/${item.slug}`} ><a className='text--black'>{item.title.rendered}</a></Link></Typography> : null : null : null : null
                                                                        }
                                                                        {
                                                                            item ? item.excerpt ? item.excerpt.rendered ? <Typography dangerouslySetInnerHTML={{ __html: `${item.excerpt.rendered.split(" ").slice(0, 30).join(" ")} [...]` }} /> : null : null : null
                                                                        }
                                                                        <Box mt={3}>
                                                                            <GreyFilledBtn navlink={true} btnlink={item ? item.title ? item.title.rendered ? item.slug ? `/blog/${item.slug}` : null : null : null : null} btnTitle="Read More" />
                                                                        </Box>
                                                                    </Box>
                                                                </Box>
                                                            </CardContent>
                                                        </Card>) : null
                                                    }
                                                </Grid>
                                                <Grid item xs={12} md={4}>
                                                    <BlogCommonSidebar data={sidebarBlogs} category={category} />
                                                </Grid>
                                            </Grid>
                                        </Box>
                                    </Grid>
                                </Grid>
                            </Container>
                        </section>
                    </main>
                </> : null
            }
        </>
    )
}

export default SingleCategory