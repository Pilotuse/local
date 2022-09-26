import React from 'react';
import {
  // IconDashboard,
  IconStorage,
  // IconThunderbolt,
  // IconArchive,
  IconCommand,
  // IconStamp,
  // IconRobot,
  // IconCalendar,
  // IconSubscribeAdd
} from '@arco-design/web-react/icon';

export const defaultRoute = 'dashboard/workplace';

export const routes = [
  // {
  //   name: '控制台',
  //   key: 'dashboard',
  //   icon: <IconDashboard />,
  //   componentPath: 'workplace',
  // },
  // {
  //   name: '借贷',
  //   key: 'Loan',
  //   icon: <IconArchive />,
  //   children: [
  //     {
  //       name: '资金看板',
  //       key: 'loan/kanban',
  //       componentPath: 'Loan/Fundkanban',
  //     },
  //     {
  //       name: '贷款管理',
  //       key: 'loan/borrow',
  //       componentPath: 'Loan/BorrowCenter',
  //     },
  //     {
  //       name: '借出管理',
  //       key: 'loan/lend',
  //       componentPath: 'Loan/LendCenter',
  //     }
  //   ],
  // },
  {
    name: '球鞋',
    key: 'snkrs',
    icon: <IconStorage />,
    children: [
      {
        name: '球鞋收纳',
        key: 'manage/snkrs/storage',
        componentPath: 'Manage/Snkrs/SnkrsManage',
      },
      {
        name: '发售日历',
        key: 'manage/snkrs/track',
        componentPath: 'Manage/Snkrs/SnkrsTrack',
      },
    ],
  },
  // {
  //   name: '电子产品',
  //   key: 'electronic',
  //   icon: <IconThunderbolt />,
  //   componentPath: 'Electronic',
  // },
  {
    name: '家居网关',
    key: 'manage/home-gateway',
    icon: <IconCommand />,
    componentPath: 'Manage/HomeGateway',
  },
  // {
  //   name: '工资个税',
  //   key: 'salary-tax',
  //   icon: <IconRobot />,
  //   children: [
  //     {
  //       name: '工资',
  //       key: 'salary-tax/wages',
  //       componentPath: 'SalaryTax',
  //       icon: <IconRobot />,
  //     },
  //     {
  //       name: '个税',
  //       key: 'salary-tax/raise',
  //       componentPath: 'SalaryTax',
  //       icon: <IconRobot />,
  //     }
  //   ],
  // },
  // {
  //   name: '电子合同',
  //   key: 'contract',
  //   icon: <IconStamp />,
  //   componentPath: 'Contract',
  // },
  // {
  //   name: '五年规划',
  //   key: 'plan',
  //   icon: <IconCalendar />,
  //   componentPath: 'Plan',
  // },
  // {
  //   name: '考研',
  //   key: 'postgraduate',
  //   icon: <IconSubscribeAdd />,
  //   children: [
  //     {
  //       name: '计划',
  //       key: 'postgraduate/plan',
  //       componentPath: 'Postgraduate',
  //       icon: <IconSubscribeAdd />,
  //     },
  //     {
  //       name: '学校',
  //       key: 'postgraduate/plan',
  //       componentPath: 'Postgraduate',
  //       icon: <IconSubscribeAdd />,
  //     },
  //     {
  //       name: '资料',
  //       key: 'postgraduate/plan',
  //       componentPath: 'Postgraduate',
  //       icon: <IconSubscribeAdd />,
  //     },
  //   ],
  // },
];
