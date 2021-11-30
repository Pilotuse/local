import React from 'react';
import { Breadcrumb } from '@arco-design/web-react';
import styles from './index.module.less';
import useLocale from '../../utils/useLocale';

export default function index() {
  const locale = useLocale();
  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item>球鞋</Breadcrumb.Item>
        <Breadcrumb.Item>{locale['menu.snkrs.track']}</Breadcrumb.Item>
      </Breadcrumb>
    </div>
  );
}
