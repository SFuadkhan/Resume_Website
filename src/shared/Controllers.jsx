import React from 'react'
import ControllerComponents from '../components/ControllersComponent/ControllerComponents'
import { Outlet } from 'react-router-dom'

function Controllers({children}) {
  return (
    <ControllerComponents>
        {children}
    </ControllerComponents>
  )
}

export default Controllers