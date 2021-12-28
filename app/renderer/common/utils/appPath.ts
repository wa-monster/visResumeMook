/*
 * @Description: enter your description
 * @Autor: rjguan
 * @Date: 2021-12-28 16:58:09
 * @LastEditors: rjguan
 * @LastEditTime: 2021-12-28 17:34:08
 */
import { ipcRenderer } from 'electron';



export function getAppPath(){
  
  return new Promise(
    ( resolve:(value:string)=>void,reject:(value:Error)=>void )=>{
      ipcRenderer.send('get-root-path','');
      ipcRenderer.on('reply-root-path',(event,arg:string)=>{
        if(arg){
          resolve(arg);
        }else{
          reject(new Error('项目路径错误'))
        }
      })
    }
  )
}