import React, { useEffect, useState } from 'react';
import { Grid, Statistic, Tag, Breadcrumb, Typography, Space, Tabs, Empty } from '@arco-design/web-react';
import { IconArrowRise } from '@arco-design/web-react/icon';
import DetailTable from './DetailTable';
import DetailCharts from './DetailCharts';
import DetailClock from './DetailClock'
import DrawerBox from './DrawerBox';
import Modalconfirm from './Modalconfirm';
import useLocale from '../../utils/useLocale';
import { DEFAULT_COMFIRM, ModalconfirmProps } from './constant';
import service from '../../service'
import styles from './index.module.less';

const { Row, Col } = Grid;
const TabPane = Tabs.TabPane;

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
  const [visible, setVisible] = React.useState(false);
  const [modalconfirm, setModalconfirm] = React.useState<ModalconfirmProps>(DEFAULT_COMFIRM);
  const [kanban, setKanban] = useState([])
  const [snkrs, setSnkrs] = useState([])
  const [queryConfig, setQueryConfig] = useState({
    userData: [],
  })

  const DEFAULT_KEYS = [
    { key: '1', preTitle: '现有', title: '现有球鞋', component: <DetailTable snkrs={snkrs} /> },
    { key: '2', preTitle: '计划', title: '计划球鞋', component: <DetailTable snkrs={snkrs} /> },
  ]

  const querySnkrsKanban = async (params) => {
    const result = await service.prodController.querySnkrsKanban(params)
    const { kanban = [], snkrsList = [] } = result.content.result
    const format = defaultProps.map((el, index) => ({ ...el, value: kanban[Object.keys(kanban)[index]] }))
    const userData = snkrsList.map(el => ({ type: el.nickname, value: el.price }))
    setKanban(format)
    setSnkrs(snkrsList)
    setQueryConfig({ ...queryConfig, userData })
  }

  const onTabsChange = (keys: string) => {
    querySnkrsKanban({ state: keys })
    setQueryConfig({ ...queryConfig })
  }

  useEffect(() => {
    querySnkrsKanban({ state: 1 })
  }, [])


  // 洗护tag 标签
  const Recommend = (props: ModalconfirmProps) => {
    const { size, title, children = null, style } = props;
    return (
      <Tag
        size={size}
        className={styles['snkrs-recommend']}
        onClick={() => {
          setVisible(true);
          setModalconfirm({ style, title, children });
        }}
      >
        {title}
      </Tag>
    );
  };



  return (
    <div className={styles.container}>
      <Breadcrumb style={{ marginBottom: 16 }}>
        <Breadcrumb.Item>球鞋</Breadcrumb.Item>
        <Breadcrumb.Item>{locale['menu.snkrs.manage']}</Breadcrumb.Item>
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
              <Recommend title="每日推荐" />
              <Recommend title="球鞋洗护" />
              <Modalconfirm {...modalconfirm} visible={visible} setVisible={setVisible} />
            </Typography.Title>

            <Col span={24} className={styles['snkrs-kanban']}>
              <Row>
                {kanban.map((data: DefaultProp, index: number) => {
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
              <DetailCharts snkrs={snkrs} />
            </Col>
            <Col span={12}>
              <Typography.Title
                style={{ marginTop: 0, marginBottom: 12, fontSize: 14 }}
                heading={6}
              >
                消费占比
              </Typography.Title>

              {queryConfig.userData.length ? <DetailClock queryConfig={queryConfig} /> : <Empty />}
            </Col>
          </Row>
        </Col>

        <Space direction="vertical" size={24} style={{ width: '100%' }}>
          {/* 表单 */}
          <>
            <Tabs defaultActiveTab='1' onChange={onTabsChange}>
              {
                DEFAULT_KEYS.map(el => {
                  return (
                    <TabPane key={el.key} title={el.title}>
                      {el.component}
                    </TabPane>
                  )
                })
              }
            </Tabs>
          </>
        </Space>

        <DrawerBox />
      </div>
    </div>
  );
};

export default Loan;
