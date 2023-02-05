import Popups, { PopupsRef, usePopup } from '@wishingjs/components';
import { Button, Card, Space } from 'antd';
import React from 'react';


function View1() {

  const { initialValues, close } = usePopup();

  return (
    <Card style={{ marginTop: 24 }} title={'View1'} extra={<Button onClick={close}>close</Button>}>
      <div>do something...</div>
      <div>do something...</div>
      <div>do something...</div>
      <div style={{ marginTop: 8 }}>{initialValues}</div>
    </Card>
  );
}

function View2() {

  const { initialValues, open, close } = usePopup();

  return <Card style={{ marginTop: 24 }} title={'View2'} extra={<Button onClick={close}>close</Button>}>
    <div>do something...</div>
    <div>do something...</div>
    <div>do something...</div>
    <div style={{ marginTop: 8 }}>{initialValues}, 点击<Button onClick={() => {
      open('view1');
      close();
    }}>Open View1</Button>跳转View1
    </div>
  </Card>;
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
