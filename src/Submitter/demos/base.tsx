import { Submitter } from '@wishingjs/components';
import React from 'react';
import { Card, message } from 'antd';

export default () => {

  const onFinish = () => {
    message.success('onclick onFinish');
  };

  const onCancel = () => {
    message.warning('onclick onCancel');
  };

  return (
    <Card title={'DEMO'} extra={<Submitter onCancel={onCancel} onFinish={onFinish} />}>
      <div>do something...</div>
      <div>do something...</div>
      <div>do something...</div>
    </Card>
  );
}
