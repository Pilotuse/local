import React from 'react';
import { Drawer } from '@arco-design/web-react';
import { useSelector, useDispatch } from 'react-redux';
import { ReducerState } from '../../../redux';

const DrawerBox = () => {
  const drawerVisible = useSelector((state: ReducerState) => state.global.drawerVisible);
  const dispatch = useDispatch();

  // 显示隐藏options的效果
  const clickOptions = (status: boolean) => {
    dispatch({
      type: 'update-drawerVisible',
      payload: {
        drawerVisible: {
          status,
          children: null,
        },
      },
    });
  };

  return (
    <div>
      <Drawer
        width={650}
        title={<span>{drawerVisible.title}</span>}
        visible={drawerVisible.status}
        onOk={() => clickOptions(false)}
        onCancel={() => clickOptions(false)}
      >
        {drawerVisible.children}
      </Drawer>
    </div>
  );
};

export default DrawerBox;
