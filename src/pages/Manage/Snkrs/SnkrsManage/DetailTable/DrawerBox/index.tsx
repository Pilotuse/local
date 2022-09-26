import React, { useState, useRef } from 'react';
import { Drawer, FormInstance, Message } from '@arco-design/web-react';
import SnkrsDrawerForm from './SnkrsDrawerForm'
import service from '../../../../../../service'

interface DrawerBoxProps {
  drawerContext: any;
  drawerEvents: any;
  currentRecord: any;
  setCurrentRecord: any;
  setDrawerContext: any;
  onQuery: (params: any) => Promise<void>;
  tabKey: number;
}
const DrawerBox = (props: DrawerBoxProps) => {
  const { drawerContext, drawerEvents, currentRecord, setCurrentRecord, setDrawerContext, onQuery, tabKey } = props

  const [queryConfig, setQueryConfig] = useState({})
  const formRef = useRef<FormInstance>()

  const onOk = async () => {
    // drawerEvents(false)
    await formRef.current.validate()
    const validData = await formRef.current.getFieldsValue()
    const requestParams = { ...validData, id: currentRecord?.id }
    const { content: { result } } = await service.prodController.updateSnkrsDate(requestParams) as any
    if (result?.code === "00000") {
      Message.success(result?.msg)
      onQuery?.({ state: tabKey })
      setDrawerContext({
        ...drawerContext,
        visible: false
      })
    }
  }

  return (
    <div>
      <Drawer
        width={650}
        title={drawerContext.title}
        visible={drawerContext.visible}
        onOk={onOk}
        footer={drawerContext.optionsType}
        unmountOnExit
        onCancel={() => {
          drawerEvents(false)
          setCurrentRecord({})
        }}
      >
        <SnkrsDrawerForm
          ref={formRef}
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
