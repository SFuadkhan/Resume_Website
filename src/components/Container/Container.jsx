import React from 'react'
import "./index.css"
import Header from '../Header/Header'
function Container({children}) {
  return (
    <div id='container'>
        <Header></Header>
        {children}
    </div>
  )
}

export default Container