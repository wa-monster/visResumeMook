import React from 'react'

import '../../../styles/template-one.less'

function BaseInfo(){
  return (
    <div styleName='container'>
      <p styleName='title'>基本信息 Basic</p>
      <ul styleName='content'>
        <li>院校: 成都高级大学</li>
        <li>专业: 高级专业</li>
        <li>学历: 大专</li>
        <li>学年: 2015.09 - 2019.06</li>
        <li>籍贯: 四川·成都</li>
      </ul>
    </div>
  )
}