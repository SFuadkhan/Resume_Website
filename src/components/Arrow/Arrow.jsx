import React from 'react'
import"./index.css"
function Arrow({className = "", onClick}) {
  return (
    /* From Uiverse.io by benjimich */ 
<button onClick={onClick} className={`${className}` + " button"}>
  <div className="line one">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
  <div className="line two">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
  <div className="line three">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
    <div className="line four">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
    
    <div className="line five">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
    
    <div className="line six">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
    
    <div className="line seven">
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>
    <div className="round"></div>

  </div>
</button>
  )
}

export default Arrow