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
    const { pageNo } = context.params
    let res = await fetch(`https://pritams5.sg-host.com/wp-json/wp/v2/posts?_embed=true&page=${pageNo}`)
    let data = await res.json()
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

const BlogPagination = ({ data, sidebarBlogs, category }) => {
    const [blogs, setBlogs] = useState([])
    const [hydration, setHydration] = useState(false)
    const router = useRouter()
    const { pageNo } = router.query

    const wp = new WPAPI({
        endpoint: "https://pritams5.sg-host.com/wp-json" 
    })

    const fetchBlogs = async () => {
        const posts = await wp.posts().page(pageNo).get();
        setBlogs(posts)
    }

    useEffect(() => {
        if (typeof window !== undefined) {
            setHydration(true)
        } else {
            setHydration(false)
        }
    }, [])

    useEffect(() => {
        if (pageNo) {
            fetchBlogs()
        }
    }, [pageNo, blogs])

    const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

    return (
        <>
            {
                hydration ? <>
                    <Head>
                        <title>Blog - teressenheating.ca</title>
                        <meta name="description" content="" />
                        <meta name="robots" content="index" />
                        <link rel="canonical" href={`/blog/page/${pageNo}/`} />
                    </Head>
                    <main>
                        <CommonBanner bg={Banner} title="Blog" />
                        <section>
                            <Container maxWidth="xxl">
                                <Grid container>
                                    <Grid item xs={12} md={10} className="mx-auto">
                                        <Box py={5}>
                                            <Grid container spacing={5}>
                                                <Grid item xs={12} md={8}>
                                                    {
                                                        data ? data.map(item => <Card key={item.id} className="m-md-5 m-3 shadow-none">
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
                                                                            item ? item.title ? item.title.rendered ? item.slug ? <Typography variant='h3'><Link legacyBehavior={true} href={`/blog/${item.slug}`} ><a className='text--black'>{item.title.rendered}</a></Link></Typography> : null : null : null : null
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
                                                    <Box mt={5} py={1} className="d-flex justify-content-center border-top">
                                                        <Box mr={1}>
                                                            <GreyFilledBtn navlink={true} btnlink={`/blog/`} btnTitle="FIRST" />
                                                        </Box>
                                                        <Box mr={1}>
                                                            {
                                                                blogs ? blogs._paging ? blogs._paging.links ? blogs._paging.links.next ? <>
                                                                    <BlueFilledBtn navlink={true} btnlink={`/blog/page/${Number(pageNo) + 1}/`} btnTitle="NEXT" />
                                                                </> : null : null : null : null
                                                            }
                                                        </Box>
                                                        <Box mr={1}>
                                                            {
                                                                pageNo != 2 ? blogs ? blogs._paging ? blogs._paging.links ? blogs._paging.links.prev ? <>
                                                                    <BlueFilledBtn navlink={true} btnlink={`/blog/page/${Number(pageNo) - 1}/`} btnTitle="PREV" />
                                                                </> : null : null : null : null : null
                                                            }
                                                        </Box>
                                                    </Box>
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
                </> : "Loading..."
            }
        </>
    )
}

export default BlogPagination