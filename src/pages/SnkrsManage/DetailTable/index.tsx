import React, { useEffect, useState } from 'react';
import {
  // DatePicker,
  Form,
  Input,
  Table,
  Button,
  Grid,
  Select,
  Popconfirm,
  Tag,
} from '@arco-design/web-react';
import dayjs from 'dayjs';
import { IconDownload, IconUpload } from '@arco-design/web-react/icon';
import { uniq } from 'lodash'
import useLocale from '../../../utils/useLocale';
import DrawerBox from './DrawerBox';



interface DrawerBoxProps {
  visible: boolean;
  title: string;
  optionsType: boolean;
}

const DetailTable = (props) => {

  const { snkrs, onDelete, queryConfig, searchParams, setSearchParams, onFormChange } = props
  const locale = useLocale();
  const [tableData, setTableData] = useState({ list: [], total: 0 });
  const [snkrsType, setSnkrsType] = useState([])
  const [drawerContext, setDrawerContext] = useState<DrawerBoxProps>({
    visible: false,
    title: '',
    optionsType: false
  })
  const [currentRecord, setCurrentRecord] = useState({})

  const drawerEvents = (visible: boolean) => {
    setDrawerContext({
      ...drawerContext,
      visible
    })
  }

  useEffect(() => {
    setTableData({
      list: snkrs,
      total: snkrs.length
    })
    setSnkrsType(uniq(snkrs.map(_target => _target.type)))
  }, [snkrs])


  const columns = [
    {
      title: locale['menu.snkrs.name'],
      dataIndex: 'nickname',
    },
    {
      title: locale['menu.snkrs.model'],
      dataIndex: 'type',
    },
    {
      title: locale['menu.snkrs.price'],
      dataIndex: 'price',
      render: (_col, record) => <span>
        <span style={{ color: '#FF7D00', fontWeight: 600 }}>¥ </span>
        {record.price}
      </span>
    },
    {
      title: locale['menu.snkrs.size'],
      dataIndex: 'size',
    },
    {
      title: locale[`menu.snkrs.channel`],
      dataIndex: 'source',
    },
    {
      title: locale['menu.snkrs.suitable'],
      dataIndex: 'suitable',
      render: (_col, record) => (
        <span>
          {record.suitable && record.suitable.split('|').map((el, index) => {
            if (index < 3) {
              return <Tag key={index} style={{ marginRight: 4 }}>{el}</Tag>
            }
            return null
          })}
        </span>
      )
    },
    {
      title: locale['menu.snkrs.buyDate'],
      dataIndex: 'date',
      render: (_col, record) => {
        const data = dayjs(record.date).format('YYYY-MM-DD')
        return (
          <span>{data !== '2099-12-31' ? data : '-'}</span>
        )
      }
    },
    {
      title: locale['menu.snkrs.details'],
      width: 212,
      render: (_col, record) => {
        return (
          <>
            <Button
              type="text"
              onClick={() => {
                setCurrentRecord(record)
                setDrawerContext({
                  title: '查看球鞋',
                  visible: true,
                  optionsType: true
                })
              }}
            >
              {locale['menu.watch']}
            </Button>
            <Button
              type="text"
              onClick={() => {
                setCurrentRecord(record)
                setDrawerContext({
                  title: `${locale['menu.change']}球鞋`,
                  visible: true,
                  optionsType: false
                })
              }}
            >
              {locale['menu.change']}
            </Button>
            <Popconfirm
              title="确认删除本条数据？删除后无法恢复！"
              position='tr'
              onOk={() => onDelete({ id: record.id, key: queryConfig.key.state })}
            >
              <Button type="text">{locale['menu.delete']}</Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  const onTableChange = ({ current, pageSize }) => {
    setSearchParams(params => ({
      ...params,
      page: current,
      pageSize,
    }));
  };

  return (
    <div>
      <Grid.Row style={{ marginBottom: 4 }} align="center" justify="space-between">
        <Grid.Col span={20}>
          <Form
            layout="inline"
            onChange={onFormChange}
          >
            {/* <Form.Item label={locale['menu.snkrs.buyDate.timeRange']} field="time">
              <DatePicker.RangePicker />
            </Form.Item> */}
            <Form.Item label={locale['menu.snkrs.model.selectRange']} field="type">
              <Select
                placeholder="请选择"
                value={searchParams.type}
                allowClear
                options={snkrsType}
                style={{ width: 170 }}
              />
            </Form.Item>
            <Form.Item label={locale['menu.snkrs.name']} field="name">
              <Input style={{ width: 170 }} placeholder="球鞋名称" />
            </Form.Item>
          </Form>
        </Grid.Col>
        <Grid.Col span={4} style={{ textAlign: 'right' }}>
          <Button
            type="text"
            icon={<IconUpload />}
            onClick={() => setDrawerContext({
              title: '新增球鞋',
              visible: true,
              optionsType: false
            })}
          >
            {locale['menu.add']}
          </Button>
          <Button type="text" icon={<IconDownload />}>
            {locale['menu.download']}
          </Button>
        </Grid.Col>
      </Grid.Row>
      <Table
        rowKey="id"
        columns={columns}
        scroll={{ x: 1200 }}
        data={tableData.list}
        pagination={{
          total: tableData.total,
          current: searchParams.page,
          pageSize: searchParams.pageSize,
          showTotal: true,
          sizeCanChange: true,
        }}
        onChange={onTableChange}
      />
      {/* 抽屉 */}
      <DrawerBox
        drawerContext={drawerContext}
        currentRecord={currentRecord}
        drawerEvents={drawerEvents}
        setCurrentRecord={setCurrentRecord}
      />
    </div>
  );
}

export default DetailTable;
