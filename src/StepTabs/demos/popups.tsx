import React, { useRef, useState } from 'react';
import { Button, Form, Input, InputNumber, Table } from 'antd';
import Popups, { getAllValues, PopupsRef, PopupWindow, StepTabs, Submitter, usePopup } from '@wishingjs/components';
import { ProFormCheckbox } from '@ant-design/pro-components';

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

function Step1() {

  const [form] = Form.useForm();

  const { initialValues } = usePopup();

  const onFinish = (values: any) => {
    // todo 这里可以做接口请求
    waitTime(1000);
    return { ...initialValues, ...values };
  };

  return (
    <>
      <Form form={form}>
        <Form.Item rules={[{ required: true }]} name={'name'} label='姓名'>
          <Input />
        </Form.Item>
      </Form>
      <Submitter form={form} onFinish={onFinish} />
    </>
  );
}

function Step2() {

  const [form] = Form.useForm();
  const { initialValues } = usePopup();

  const onFinish = (values: any) => {
    waitTime(1000);
    return { ...initialValues, ...values };
  };

  return <>
    <Form form={form}>
      <Form.Item rules={[{ required: true }]} name={'age'} label='年龄'>
        <InputNumber style={{ width: '100%' }} />
      </Form.Item>
    </Form>
    <Submitter form={form} onFinish={onFinish} />
  </>;
}

function Step3() {

  const [form] = Form.useForm();
  const { initialValues } = usePopup();

  const onFinish = (values: any) => {
    waitTime(1000);
    return { ...initialValues, ...values };
  };

  return <>
    <Form form={form}>
      <ProFormCheckbox.Group
        name='hobby'
        label='爱好'
        rules={[
          {
            required: true,
          },
        ]}
        options={['足球', '篮球', '羽毛球']}
      />
    </Form>
    <Submitter form={form} onFinish={onFinish} />
  </>;
}

function UserForm() {

  const { opts } = usePopup();

  const items = [
    {
      key: 'step1',
      title: 'Step1',
      children: <Step1 />,
    },
    {
      key: 'step2',
      title: 'Step2',
      children: <Step2 />,
    },
    {
      key: 'step3',
      title: 'Step3',
      children: <Step3 />,
    },
  ];

  return (
    <StepTabs
      items={items}
      type={opts?.type}
      render={(dom, submitter) =>
        <PopupWindow title='DEMO' footer={submitter} bodyStyle={{ padding: 0 }}>
          {dom}
        </PopupWindow>}
    />
  );
}


type ITEM = { name: string, id: string, age: number, hobby?: string[] }

export default () => {

  const popupsRef = useRef<PopupsRef>();

  const [dataSource, setDataSource] = useState<ITEM[]>([
    { name: 'zhangsan', age: 17, id: '123', hobby: ['足球'] },
  ]);

  return <>
    <Button style={{ marginBottom: 8 }} type={'primary'} onClick={() => {
      popupsRef.current?.open('form', null, { type: 'steps' });
    }
    }>添加用户</Button>
    <Table
      rowKey={'id'}
      bordered
      dataSource={dataSource}
      columns={[{
        dataIndex: 'name',
        title: '姓名',
      }, {
        dataIndex: 'age',
        title: '年龄',
      }, {
        dataIndex: 'hobby',
        title: '爱好',
        render: (dom, entity) => entity.hobby?.join(','),
      }, {
        dataIndex: 'action',
        title: 'Actions',
        render: (dom, entity) => <a onClick={() => {
          popupsRef.current?.open('form', entity, { type: 'edit' });
        }}>编辑</a>,
      },
      ]} />
    <Popups ref={popupsRef}
            onFinished={(key, response) => {
              if (key === 'form') {
                const temp = getAllValues<ITEM>(response);
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
              }
            }}
            items={[{ key: 'form', children: <UserForm /> }]} />
  </>;

}

