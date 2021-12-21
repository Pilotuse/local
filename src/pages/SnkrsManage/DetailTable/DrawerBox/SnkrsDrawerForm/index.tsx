import React, { useRef } from 'react';
import {
  Form,
  Input,
  Select,
  Radio,
  Cascader,
  Rate,
  Upload,
  DatePicker,
  Modal,
  Image
} from '@arco-design/web-react';
import styles from './index.module.less';

const FormItem = Form.Item;
const TextArea = Input.TextArea;

const cascaderOptions = [
  {
    value: 'beijing',
    label: 'Beijing',
    children: [
      {
        value: 'beijingshi',
        label: 'Beijing',
        children: [
          {
            value: 'chaoyang',
            label: 'Chaoyang',
            children: [
              {
                value: 'datunli',
                label: 'Datunli',
              },
            ],
          },
        ],
      },
    ],
  },
  {
    value: 'shanghai',
    label: 'Shanghai',
    children: [
      {
        value: 'shanghaishi',
        label: 'Shanghai',
        children: [
          {
            value: 'huangpu',
            label: 'Huangpu',
          },
        ],
      },
    ],
  },
];

const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};


const Demo = (props: any) => {

  const { disabled, setQueryConfig, currentRecord } = props

  const formRef: any = useRef();

  // 初始化查询system_dict_itme 表，将所有配置数据查出来 回填

  return (
    <div style={{ maxWidth: 580 }} className={styles.container}>
      <Form
        ref={formRef}
        disabled={disabled}
        {...formItemLayout}
        scrollToFirstError
        initialValues={currentRecord}
        onValuesChange={(_changeValue, values) => {
          setQueryConfig(values)
        }}
      >
        {JSON.stringify(currentRecord)}
        <FormItem
          label="球鞋名称"
          field="name"
          rules={[{ required: true, type: 'string', message: '请输入球鞋名称' }]}
        >
          <Input placeholder="请输入球鞋名称" />
        </FormItem>

        <FormItem label="球鞋别称" field="nickname">
          <Input placeholder="请输入球鞋别称" />
        </FormItem>

        <FormItem label="球鞋分类" field="type" required>
          {disabled ? (<span>{currentRecord.type}</span>)
            : <Cascader showSearch placeholder="请选择球鞋分类" allowClear options={cascaderOptions} />}
        </FormItem>

        <FormItem
          label="购买日期"
          field="date"
          rules={[
            { required: true, message: 'date is required' },
          ]}
        >
          <DatePicker showTime />
        </FormItem>

        <FormItem label="球鞋价格" field="price">
          <Input placeholder="请输入球鞋价格" />
        </FormItem>

        <FormItem
          label="购买价格"
          field="buyprice"
          rules={[{ required: true, type: 'number', message: '请输入购买价格' }]}
        >
          <Input placeholder="请输入购买价格" />
        </FormItem>

        <FormItem
          label="球鞋尺码"
          field="size"
          rules={[{ required: true, type: 'size', message: '请选择球鞋尺码' }]}
        >
          <Select placeholder="请选择球鞋尺码" options={['a', 'b', 'c', 'd', 'e']} />
        </FormItem>

        <FormItem
          label="购买渠道"
          field="source"
          rules={[{ required: true, message: '请选择购买渠道' }]}
        >
          <Select placeholder="请选择购买渠道" options={['得物', '95分', '淘宝', '京东', '天猫']} />
        </FormItem>

        <FormItem label="购买链接" field="links" className={styles.links}>
          {disabled ? <iframe style={{ boxShadow: '0 0 12px -6px #ccc' }} height={600} src={currentRecord.links} frameBorder="0" title="可视化" /> : <Input placeholder="请输入购买链接" />}
        </FormItem>

        <Form.Item label="物流单号" field="logistics">
          <Input placeholder="请输入物流单号" />
        </Form.Item>

        <FormItem label="适合穿着" field="suitable">
          <Select
            mode="multiple"
            allowCreate
            placeholder="请选择适合穿着"
            options={['a', 'b', 'c', 'd', 'e']}
          />
        </FormItem>

        <FormItem label="标签类别" field="label">
          <Select
            mode="multiple"
            allowCreate
            placeholder="请选择标签类别"
            options={['a', 'b', 'c', 'd', 'e']}
          />
        </FormItem>

        <FormItem label="球鞋操作" field="options">
          <Select allowCreate placeholder="请选择球鞋操作" options={['a', 'b', 'c', 'd', 'e']} />
        </FormItem>

        <FormItem label="球鞋评分" field="score">
          <Rate />
        </FormItem>

        <FormItem label="是否售后" field="aftersale">
          <Radio.Group>
            <Radio value="1">是</Radio>
            <Radio value="0">否</Radio>
          </Radio.Group>
        </FormItem>

        {
          disabled && currentRecord.upload ? null : (<Form.Item
            label="实拍图"
            field="upload"
            triggerPropName="realpicture"
            initialValue={[
              {
                uid: '-1',
                url:
                  '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
                name: '20200717',
              },
            ]}
          >
            {
              disabled ? (
                <Image
                  width={200}
                  src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
                />
              ) : (<Upload
                listType="picture-card"
                multiple
                name="files"
                action="/"
                onPreview={file => {
                  Modal.info({
                    title: 'Preview',
                    content: (
                      <img
                        src={file.url || URL.createObjectURL(file.originFile)}
                        style={{ maxWidth: '100%' }}
                      />
                    ),
                  });
                }}
              />)
            }
          </Form.Item>)
        }

        {
          disabled && currentRecord.screenshot ? null : (
            <Form.Item
              label="交易截图"
              field="screenshot"
              triggerPropName="fileList"
              initialValue={[
                {
                  uid: '-1',
                  url:
                    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
                  name: '20200717',
                },
              ]}
            >
              {
                disabled ? (
                  <Image
                    width={200}
                    src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
                  />
                ) : (
                  <Upload
                    listType="picture-card"
                    multiple
                    name="files"
                    action="/"
                    onPreview={file => {
                      Modal.info({
                        title: 'Preview',
                        content: (
                          <img
                            src={file.url || URL.createObjectURL(file.originFile)}
                            style={{ maxWidth: '100%' }}
                          />
                        ),
                      });
                    }}
                  />
                )
              }
            </Form.Item>
          )
        }

        {
          disabled && currentRecord.unpackingvideo ? null : (
            <Form.Item
              label="开箱视频"
              field="unpackingvideo"
              triggerPropName="fileList"
              initialValue={[
                {
                  uid: '-1',
                  url:
                    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp',
                  name: '20200717',
                },
              ]}
            >
              {
                disabled ? (
                  <Image
                    width={200}
                    src='//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a8c8cdb109cb051163646151a4a5083b.png~tplv-uwbnlip3yd-webp.webp'
                  />
                ) : (
                  <Upload
                    listType="picture-card"
                    multiple
                    name="files"
                    action="/"
                    onPreview={file => {
                      Modal.info({
                        title: 'Preview',
                        content: (
                          <img
                            src={file.url || URL.createObjectURL(file.originFile)}
                            style={{ maxWidth: '100%' }}
                          />
                        ),
                      });
                    }}
                  />
                )
              }

            </Form.Item>
          )
        }



        <FormItem
          label="其他信息"
          field="other"
          rules={[{ required: true, type: 'string', message: '请输入...' }]}
        >
          <TextArea placeholder="Please enter ..." style={{ minHeight: 100, resize: 'none' }} />
        </FormItem>
      </Form>
    </div>
  );
}

export default Demo;
