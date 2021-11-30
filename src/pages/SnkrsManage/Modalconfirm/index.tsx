import { Modal, Alert } from '@arco-design/web-react';
import React from 'react';
import styles from './index.module.less';

interface Modalconfirm {
  title?: string;
  visible?: boolean;
  setVisible?: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modalconfirm = (props: Modalconfirm) => {
  const { title, visible, setVisible } = props;

  return (
    <div className={styles['snkrs-recommend']}>
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
