import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet'
import "./index.css"
function HomePage() {
  return (
    <>
    <Helmet>
        <title>Home Page</title>
    </Helmet>
            <div id="home_page_container">
                <h2>Safarov Fuadkhan</h2>
                <p>Frontend Developer</p>
            </div>
    </>
  )
}

export default HomePage