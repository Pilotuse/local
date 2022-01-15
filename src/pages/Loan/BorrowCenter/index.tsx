import React from 'react';
import { Tabs, Typography, Tag } from '@arco-design/web-react';
import PageHeader from '../component/PageHeader'
import HousingLoan from '../component/HousingLoan'


const Loan = () => {
  return (
    <>
      <PageHeader
        title='借贷管理中心'
        subTitle='Loan management center'
        extra={
          <Tag color='var(--color-text-4)' size='small' style={{ marginLeft: 8 }}>
            稳定收入，健康支出
          </Tag>
        }
      />
      <div style={{ margin: 16, background: 'var(--color-bg-2)', padding: 16 }}>
        <Tabs defaultActiveTab='1'>
          <Tabs.TabPane key='1' title='贷款总计'>
            <Typography.Paragraph>Content of Tab Panel 1</Typography.Paragraph>
          </Tabs.TabPane>
          <Tabs.TabPane key='2' title='房贷'>
            <HousingLoan />
          </Tabs.TabPane>
          <Tabs.TabPane key='3' title='其他'>
            <Typography.Paragraph>Content of Tab Panel 3</Typography.Paragraph>
          </Tabs.TabPane>
        </Tabs>
      </div>
    </>
  )
};

export default Loan;
