import React from 'react'
import './index.less'
import fileAction from '@common/utils/file';
import { getAppPath } from '@src/common/utils/appPath';
/**
 *
 *
 * @export
 * @return {*} 
 */
export default function Resume() {
  getAppPath().then((rootPath:string)=>{
    console.log('应用程序的目录路径为: ', rootPath);
    console.log('文件读取，内容数据为: ');
    fileAction.read(`${rootPath}app/renderer/container/resume/index.tsx`).then(data=>{
      console.log(data);
    })
  })
  
  return (
    <div>
      我是简历模块
    </div>
  )
}
