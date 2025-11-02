import React from 'react'
import "./ButtonLoader.css"
function ButtonLoader({color}:{color:string}) {
  return (

     <div className="loader" style={{ "--loader-color": color } as React.CSSProperties}></div>
  )
}

export default ButtonLoader