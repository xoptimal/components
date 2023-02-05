import Popups, { PopupsRef, PopupWindow, usePopup } from '@wishingjs/components';
import React, { useRef, useState } from 'react';
import { Button, Form, Input, InputNumber, Table } from 'antd';


function UserForm() {

  const { initialValues } = usePopup();

  const onFinish = (values: any) => {
    return { ...initialValues, ...values };
  };

  const [form] = Form.useForm();

  return (
    <PopupWindow title={initialValues ? '编辑用户' : '添加用户'} submitter={{
      form,
      onFinish,
    }}>
      <Form form={form}>
        <Form.Item rules={[{ required: true }]} name={'name'} label='姓名'>
          <Input />
        </Form.Item>
        <Form.Item rules={[{ required: true }]} name={'age'} label='年龄'>
          <InputNumber style={{ width: '100%' }} />
        </Form.Item>
      </Form>
    </PopupWindow>
  );
}

type ITEM = { name: string, id: string, age: number }

export default () => {

  const popupsRef = useRef<PopupsRef>();

  const [dataSource, setDataSource] = useState<ITEM[]>([
    { name: 'zhangsan', age: 17, id: '123' },
  ]);

  return <>
    <Button style={{ marginBottom: 8 }} type={'primary'} onClick={() => {
      popupsRef.current?.open('form');
    }
    }>添加用户</Button>
    <Table
      rowKey={'id'}
      bordered
      dataSource={dataSource}
      columns={[{
        dataIndex: 'name',
        title: 'Name',
      }, {
        dataIndex: 'age',
        title: 'Age',
      }, {
        dataIndex: 'action',
        title: 'Actions',
        render: (dom, entity) => <a onClick={() => {
          popupsRef.current?.open('form', entity);
        }}>编辑</a>,
      },
      ]} />
    <Popups ref={popupsRef}
            onFinished={(key, response) => {
              const temp = response as ITEM;
              if (temp.id) { //  edit
                setDataSource(prev => {
                  const arr = [...prev];
                  const findIndex = arr.findIndex(find => find.id === temp.id);
                  arr[findIndex] = { ...arr[findIndex], ...temp };
                  return arr;
                });
              } else {  //  add
                setDataSource(prev => [...prev, { ...temp, id: (Math.random() * 1000).toFixed(0) }]);
              }
              //  todo 通常这里是提交完 post, put后, 对应刷新列表即可
            }}
            items={[
              { key: 'form', children: <UserForm /> },
            ]} />
  </>;

}
