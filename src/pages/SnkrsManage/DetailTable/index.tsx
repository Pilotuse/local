import React, { useEffect, useState } from 'react';
import {
  DatePicker,
  Form,
  Input,
  Table,
  Button,
  Grid,
  Select,
  Message,
  Popconfirm,
  Tag,
} from '@arco-design/web-react';
import omit from 'lodash/omit';
import axios from 'axios';
import dayjs from 'dayjs';
import { IconDownload, IconUpload } from '@arco-design/web-react/icon';
import { uniq } from 'lodash'
import { useDispatch } from 'react-redux';
import useLocale from '../../../utils/useLocale';
import SnkrsDrawerForm from '../components/SnkrsDrawerForm';

const DetailTable = (props) => {
  let { snkrs } = props
  const locale = useLocale();
  const [loading, setLoading] = useState(false);
  const [searchParams, setSearchParams] = useState({
    page: 1,
    pageSize: 10,
    roomNumber: '#3032',
    startTime: dayjs(new Date())
      .subtract(1, 'day')
      .format('YYYY-MM-DD'),
    endTime: dayjs(new Date()).format('YYYY-MM-DD'),
    type: []
  });
  const [tableData, setTableData] = useState({ list: [], total: 0 });
  const dispatch = useDispatch();

  useEffect(() => {
    setTableData({
      list: snkrs.reverse(),
      total: snkrs.length
    })
    setSearchParams(params => ({
      ...params,
      type: uniq(snkrs.map(_target => _target.type))
    }));
  }, [snkrs])


  const ExportColumns = {

  }

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
      title: locale['menu.snkrs.channel'],
      dataIndex: 'size',
    },
    {
      title: locale['menu.snkrs.channel'],
      dataIndex: 'source',
    },
    {
      title: locale['menu.snkrs.suitable'],
      dataIndex: 'suitable',
      render: (_col, record) => (
        <span>
          {record.suitable.split('|').map((el, index) => (<Tag key={index} style={{ marginRight: 4 }}>{el}</Tag>))}
        </span>
      )
    },
    {
      title: locale['menu.snkrs.buyDate'],
      dataIndex: 'date',
      render: (_col, record) => {
        console.log(record.date);
        return (
          <span>
            {dayjs(record.date).format('YYYY-MM-DD')}
          </span>
        )
      }
    },
    {
      title: locale['menu.snkrs.details'],
      width: 212,
      render: () => {
        return (
          <>
            <Button
              type="text"
              onClick={() => {
                // eslint-disable-next-line no-use-before-define
                addSnkrs({ title: '球鞋详情' });
              }}
            >
              {locale['menu.watch']}
            </Button>
            <Button
              type="text"
              onClick={() => {
                // eslint-disable-next-line no-use-before-define
                addSnkrs({ title: `${locale['menu.add']}球鞋`, children: <SnkrsAdd /> });
              }}
            >
              {locale['menu.change']}
            </Button>
            <Popconfirm
              title="确认删除本条数据？删除后无法恢复！"
              onOk={() => {
                Message.info({ content: 'ok' });
              }}
              onCancel={() => {
                Message.error({ content: 'cancel' });
              }}
            >
              <Button type="text">{locale['menu.delete']}</Button>
            </Popconfirm>
          </>
        );
      },
    },
  ];

  const search = params => {
    setLoading(true);
    axios
      .get('/api/feedbackList', {
        params,
      })
      .then(res => {
        setTableData(res.data);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const formatFormValues = values => {
    const time = values.time || [];

    return {
      ...omit(values, 'time'),
      startTime: time[0],
      endTime: time[1],
    };
  };

  const onFormChange = (_value, values) => {
    setSearchParams(params => ({
      ...params,
      ...formatFormValues(values),
      page: 1,
    }));
  };

  const onTableChange = ({ current, pageSize }) => {
    setSearchParams(params => ({
      ...params,
      page: current,
      pageSize,
    }));
  };

  useEffect(() => {
    search(searchParams);
  }, [searchParams]);

  const addSnkrs = (props: { title: string; children?: React.ReactNode; componentData?: any }) => {
    const { title, children, componentData } = props;
    dispatch({
      type: 'update-drawerVisible',
      payload: {
        drawerVisible: {
          title,
          status: true,
          children,
          componentData,
        },
      },
    });
  };

  const SnkrsAdd = () => {
    return <SnkrsDrawerForm />;
  };

  return (
    <div>
      <Grid.Row style={{ marginBottom: 4 }} align="center" justify="space-between">
        <Grid.Col span={20}>
          <Form
            layout="inline"
            onChange={onFormChange}
            initialValues={{
              roomNumber: searchParams.roomNumber,
              time: [searchParams.startTime, searchParams.endTime],
              type: searchParams.type
            }}
          >
            <Form.Item label={locale['menu.snkrs.buyDate.timeRange']} field="time">
              <DatePicker.RangePicker />
            </Form.Item>
            <Form.Item label={locale['menu.snkrs.model.selectRange']} field="type">
              <Select
                placeholder="请选择"
                showSearch
                options={searchParams.type}
                style={{ width: 170 }}
                onChange={(value) =>
                  Message.info({ content: `You select ${value}.`, showIcon: true })
                }
              />
            </Form.Item>
            <Form.Item label={locale['menu.snkrs.name']} field="roomNumber">
              <Input style={{ width: 170 }} />
            </Form.Item>
          </Form>
        </Grid.Col>
        <Grid.Col span={4} style={{ textAlign: 'right' }}>
          <Button
            type="text"
            icon={<IconUpload />}
            onClick={() => addSnkrs({ title: `${locale['menu.add']}球鞋`, children: <SnkrsAdd /> })}
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
        loading={loading}
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
    </div>
  );
}

export default DetailTable;
