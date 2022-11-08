import React, { useEffect, useState } from 'react'
import Head from 'next/head';
import Banner from '../../public/blog/blog.webp'
import { BlogCommonSidebar, CommonBanner } from '../../components/components'
import { Box, Container, Grid } from '@mui/material';
import Image from 'next/image'


export const getServerSideProps = async (context) => {
    const { slug } = context.params
    const res = await fetch(`https://pritams5.sg-host.com/wp-json/wp/v2/posts?_embed=true&slug=${slug}`);
    const data = await res.json()
    const sidebarBlogsRes = await fetch('https://pritams5.sg-host.com/wp-json/wp/v2/posts?_embed=true&page=1');
    const sidebarBlogs = await sidebarBlogsRes.json()
    const cat = await fetch('https://pritams5.sg-host.com/wp-json/wp/v2/categories?page=1&per_page=99')
    const category = await cat.json()
    return {
        props: {
            data,
            sidebarBlogs,
            category
        },
    }
}

const SingleBlog = ({ data, sidebarBlogs, category }) => {
    const [blog] = data
    const [hydration, setHydration] = useState(false)

    useEffect(() => {
        if (typeof window !== undefined) {
            setHydration(true)
        } else {
            setHydration(false)
        }
    }, [])

    return (
        <>
            {
                hydration ? <>
                    {
                        blog ? <>
                            <Head>
                                <title>{blog.yoast_head_json ? blog.yoast_head_json.title ? blog.yoast_head_json.title : null : null}</title>
                                <meta name="description" content={blog.yoast_head_json ? blog.yoast_head_json.description ? blog.yoast_head_json.description : null : null} />
                                <meta name="robots" content="index" />
                                <link rel="canonical" href={`/blog/${blog.slug}/`} />
                            </Head>
                            <main>
                                <CommonBanner bg={Banner} title={blog ? blog.title ? blog.title.rendered ? blog.title.rendered : null : null : null} />
                                {
                                    blog ? <>
                                        <section>
                                            <Container maxWidth="xxl">
                                                <Grid container>
                                                    <Grid item xs={12} md={10} className="mx-auto">
                                                        <Box py={5}>
                                                            <Grid container spacing={5}>
                                                                <Grid item xs={12} md={8}>
                                                                        <Box >
                                                                            {
                                                                                blog._embedded ? blog._embedded['wp:featuredmedia'] ? blog._embedded['wp:featuredmedia'][0] ? blog._embedded['wp:featuredmedia'][0].source_url ? <>
                                                                                    <Box mb={3} id="blogContent">
                                                                                        <img src={blog._embedded['wp:featuredmedia'][0].source_url} alt={blog._embedded['wp:featuredmedia'][0].alt_text} className="img-fluid" />
                                                                                    </Box>
                                                                                </> : null : null : null : null

                                                                            }
                                                                        </Box>
                                                                        <Box>
                                                                            {
                                                                                blog.content ? blog.content.rendered ? <>
                                                                                    <Box dangerouslySetInnerHTML={{ __html: blog.content.rendered }} />
                                                                                </> : null : null
                                                                            }
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
                                    </> : null
                                }
                            </main>
                        </> : null
                    }
                </> : "Loading..."
            }
        </>
    )
}

export default SingleBlog