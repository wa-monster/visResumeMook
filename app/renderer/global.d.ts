declare module '*.png' {
  const png: string;
  export default png;
}
declare module '*.jpg' {
  const jpg: string;
  export default jpg;
}

// 这里用于扩充window对象上的值
declare interface Window {
  pdk: string;
}

declare module 'redux-logger'


declare module 'rc-redux-model'