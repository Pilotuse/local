import React, { useEffect, useState } from 'react';
import { Grid, Statistic, Tag, Breadcrumb, Typography, Space, Tabs, Empty, Message } from '@arco-design/web-react';
import { IconArrowRise } from '@arco-design/web-react/icon';
import omit from 'lodash/omit';
import { defaultKanbanProps, DefaultProp, DEFAULT_COMFIRM, ModalconfirmProps, DEFAULT_KEYS, DefaultSearchParams } from './constant'
import DetailTable from './DetailTable';
import DetailCharts from './DetailCharts';
import DetailClock from './DetailClock'
import Modalconfirm from './Modalconfirm';
import useLocale from '../../utils/useLocale';
import service from '../../service'
import styles from './index.module.less';

const { Row, Col } = Grid;
const TabPane = Tabs.TabPane;


const Loan = () => {
  const locale = useLocale();
  const [visible, setVisible] = React.useState(false);
  const [modalconfirm, setModalconfirm] = React.useState<ModalconfirmProps>(DEFAULT_COMFIRM);
  const [kanban, setKanban] = useState([])
  const [snkrs, setSnkrs] = useState([])
  const [queryConfig, setQueryConfig] = useState({ userData: [], key: '' })
  const [searchParams, setSearchParams] = useState(DefaultSearchParams);

  // 请求数据
  const onQuery = async (params) => {
    const result = await service.prodController.querySnkrsKanban(params)
    const { kanban = [], snkrsList = [] } = result.content.result
    const format = defaultKanbanProps.map((el, index) => ({ ...el, value: kanban[Object.keys(kanban)[index]] }))
    const userData = snkrsList.map(el => ({ type: el.nickname, value: el.price }))
    setKanban(format)
    setSnkrs(snkrsList)
    setQueryConfig({ ...queryConfig, userData, key: params.state })
  }

  // 删除table中的数据
  const onDelete = async ({ id, key }) => {
    const { content: { result } } = await service.prodController.onSnkrsDelete({ id })
    if (result.code === '00000') {
      onQuery({ state: key })
      Message.success(result.msg)
    } else {
      Message.success('删除失败，请稍后重试！')
    }
  }

  // tab 改变
  const onTabsChange = (keys: string) => {
    onQuery({ state: keys })
    setQueryConfig({ ...queryConfig, key: keys })
    setSearchParams(DefaultSearchParams)
  }

  // 组合 请求数据
  const onFormChange = (_value, values) => {
    const time = values.time || [];
    const formatFormValues = {
      ...omit(values, 'time'),
      startTime: time[0],
      endTime: time[1],
      state: queryConfig.key
    };

    onQuery(formatFormValues)
  }

  // 初始化请求数据
  useEffect(() => {
    onQuery({ state: '1' })
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
                      <DetailTable
                        snkrs={snkrs}
                        queryConfig={queryConfig}
                        onDelete={onDelete}
                        onQuery={onQuery}
                        searchParams={searchParams}
                        setSearchParams={setSearchParams}
                        onFormChange={onFormChange}
                      />
                    </TabPane>
                  )
                })
              }
            </Tabs>
          </>
        </Space>
      </div>
    </div>
  );
};

export default Loan;
