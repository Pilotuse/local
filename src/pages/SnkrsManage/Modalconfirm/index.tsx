import { Modal, Alert, Tag } from '@arco-design/web-react';
import React from 'react';
import { IconSkin } from '@arco-design/web-react/icon';
import styles from './index.module.less';

interface Modalconfirm {
  title?: string;
}

const Modalconfirm = (props: Modalconfirm) => {
  const { title } = props;
  const [visible, setVisible] = React.useState(false);

  return (
    <div className={styles['snkrs-recommend']}>
      <Tag size="small" className={styles['snkrs-recommend']} onClick={() => setVisible(true)}>
        <IconSkin /> {title}
      </Tag>
      <Modal
        title={title}
        visible={visible}
        className="modal-demo-without-content-spacing"
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
        <Alert closable type="info" content="推荐根据当日天气进行判断，并非完全有效！" />
        <div style={{ padding: 20 }}>
          <p>You can select multiple plugins for the current</p>
          <p style={{ marginTop: 20, marginBottom: 8, fontWeight: 600 }}>List of plugins</p>
        </div>
      </Modal>
    </div>
  );
};

export default Modalconfirm;
