import { Submitter } from '@wishingjs/components';
import React from 'react';
import { Form, Input, InputNumber, message } from 'antd';

export default () => {

  const onFinish = () => {
    message.success('you well done.');
  };

  const [form] = Form.useForm();

  return (
    <Form form={form} labelCol={{ span: 2 }}>
      <Form.Item rules={[{ required: true }]} name={'name'} label='姓名'><Input placeholder={'输入姓名'} /></Form.Item>
      <Form.Item rules={[{ required: true }]} name={'age'} label='年龄'>
        <InputNumber placeholder={'输入年龄'} style={{ width: '100%' }} /></Form.Item>
      <Form.Item wrapperCol={{ offset: 2 }}>
        <Submitter form={form} onFinish={onFinish} />
      </Form.Item>
    </Form>
  );
}
