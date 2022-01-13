import React from 'react'
import { Statistic, Row, Col } from 'antd'
interface propsType {
  income:string | number;
  outcome:string | number;
}
export default function Overview(props:propsType) {
  return (
    <Row gutter={16}>
      <Col span={12}>
        <Statistic
          title="支出"
          value={11.28}
          precision={2}
          valueStyle={{ color: '#3f8600' }}
          suffix="%"
        />
      </Col>
      <Col span={12}>
        <Statistic
          title="收入"
          value={11.28}
          precision={2}
          valueStyle={{ color: '#3f8600' }}
          suffix="%"
        />
      </Col>
    </Row>
  )
}
