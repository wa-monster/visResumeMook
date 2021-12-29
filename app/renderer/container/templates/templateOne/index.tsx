import React from 'react'
import Avatar from './components/Avatar'
import AvatarImage from '@assets/avatar.jpg'

export default function TemplateOne() {
  return (
    <div styleName='a4-box'>
      <div styleName='flex container' id="visPdf">
        <div styleName='left'>
          <div styleName='avatar'>
            <Avatar src={AvatarImage} alt="图像"></Avatar>
          </div>
        </div>
      </div>
    </div>
  )
}
