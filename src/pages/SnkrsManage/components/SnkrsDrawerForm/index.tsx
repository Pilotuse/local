import React, { useRef, useEffect } from 'react';
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
} from '@arco-design/web-react';

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


function Demo() {
  const formRef: any = useRef();

  useEffect(() => {
    formRef.current.setFieldsValue({ rate: 5 });
  }, []);

  const onValuesChange = (changeValue, values) => {
    // eslint-disable-next-line no-console
    console.log('onValuesChange: ', changeValue, values);
  };

  return (
    <div style={{ maxWidth: 580 }}>
      <Form
        ref={formRef}
        {...formItemLayout}
        initialValues={{
          slider: 20,
          'a.b[0].c': ['b'],
        }}
        onValuesChange={onValuesChange}
        scrollToFirstError
      >
        <FormItem
          label="球鞋名称"
          field="name"
          rules={[{ required: true, type: 'string', message: '请输入球鞋名称' }]}
        >
          <Input placeholder="请输入球鞋名称" />
        </FormItem>

        <FormItem
          label="球鞋别称"
          field="nickname"
          rules={[{ required: true, type: 'string', message: '请输入球鞋别称' }]}
        >
          <Select
            mode="multiple"
            allowCreate
            placeholder="请输入球鞋别称"
            options={['a', 'b', 'c', 'd', 'e']}
          />
        </FormItem>

        <FormItem
          label="球鞋分类"
          field="types"
          rules={[{ required: true, message: '请输入球鞋名称' }]}
        >
          <Cascader showSearch placeholder="请选择球鞋名称" allowClear options={cascaderOptions} />
        </FormItem>

        <FormItem
          label="购买日期"
          field="date"
          rules={[
            {
              required: true,
              message: 'date is required',
            },
          ]}
        >
          <DatePicker showTime />
        </FormItem>

        <FormItem
          label="球鞋价格"
          field="price"
          rules={[{ required: true, type: 'number', message: '请输入球鞋价格' }]}
        >
          <Input placeholder="请输入球鞋名称" />
        </FormItem>

        <FormItem
          label="购买价格"
          field="buyprice"
          rules={[{ required: true, type: 'number', message: '请输入购买价格' }]}
        >
          <Input placeholder="请输入球鞋名称" />
        </FormItem>

        <FormItem
          label="球鞋尺码"
          field="size"
          rules={[{ required: true, type: 'number', message: '请输入球鞋尺码' }]}
        >
          <Input placeholder="请输入球鞋名称" />
        </FormItem>

        <FormItem
          label="购买渠道"
          field="source"
          rules={[{ required: true, message: '请输入购买渠道' }]}
        >
          <Cascader showSearch placeholder="请选择球鞋名称" allowClear options={cascaderOptions} />
        </FormItem>

        <FormItem
          label="购买链接"
          field="links"
          rules={[{ required: true, message: '请输入购买链接' }]}
        >
          <Input placeholder="请输入购买链接" />
        </FormItem>

        <Form.Item label="物流单号" field="upload" triggerPropName="fileList">
          <Input placeholder="请输入物流单号" />
        </Form.Item>

        <FormItem
          label="适合穿着"
          field="suitable"
          rules={[{ required: true, type: 'string', message: '请输入适合穿着' }]}
        >
          <Select
            mode="multiple"
            allowCreate
            placeholder="请输入球鞋别称"
            options={['a', 'b', 'c', 'd', 'e']}
          />
        </FormItem>

        <FormItem
          label="标签类别"
          field="label"
          required
          rules={[
            {
              type: 'array',
              minLength: 1,
              message: 'choice is required',
            },
          ]}
        >
          <Select
            mode="multiple"
            allowCreate
            placeholder="please select"
            options={['a', 'b', 'c', 'd', 'e']}
          />
        </FormItem>

        <FormItem
          label="球鞋操作"
          required
          field="options"
          rules={[
            {
              type: 'array',
              minLength: 1,
              message: 'choice is required',
            },
          ]}
        >
          <Select allowCreate placeholder="please select" options={['a', 'b', 'c', 'd', 'e']} />
        </FormItem>

        <FormItem
          label="球鞋评分"
          field="score"
          rules={[
            {
              required: true,
              type: 'number',
            },
          ]}
        >
          <Rate />
        </FormItem>

        <FormItem label="是否售后" field="aftersale">
          <Radio.Group>
            <Radio value="1">是</Radio>
            <Radio value="0">否</Radio>
          </Radio.Group>
        </FormItem>

        <Form.Item
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
        </Form.Item>

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
        </Form.Item>

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
        </Form.Item>

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
