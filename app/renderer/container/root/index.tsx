import React from 'react'
import './index.less'
import {useHistory} from 'react-router'
import Logo from '@assets/logo.png'
import { shell} from 'electron'
import { ROUTE_ENTRY, ROUTER_KEY} from '@src/common/constants/router'
import {isHttpOrHttpsUrl} from '@common/utils/router'


export default function Root() {
  const history = useHistory()
  const onRouterToLink = (router:TSRouter.Item)=>{
    if(isHttpOrHttpsUrl(router.url)){
      shell.openExternal('router.url')
    }else{
      console.log('跳转到简历页面');
      history.push('/resume')
      
    }
  }
  return (
    <div styleName='root'>
      <div styleName='container'>
        <img src={Logo} alt="图片" />
        <div styleName='title'>VisResumeMook</div>
        <div styleName='tips'>一个模板简历制作平台，让你的简历更加出众</div>
        <div styleName='action'>
          {ROUTE_ENTRY.map((v:TSRouter.Item)=>{
            return (
              <div styleName='item' key={v.key} onClick={()=>onRouterToLink(v)}>{v.text}</div>
            )
          })
          }
        </div>
        <div styleName='copyright'>
          <div styleName='footer'>
            <p styleName='copyright'>
            Copyright © 2018-{new Date().getFullYear()} All Rights Reserved. Copyright By wa-monster
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
