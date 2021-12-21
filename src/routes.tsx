import React from 'react';
import {
  IconDashboard,
  IconStorage,
  IconThunderbolt,
  IconArchive,
  IconCommand,
  IconStamp,
  IconRobot
} from '@arco-design/web-react/icon';

export const defaultRoute = 'dashboard/workplace';

export const routes = [
  {
    name: 'menu.dashboard.workplace',
    key: 'dashboard',
    icon: <IconDashboard />,
    children: [
      {
        name: 'menu.dashboard.workplace',
        key: 'dashboard/workplace',
        componentPath: 'workplace',
      },
    ],
  },
  {
    name: 'menu.loan',
    key: 'Loan',
    icon: <IconArchive />,
    children: [
      {
        name: 'menu.loan.kanban',
        key: 'loan/kanban',
        componentPath: 'Loan/Fundkanban',
      },
      {
        name: 'menu.loan.borrow',
        key: 'loan/borrow',
        componentPath: 'Loan/BorrowCenter',
      },
      {
        name: 'menu.loan.lend',
        key: 'loan/lend',
        componentPath: 'Loan/LendCenter',
      },
    ],
  },
  {
    name: 'menu.snkrs',
    key: 'snkrs',
    icon: <IconStorage />,
    children: [
      {
        name: 'menu.snkrs.manage',
        key: 'snkrs/manage',
        componentPath: 'SnkrsManage',
      },
      {
        name: '追鞋',
        key: 'snkrs/track',
        componentPath: 'SnkrsTrack',
      },
    ],
  },
  {
    name: 'menu.electronic',
    key: 'electronic',
    icon: <IconThunderbolt />,
    componentPath: 'Electronic',
  },
  {
    name: '家居网关',
    key: 'electronic',
    icon: <IconCommand />,
    componentPath: 'Electronic',
  },
  {
    name: '工资个税',
    key: 'electronic',
    icon: <IconRobot />,
    componentPath: 'Electronic',
  },
  {
    name: '电子合同',
    key: 'electronic',
    icon: <IconStamp />,
    componentPath: 'Electronic',
  },
];
