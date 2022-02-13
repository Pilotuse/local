import React from 'react'
import { Spin } from '@arco-design/web-react';
import style from './index.module.less';


export default function index() {

  const Loading = () => {
    return (
      <div className={style.loadingContainer}>
        <Spin tip='正在扫描当前局域网中的设备，请稍后...' loading dot />
      </div>
    )
  }

  return (
    <div className={style.container}>
      <Loading />
    </div>
  )
}
