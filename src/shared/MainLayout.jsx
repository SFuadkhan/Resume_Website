import React from 'react'
import Background from './Background'
import Controllers from './Controllers'
import { Outlet } from 'react-router-dom'

function MainLayout({children}) {
  return (
    <Background>
        <Controllers>
            <Outlet></Outlet>
        </Controllers>
    </Background>
  )
}

export default MainLayout