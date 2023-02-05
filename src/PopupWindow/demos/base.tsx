import React, { useState } from 'react';
import { Button, message, Space } from 'antd';
import type { PopupWindowProps } from '@wishingjs/components';
import { PopupWindow } from '@wishingjs/components';

const buttonStyle = { width: 140 };

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

export default () => {

  const [params, setParams] = useState<PopupWindowProps>({ visible: false });

  const onFinish = async () => {
    //  todo do something...
    await waitTime(2000);
    message.success('you well done.');
  };

  const onClose = () => {
    setParams({ visible: false });
  };

  const onCancel = () => {
    onClose();
  };

  return <>
    <Space direction={'vertical'}>
      <div>
        <Button style={buttonStyle} onClick={() => setParams({ visible: true })}>Modal模式</Button>
        <span style={{ paddingLeft: 8 }}>默认模式, Ant-Modal组件</span>
      </div>
      <div>
        <Button style={buttonStyle} onClick={() => setParams({ visible: true, mode: 'drawer' })}>Drawer模式</Button>
        <span style={{ paddingLeft: 8 }}>Ant-Drawer组件</span>
      </div>
      <div>
        <Button style={buttonStyle} onClick={() => setParams({
          visible: true,
          bordered: true,
          footer: <Button type={'primary'}>Button</Button>,
        })}>开启边框</Button>
        <span style={{ paddingLeft: 8 }}>仅对mode=Modal有效, header和footer会有横线</span>
      </div>
      <div>
        <Button style={buttonStyle}
                onClick={() => setParams({ visible: true, submitter: { onFinish, onCancel } })}>开启Submitter</Button>
        <span style={{ paddingLeft: 8 }}>声明Submitter参数, 默认会在modal的footer, drawer的extra上,与AntDesign设计理念保持一致</span>
      </div>
    </Space>
    <PopupWindow {...params} onClose={onClose} title='DEMO'>
      <div>do something...</div>
      <div>do something...</div>
      <div>do something...</div>
    </PopupWindow>
  </>;
}
