import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Dynamic Program Engineer</title>
        <meta property="og:title" content="Dynamic Program Engineer" />
      </Helmet>
    </div>
  )
}

export default Home
