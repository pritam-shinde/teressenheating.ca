import { Box, Container, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material'
import React from 'react'
import Link from 'next/link'
import { ArrowForward } from '@mui/icons-material'
import Styles from '../../styles/Blog.module.css'

const BlogCommonSidebar = ({ data, category }) => {
  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
  return (
    <>
      <Container maxWidth="xxl" style={{height:"100%"}}>
        <Box>
          <Box>
            <Typography variant='h3' className='text--blue'>Recent Post</Typography>
          </Box>
          <Box mt={2}>
            {
              data.length > 0 ? data.slice(0, 5).map(item => <Box mb={3} key={`sidebar-recent-post-id-${item.id}`}>
                <Typography className='m-0'>{months[Number(item.date.split("T")[0].split("-")[1]) - 1]} {item.date.split("T")[0].split("-")[2]}</Typography>
                {
                  item ? item.title ? item.title.rendered ? item.slug ? <Typography variant='h4'><Link passHref prefetch={false} legacyBehavior={true} href={`/blog/${item.slug}`} ><a className='text--black'>{item.title.rendered}</a></Link></Typography> : null : null : null : null
                }
              </Box>) : null
            }
          </Box>
        </Box>
        <Box mt={5} className={Styles.stickyCategory}>
          <Box mb={2}>
            <Typography variant='h3' className='text--blue'>Category</Typography>
          </Box>
          <Box>
            {
              category.length > 0 ? <List className='p-0 m-0'>
                {
                  category.map(item => <ListItem className='mb-2 ps-0' key={`sidebar-recent-category-id-${item.id}`}>
                    <ListItemIcon>
                      <ArrowForward className='text--blue' />
                    </ListItemIcon>
                    <ListItemText primary={<strong><Link passHref prefetch={false} legacyBehavior={true} href={`/blog/category/${item.slug}`}><a className='text--black'>{item.name}</a></Link></strong>} />
                  </ListItem>)
                }
              </List> : null
            }
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default BlogCommonSidebar