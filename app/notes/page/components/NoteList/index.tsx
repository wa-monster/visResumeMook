import React from 'react'
import {List} from 'antd'

const NoteHeader = ()=>{
  return (
    <div>Header</div>
  )
}
export default function NoteList() {
  const data = [
    '吃饭 20'
  ]
  return (
    <List
      header={<NoteHeader />}
      dataSource={data}
      renderItem={item => (
        <List.Item>
          <span>{item}</span>
        </List.Item>
      )}
    />
  )
}
