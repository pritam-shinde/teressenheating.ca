import React from 'react'
import Head from 'next/head';
import Banner from '../../public/blog/blog.webp'
import { BlogCommonSidebar, CommonBanner } from '../../components/components'
import { Box, Container, Grid } from '@mui/material';
import { blog_slugs, blog_slugs_string, sanitizeSidebarBlogs, sanitizeSingleBlog } from '../../constants/blog-constant';
import fallbackBlogs from '../../constants/fallback-blogs.json';

export const getStaticPaths = async () => {
    return {
        paths: [],
        fallback: 'blocking'
    }
}

export const getStaticProps = async (context) => {
    const { slug } = context.params;
    if (!blog_slugs[slug]) {
        return {
            notFound: true
        };
    }

    try {
        const res = await fetch(`https://api.teressenheating.ca/index.php/wp-json/wp/v2/posts?_embed=true&slug=${slug}`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const rawData = await res.json();
        if (!rawData || !Array.isArray(rawData) || rawData.length === 0) {
            throw new Error(`No post data for slug ${slug}`);
        }

        const blogData = sanitizeSingleBlog(rawData[0]);
        if (!blogData) {
            throw new Error(`Failed to sanitize slug ${slug}`);
        }

        let sidebarBlogs = [];
        try {
            const sidebarBlogsRes = await fetch(`https://api.teressenheating.ca/index.php/wp-json/wp/v2/posts?slug=${blog_slugs_string}&_fields=id,date,slug,title`);
            const rawSidebarBlogs = await sidebarBlogsRes.json();
            sidebarBlogs = sanitizeSidebarBlogs(rawSidebarBlogs);
        } catch (sidebarErr) {
            sidebarBlogs = sanitizeSidebarBlogs(fallbackBlogs.summary || []);
        }

        return {
            props: {
                data: [blogData],
                sidebarBlogs: sidebarBlogs.length > 0 ? sidebarBlogs : sanitizeSidebarBlogs(fallbackBlogs.summary || []),
                category: []
            },
            revalidate: 60
        };
    } catch (error) {
        console.warn(`Using fallback data for slug ${slug}:`, error.message);
        const fallbackPost = fallbackBlogs.singles?.[slug];
        if (fallbackPost) {
            return {
                props: {
                    data: [fallbackPost],
                    sidebarBlogs: sanitizeSidebarBlogs(fallbackBlogs.summary || []),
                    category: []
                },
                revalidate: 60
            };
        }
        return {
            notFound: true
        };
    }
}

const SingleBlog = ({ data, sidebarBlogs = [], category = [] }) => {
    const blog = data && data[0] ? data[0] : null

    return (
        <>
            {
                blog ? <>
                    <Head>
                        <title>{blog.yoast_head_json ? blog.yoast_head_json.title ? blog.yoast_head_json.title : null : null}</title>
                        <meta name="description" content={blog.yoast_head_json ? blog.yoast_head_json.description ? blog.yoast_head_json.description : null : null} />
                        <meta name="robots" content="index, follow" />
                        <link rel="canonical" href={`https://airlinxheating.ca/blog/${blog.slug}/`} />
                    </Head>
                    <main>
                        <CommonBanner bg={Banner} blogBanner={true} title={blog ? blog.title ? blog.title.rendered ? blog.title.rendered : null : null : null} />
                        <section>
                            <Container maxWidth="xxl">
                                <Grid container>
                                    <Grid item xs={12} md={10} className="mx-auto">
                                        <Box py={5}>
                                            <Grid container spacing={5}>
                                                <Grid item xs={12} md={8}>
                                                    <Box>
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
                    </main>
                </> : "Loading..."
            }
        </>
    )
}

export default SingleBlog
