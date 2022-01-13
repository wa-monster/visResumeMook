import React,{useState,useEffect} from 'react'
import { DatePicker, Button, Modal,InputNumber} from 'antd'
import {PlusOutlined} from '@ant-design/icons'
import Overview from './components/overview/index'
import NoteList from './components/NoteList/index'
import moment from 'moment'
// const request = require('request')
// import electron from 'electron'
import {getAppPath} from '@src/util/appPath'
import fileAction from '@src/util/file'
export default function HomePage():JSX.Element {
  // const req = request

  const addNotes = ()=>{
    setShowModal(true)
  }
  const read = ()=>{
    return getAppPath().then((rootPath:string)=>{
      console.log('应用程序的目录路径为: ', rootPath);
      return fileAction.read(`${rootPath}app/notes/database/index.json`)
    })
  }
  const [showModal,setShowModal] = useState(false)
  const handleOk= ()=>{
    // const {net} = electron.remote;
    
    // let request=net.request('https://www.xbiquge.la/')

    // request.on('response',(response)=>{
    //     console.log(response.statusCode);
    //     console.log(response.headers);
  
    //     response.on('data',(chunk)=>{
    //         console.log(JSON.parse(chunk.toString()));
    //     })
    //     response.on('end',()=>{
    //       console.log('end');
          
    //     })
    // })
    // request.end();
    const newData = {
      money:moneyNumber,
      date:currentDate.format('YYYY-MM-DD')
    }
    listJson.push(newData)
    setListJson(listJson)
    getAppPath().then((rootPath:string)=>{
      console.log('应用程序的目录路径为: ', rootPath);
      console.log('文件写入，内容数据为: ',JSON.stringify(listJson));
      fileAction.write(`${rootPath}app/notes/database/index.json`,JSON.stringify(listJson)).then(data=>{
        console.log(`完成`)
      })
    })
    handleCancel()
  }
  const handleCancel = ()=>{
    // setMoneyNumber(0)
    setShowModal(false)
  }
  const [moneyNumber,setMoneyNumber] = useState<number>()
  const numberChange = (value:number)=>{
    setMoneyNumber(value)
  }
  // 日期
  const [currentDate,setCurrentDate] = useState<moment.Moment>(moment())
  const onDateChange= (data:moment.Moment | null)=>{
    setCurrentDate(data as moment.Moment)
  }
  const getNotesListByDate = ()=>{
    console.log('currentDate',currentDate);
  }
  useEffect(() => {
    getNotesListByDate()
  }, [currentDate])
  // 初始化
  const [listJson,setListJson] = useState<object[]>([])
  const init = async ()=>{
    try {
      const res = await read()
      const data = JSON.parse(res)
      console.log('data',data);
      setListJson(data)
      getNotesListByDate()
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    init()
  }, [])
  return (
    <>
      <div>杨大爷记账</div>
      <DatePicker defaultValue={currentDate} onChange={onDateChange} picker="month"/>
      <Overview income="awdawdaw" outcome="123123"></Overview>
      <div style={{height:'20px', width:'100%'}}></div>
      <NoteList />
      <Button type="primary" onClick={()=>addNotes()} shape="circle" icon={<PlusOutlined />} />
      <Modal visible={showModal} onOk={handleOk} onCancel={handleCancel}>
        <InputNumber min={0} value={moneyNumber} onChange={numberChange} />
      </Modal>
    </>
  )
}
