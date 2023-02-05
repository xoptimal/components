import Popups, { PopupsRef, PopupWindow, Submitter, usePopup } from '@wishingjs/components';
import { Button, Space } from 'antd';
import React from 'react';


function View1() {

  const onFinish = () => {
  };

  const { initialValues } = usePopup();

  return (
    <PopupWindow title='View1' submitter={{ onFinish }}>
      <div>do something...</div>
      <div>do something...</div>
      <div>do something...</div>
      <div style={{ marginTop: 8 }}>{initialValues}</div>
    </PopupWindow>
  );
}

function View2() {

  const onFinish = () => {
  };

  const { initialValues, open, close } = usePopup();

  return <PopupWindow title={'View2'} footer={
    <Submitter
      onFinish={onFinish} onFinished={() => {
      close();
      open('view1', '我来自是View2, Hello View1');
    }} />
  }>
    <div>do something...</div>
    <div>do something...</div>
    <div>do something...</div>
    <div style={{ marginTop: 8 }}>{initialValues}, 点击确定跳转View1</div>
  </PopupWindow>;
}

export default () => {

  const popups = React.useRef<PopupsRef>();

  return <>
    <Space>
      show
      <Button onClick={() => popups.current?.open('view1', 'Hello View1')}>View1</Button>
      <Button onClick={() => popups.current?.open('view2', 'Hello View2')}>View2</Button>
    </Space>
    <Popups ref={popups} items={[
      { key: 'view1', children: <View1 /> },
      { key: 'view2', children: <View2 /> },
    ]} />
  </>;

}
