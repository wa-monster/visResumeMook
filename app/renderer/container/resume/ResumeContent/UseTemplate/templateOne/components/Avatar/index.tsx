import React from 'react'
import './index.less'
interface Avatar {
  src?:string
  alt?:string
}
function Avatar({src,alt}:Avatar){
  return (
    <div styleName='box'>
      <div styleName='avatar'>
        <img src={src} alt={alt} />
      </div>
    </div>
  )
}

export default Avatar