import React, { useState } from 'react';
import { Drawer } from '@arco-design/web-react';
import SnkrsDrawerForm from './SnkrsDrawerForm'

const DrawerBox = (props: any) => {
  const { drawerContext, drawerEvents, currentRecord, setCurrentRecord } = props

  const [queryConfig, setQueryConfig] = useState({})

  const onOk = () => {
    // drawerEvents(false)

  }

  return (
    <div>
      <Drawer
        width={650}
        title={drawerContext.title}
        visible={drawerContext.visible}
        onOk={onOk}
        onCancel={() => {
          drawerEvents(false)
          setCurrentRecord({})
        }}
      >
        <SnkrsDrawerForm
          disabled={drawerContext.optionsType}
          queryConfig={queryConfig}
          currentRecord={currentRecord}
          setQueryConfig={setQueryConfig}
        />
      </Drawer>
    </div>
  );
};

export default DrawerBox;
