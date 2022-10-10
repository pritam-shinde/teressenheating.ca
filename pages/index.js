import React from 'react'
import Head from 'next/head'
import { Facilities, Hero } from '../sections/sections'

const index = () => {
  return (
    <>
      <Head>
        <title>Home - teressenheating.ca</title>
        <meta name="description" content="" />
        <meta name="robots" content="index" />
        <link rel="canonical" href="/" />
      </Head>
      <main>
        <Hero />
        <Facilities />
      </main>
    </>
  )
}

export default index