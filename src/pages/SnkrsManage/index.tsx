import React from 'react';
import { Grid, Statistic, Tag, Breadcrumb, Typography, Space } from '@arco-design/web-react';
import { IconArrowRise } from '@arco-design/web-react/icon';
import DetailTable from './DetailTable';
import DetailCharts from './DetailCharts';
import DrawerBox from './DrawerBox';
import Modalconfirm from './Modalconfirm';
import useLocale from '../../utils/useLocale';
import styles from './index.module.less';

const { Row, Col } = Grid;

export interface DefaultProp {
  isTag: boolean;
  tagColor: string;
  span: number;
  locale: string;
  suffix: string;
  value: string;
  countUp: boolean;
}

const defaultProps: DefaultProp[] = [
  {
    isTag: false,
    tagColor: '#0fc6c2',
    span: 4,
    locale: 'menu.snkrs.count',
    suffix: '双',
    value: '0',
    countUp: true,
  },
  {
    isTag: false,
    tagColor: '#0fc6c2',
    span: 4,
    locale: 'menu.snkrs.countPrice',
    suffix: '元',
    value: '0',
    countUp: true,
  },
  {
    isTag: false,
    tagColor: '#0fc6c2',
    span: 4,
    locale: 'menu.snkrs.highPrice',
    suffix: '元',
    value: '0',
    countUp: true,
  },
  {
    isTag: false,
    tagColor: '#0fc6c2',
    span: 4,
    locale: 'menu.snkrs.lowPrice',
    suffix: '元',
    value: '0',
    countUp: true,
  },
  {
    isTag: false,
    tagColor: '#0fc6c2',
    span: 4,
    locale: 'menu.snkrs.averagePrice',
    suffix: '元',
    value: '0',
    countUp: true,
  },
  {
    isTag: false,
    tagColor: '#0fc6c2',
    span: 4,
    locale: 'menu.snkrs.cycle',
    suffix: '天',
    value: '123123123',
    countUp: true,
  },
];

const Loan = () => {
  // 球鞋详情布局
  // 购买价格服务 ： 购买总件数  购买总价格  最高单价  最低单价  平均价格  购买周期
  const locale = useLocale();

  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item>球鞋</Breadcrumb.Item>
      </Breadcrumb>
      <div className={styles.wrapper}>
        <Space direction="vertical" size={24} style={{ width: '100%' }}>
          <>
            <Typography.Title
              style={{
                marginTop: 0,
                marginBottom: 12,
                fontSize: 14,
              }}
              heading={6}
            >
              球鞋看板
              <Modalconfirm title="每日推荐" />
              <Modalconfirm title="球鞋洗护" />
            </Typography.Title>
            <Col span={24} className={styles['snkrs-kanban']}>
              <Row>
                {defaultProps.map((data: DefaultProp, index: number) => {
                  return (
                    <Col span={data.span} key={index}>
                      <Statistic
                        title={
                          data.isTag ? (
                            <Tag
                              size="small"
                              color={data.tagColor}
                              style={{ margin: '0 16px 16px 0 ' }}
                            >
                              {locale[data.locale]}
                            </Tag>
                          ) : (
                            locale[data.locale]
                          )
                        }
                        countUp={data.countUp}
                        value={data.value ? data.value : '-'}
                        suffix={data.suffix}
                        prefix={<IconArrowRise style={{ color: 'red' }} />}
                      />
                    </Col>
                  );
                })}
              </Row>
            </Col>
          </>
        </Space>

        <Col span={24} className={styles['snkrs-kanban']}>
          <Row gutter={24}>
            <Col span={12}>
              <Typography.Title
                style={{ marginTop: 0, marginBottom: 12, fontSize: 14 }}
                heading={6}
              >
                消费趋势
              </Typography.Title>
              <DetailCharts />
            </Col>
            <Col span={12}>
              <Typography.Title
                style={{ marginTop: 0, marginBottom: 12, fontSize: 14 }}
                heading={6}
              >
                消费趋势
              </Typography.Title>
              <DetailCharts />
            </Col>
          </Row>
        </Col>

        <Space direction="vertical" size={24} style={{ width: '100%' }}>
          {/* 表单 */}
          <>
            <Typography.Title style={{ marginTop: 0, marginBottom: 12, fontSize: 14 }} heading={6}>
              购买列表
            </Typography.Title>
            <DetailTable />
          </>
        </Space>
        <DrawerBox />
      </div>
    </div>
  );
};

export default Loan;
