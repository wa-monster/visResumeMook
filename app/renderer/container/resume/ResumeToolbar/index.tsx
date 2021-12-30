import React, { useState,useEffect } from 'react';
import {useDispatch} from 'react-redux'
import './index.less';
import MyScrollBox from '@common/components/MyScrollBox'
import RESUME_TOOLBAR_LIST from '@common/constants/resume'
import Messager,{MESSAGE_EVENT_NAME_MAPS} from '@common/messager/index'

function ResumeToolbar() {
  const height = document.body.clientHeight;
  const dispatch = useDispatch()

  const [addToolbarList,setAddToolbarList] = useState<TSResume.SliderItem[]>([])
  const [unAddToolbarList,setUnAddToolbarList] = useState<TSResume.SliderItem[]>([])
  useEffect(() => {
    if(RESUME_TOOLBAR_LIST.length>0){
      let _addToolbarList:TSResume.SliderItem[] = [];
      let _unAddToolbarList:TSResume.SliderItem[] = [];
      RESUME_TOOLBAR_LIST.forEach(v=>{
        if(v.require) _addToolbarList.push(v);
        if(!v.require) _unAddToolbarList.push(v)
      })
      setAddToolbarList(_addToolbarList)
      setUnAddToolbarList(_unAddToolbarList)
      changeResumeToolbarKeys(_addToolbarList.map(v=>v.key))
    }
  }, [])
  const changeResumeToolbarKeys  = (keys:string[])=>{
    if(keys.length>0){
      dispatch({
        type:'templateModel/setStore',
        payload:{
          key:'resumeToolbarKeys',
          values: keys
        }
      })
    }
  }
  const onClickAddToolbarList = (toolbar:TSResume.SliderItem)=>{
    if(toolbar.require) return
    const nextAddToolbarList = addToolbarList.filter(v=>{
      return v.key !== toolbar.key
    })
    setAddToolbarList(nextAddToolbarList)
    const nextUnAddToolbarList = [...unAddToolbarList,toolbar]
    setUnAddToolbarList(nextUnAddToolbarList)
    changeResumeToolbarKeys(nextAddToolbarList.map(v=>v.key))
  }
  const onClickUnAddToolbarList = (toolbar:TSResume.SliderItem)=>{
    const nextUnAddToolbarList = unAddToolbarList.filter(v=>{
      return v.key !== toolbar.key
    })
    setUnAddToolbarList(nextUnAddToolbarList)
    const nextAddToolbarList = [...addToolbarList,toolbar]
    setAddToolbarList(nextAddToolbarList)
    changeResumeToolbarKeys(nextAddToolbarList.map(v=>v.key))
  }

  return (
    <div styleName='slider'>
      <MyScrollBox maxHeight={height - 180}>
        {!!addToolbarList.length && (
          <div styleName='module'>
             <div styleName="title">
              <span styleName="line" />
              已添加模块
            </div>
          <div styleName='content'>
            {addToolbarList.map((toolbar:TSResume.SliderItem)=>{
              return (
                <div styleName='box' onClick={()=>{
                  // 👇 事件发送
                  Messager.send(MESSAGE_EVENT_NAME_MAPS.OPEN_FORM_MODAL, {
                    form_name: toolbar.key,
                  })
                }} key={toolbar.key}>
                  <div styleName="info">
                    <i styleName="icon" />
                    <div styleName="text">
                      <div styleName="name">{toolbar.name}</div>
                      <div styleName="summary">{toolbar.summary}</div>
                    </div>
                    {toolbar.require && <div styleName="tips">必选项</div>}
                    {!toolbar.require && (
                        <div styleName="action">
                          <i styleName="edit" onClick={(e: React.MouseEvent) => {}} />
                          <i
                            styleName="delete"
                            onClick={(e: React.MouseEvent) => {
                              e.stopPropagation && e.stopPropagation();
                              onClickAddToolbarList(toolbar);
                            }}
                          />
                        </div>
                      )}
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>
        )
        }
        {!!unAddToolbarList.length && (
          <div styleName='module'>
            <div styleName="title">
              <span styleName="line" />
              未添加模块
            </div>
          <div styleName='content'>
            {unAddToolbarList.map((toolbar:TSResume.SliderItem)=>{
              return (
                <div styleName='box' onClick={()=>onClickUnAddToolbarList(toolbar)} key={toolbar.key}>
                  <div styleName="info">
                    <i styleName="icon" />
                    <div styleName="text">
                      <div styleName="name">{toolbar.name}</div>
                      <div styleName="summary">{toolbar.summary}</div>
                    </div>
                  </div>
                </div>
              )
            })
            }
          </div>
        </div>
        )
        }
        
      </MyScrollBox>
    </div>
  );
}
export default ResumeToolbar;