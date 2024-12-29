import React from 'react'
import ParallaxBG from '../components/ParallaxBG/ParallaxBG'
import { Outlet } from 'react-router-dom'

function Background({children}) {
  return (
    <ParallaxBG>
        {children}
    </ParallaxBG>
  )
}

export default Background