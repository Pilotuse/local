import React from 'react';
import { PageHeader } from '@arco-design/web-react';
import { PageHeaderProps } from '../../interface'

export default function index(props: PageHeaderProps) {
  const { title, subTitle, extra } = props
  return (
    <PageHeader
      style={{ background: 'var(--color-bg-2)' }}
      title={title}
      subTitle={subTitle}
      extra={extra}
    />
  )
}
