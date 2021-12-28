/*
 * @Description: enter your description
 * @Autor: rjguan
 * @Date: 2021-12-28 16:22:11
 * @LastEditors: rjguan
 * @LastEditTime: 2021-12-28 17:31:56
 */
import fs, { promises as fsPromiseAPIs } from 'fs';

/** @type {*} */
const fileAction = {
  read:(path:string,encoding:BufferEncoding='utf-8'):Promise<string>=>{
    return fsPromiseAPIs.readFile(path,{encoding })
  },
  write: (path:string,content:string,encoding:BufferEncoding='utf-8'):Promise<void>=>{
    return fsPromiseAPIs.writeFile(path,content,{encoding})
  },
  rename:(oldPath:string,newPath:string):Promise<void>=>{
    return fsPromiseAPIs.rename(oldPath,newPath);
  },
  delete:(path:string):Promise<void>=>{
    return fsPromiseAPIs.unlink(path)
  },
  hasFile: (path:string):Promise<void>=>{
    return fsPromiseAPIs.access(path,fs.constants.F_OK)
  },
  canWrite: (path:string):Promise<void>=>{
    return fsPromiseAPIs.access(path,fs.constants.W_OK)
  },
  canRead: (path:string):Promise<void>=>{
    return fsPromiseAPIs.access(path,fs.constants.R_OK)
  }
}

export default fileAction
