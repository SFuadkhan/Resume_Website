import React from 'react'
import { Helmet } from 'react-helmet'
import Container from '../../components/Container/Container'

function HomePage() {
    
  return (
    <>
    <Helmet>
        <title>Home Page</title>
    </Helmet>
      <Container>
      <div>HomePage</div>
      </Container>
    </>
  )
}

export default HomePage