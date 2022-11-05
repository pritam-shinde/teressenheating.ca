import { Box, Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import React, { useEffect, useState } from 'react'
import Banner from '../../public/blog/blog.webp'
import { CommonBanner, GreyFilledBtn, BlogCommonSidebar, BlueFilledBtn } from '../../components/components'
import Link from 'next/link';
import Styles from '../../styles/Blog.module.css'
import WPAPI from 'wpapi';

export const getServerSideProps = async () => {
  const res = await fetch('https://pritams5.sg-host.com/wp-json/wp/v2/posts?_embed=true&page=1');
  const data = await res.json();
  const cat = await fetch('https://pritams5.sg-host.com/wp-json/wp/v2/categories?page=1&per_page=99')
  const category = await cat.json()
  return {
    props: {
      data,
      category
    }
  }
}

const Blog = ({ data, category }) => {
  const [hydration, setHydration] = useState(false)
  const [blogs, setBlogs] = useState([])
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const wp = new WPAPI({
    endpoint: "https://pritams5.sg-host.com/wp-json"
  })

  const fetchBlog = async () => {
    const posts = await wp.posts().page(1).get();
    setBlogs(posts)
  }

  useEffect(() => {
    fetchBlog()
  })

  useEffect(() => {
    if (typeof window !== undefined) {
      setHydration(true)
    } else {
      setHydration(false)
    }
  }, [])

  return (
    <>
      <Head>
        <title>Blog - teressenheating.ca</title>
        <meta name="description" content="" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/blog/" />
      </Head>
      <main>
        <CommonBanner bg={Banner} title={<span className='text--black'>Blog</span>} />
        {
          hydration ? <><section>
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
                        <Box mt={5} className="d-flex justify-content-center">
                          {
                            blogs ? blogs._paging ? blogs._paging.links ? blogs._paging.links.next ? <>
                              <BlueFilledBtn navlink={true} btnlink={`/blog/page/2/`} btnTitle="NEXT" />
                            </> : null : null : null : null
                          }

                        </Box>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <BlogCommonSidebar data={data} category={category} />
                      </Grid>
                    </Grid>
                  </Box>
                </Grid>
              </Grid>
            </Container>
          </section></>
            : "Loading..."
        }
      </main >
    </>
  )
}

export default Blog