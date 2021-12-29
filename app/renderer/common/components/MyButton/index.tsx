import React from "react";

import classnames from 'classnames'
import './index.less'

export interface Button{
  size?: 'middle' | 'big' | 'small';
  width?: number;
  style?: React.CSSProperties;
  children?: React.ReactNode | any;
  disabled?: boolean;
  className?: string;
  onClick?: Function;
  border?:boolean;
}

function MyButton({
  size='small',
  style,
  width,
  children,
  disabled,
  className,
  onClick,
  border=true
}:Button){
  return (
    <div
      style={{
        ...style,
        width:width
      }}
      className={className}
      styleName={classnames('es-button',{
        [`es-button-${size}`]:true,
        'es-button-disabled':disabled,
        'es-button-border':border
      })}
      onClick={()=>{
        onClick && onClick()
      }}
    >
      {children}
    </div>
  )
}

export default MyButton