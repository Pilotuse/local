import React, { useEffect } from 'react';
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
import { SNKRS_LABEL, SNKRS_SIZE, SNKRS_OPTIONS, SNKRS_TYPE, SNKRS_SOURCE, SNKRS_STATE } from '../../../../../../../constant'
import styles from './index.module.less';

const FormItem = Form.Item;
const TextArea = Input.TextArea;



const formItemLayout = {
  labelCol: {
    span: 5,
  },
  wrapperCol: {
    span: 19,
  },
};


const SnkrsDrawerForm = (props: any, ref: any) => {

  const { disabled, currentRecord } = props
  const [form] = Form.useForm();
  const type = currentRecord?.type?.split(',')
  const suitable = currentRecord?.suitable?.split(',')
  const initialValues = { ...currentRecord, type, suitable }
  console.log('initialValues', initialValues);


  useEffect(() => {
    ref.current = form
  }, [])



  return (
    <div style={{ maxWidth: 580 }} className={styles.container}>
      <Form
        form={form}
        disabled={disabled}
        {...formItemLayout}
        scrollToFirstError
        initialValues={initialValues}
      >
        <FormItem
          label="球鞋名称"
          field="name"
          rules={[{ required: true, type: 'string', message: '请输入球鞋名称' }]}
        >
          {disabled ? (<span>{currentRecord.name}</span>)
            : <Input placeholder="请输入球鞋名称" />}
        </FormItem>

        <FormItem label="球鞋别称" field="nickname">
          {disabled ? (<span>{currentRecord.name}</span>)
            : <Input placeholder="请输入球鞋别称" />}
        </FormItem>

        <FormItem
          label="球鞋分类"
          field="type"
          rules={[{ required: true, type: 'string', message: '请选择球鞋分类' }]}
        >
          <Cascader showSearch placeholder="请选择球鞋分类" allowClear options={SNKRS_TYPE} />
        </FormItem>

        <FormItem
          label="球鞋状态"
          field="state"
          rules={[{ required: true, message: '请选择球鞋状态' }]}
        >
          <Select
            placeholder="请选择球鞋状态"
            options={SNKRS_STATE}
          />
        </FormItem>

        <FormItem
          label="球鞋价格"
          field="price"
          rules={[
            { required: true, type: 'number', message: '请输入球鞋价格' },
          ]}
        >
          <Input placeholder="请输入球鞋价格" />
        </FormItem>

        <FormItem
          label="购买价格"
          field="buyprice"
          rules={[{ required: true, type: 'number', message: '请输入购买价格' }]}
        >
          <Input placeholder="请输入购买价格" />
        </FormItem>

        <Form.Item shouldUpdate noStyle>
          {(values) => {
            return values.state === '3' ? (
              <Form.Item
                field='saleprice'
                label='出售价格'
                rules={[{ required: true, type: 'number', message: '请输入出售价格' }]}
              >
                <Input placeholder='请输入出售价格' />
              </Form.Item>
            ) : (<></>);
          }}
        </Form.Item>

        <FormItem
          label="球鞋尺码"
          field="size"
          rules={[{ required: true, message: '请选择球鞋尺码' }]}
        >
          <Select
            placeholder="请选择球鞋尺码"
            options={SNKRS_SIZE}
          />
        </FormItem>

        <FormItem
          label="购买日期"
          field="date"
          rules={[
            { required: true, message: '请选择购买日期' },
          ]}
        >
          <DatePicker showTime />
        </FormItem>

        <FormItem
          label="购买渠道"
          field="source"
          rules={[{ required: true, message: '请选择购买渠道' }]}
        >
          <Select placeholder="请选择购买渠道" options={SNKRS_SOURCE} />
        </FormItem>

        <FormItem label="购买链接" field="links" className={styles.links}>
          {disabled ? <iframe style={{ boxShadow: '0 0 12px -6px #ccc' }} height={600} src={currentRecord.links} frameBorder="0" title="可视化" /> : <Input placeholder="请输入购买链接" />}
        </FormItem>

        <Form.Item
          label="物流单号"
          field="logistics"
        >
          <Input placeholder="请输入物流单号" />
        </Form.Item>

        <FormItem label="适合穿着" field="suitable">
          <Select
            mode="multiple"
            allowCreate
            placeholder="请选择适合穿着"
            options={['春季', '夏季', '秋季', '冬季']}
          />
        </FormItem>

        <FormItem label="标签类别" field="label">
          <Select
            allowCreate
            placeholder="请选择标签类别"
            options={SNKRS_LABEL}
          />
        </FormItem>

        <FormItem label="球鞋操作" field="options">
          <Select
            allowCreate
            placeholder="请选择球鞋操作"
            options={SNKRS_OPTIONS}
          />
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
          </Form.Item>)
        }

        {
          disabled && currentRecord.screenshot ? null : (
            <Form.Item
              label="交易截图"
              field="screenshot"
              triggerPropName="fileList"
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
          )
        }

        {
          disabled && currentRecord.unpackingvideo ? null : (
            <Form.Item
              label="开箱视频"
              field="unpackingvideo"
              triggerPropName="fileList"
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
          )
        }
        <FormItem
          label="其他信息"
          field="other"
        >
          <TextArea placeholder="请输入其他信息" style={{ minHeight: 100, resize: 'none' }} />
        </FormItem>
      </Form>
    </div>
  );
}

export default React.forwardRef(SnkrsDrawerForm);
