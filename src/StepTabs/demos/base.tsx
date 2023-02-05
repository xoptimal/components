import {
  ProCard,
  ProForm,
  ProFormCheckbox,
  ProFormDatePicker,
  ProFormDateRangePicker,
  ProFormDigit,
  ProFormSelect,
  ProFormText,
} from '@ant-design/pro-components';
import {StepTabs, Submitter} from '@wishingjs/components';
import {Form, message, Radio, RadioChangeEvent, Space, Switch} from 'antd';
import React, {useState} from 'react';

type TabPosition = 'left' | 'right' | 'top' | 'bottom';
type Type = 'steps' | 'line' | 'card'

const waitTime = (time: number = 100) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(true);
    }, time);
  });
};

function Step1() {

  const onFinish = (values: any) => {
    waitTime(1000);
    return values;
  };

  const [form] = Form.useForm();

  return (
    <>
      <Form form={form}>
        <ProCard
          title='源和目标'
          bordered
          headerBordered
          collapsible
        >
          <ProFormText
            name='name'
            width='md'
            label='迁移任务名称'
            tooltip='最长为 24 位，用于标定的唯一 id'
            placeholder='请输入名称'
            rules={[{required: true}]}
          />
          <ProForm.Group title='节点' size={8}>
            <ProFormSelect width='sm' name='source' placeholder='选择来源节点'/>
            <ProFormSelect width='sm' name='target' placeholder='选择目标节点'/>
          </ProForm.Group>
        </ProCard>

        <ProCard
          title='顶部对齐'
          bordered
          headerBordered
          collapsible
          style={{}}
        >
          <ProFormDigit
            name='xs'
            label='XS号表单'
            initialValue={9999}
            tooltip='悬浮出现的气泡。'
            placeholder='请输入名称'
            width='xs'
          />
          <ProFormText name='s' label='S号表单' placeholder='请输入名称' width='sm'/>
          <ProFormDateRangePicker name='m' label='M 号表单'/>
          <ProFormSelect
            name='l'
            label='L 号表单'
            fieldProps={{
              mode: 'tags',
            }}
            width='lg'
            initialValue={['吴家豪', '周星星']}
            options={['吴家豪', '周星星', '陈拉风'].map((item) => ({
              label: item,
              value: item,
            }))}
          />
        </ProCard>
      </Form>
      <Submitter onFinish={onFinish} form={form} onFinishFailed={() => {
      }}/>
    </>
  );
}

function Step2() {

  const onFinish = (values: any) => {
    return values;
  };

  const [form] = Form.useForm();

  return <>
    <Form form={form}>
      <ProCard>
        <ProFormCheckbox.Group
          name='checkbox'
          label='迁移类型'
          width='lg'
          options={['结构迁移', '全量迁移', '增量迁移', '全量校验']}
        />
        <ProForm.Group>
          <ProFormText name='dbname' label='业务 DB 用户名'/>
          <ProFormDatePicker name='datetime' label='记录保存时间' width='sm'/>
        </ProForm.Group>
        <ProFormCheckbox.Group
          name='checkbox'
          label='迁移类型'
          options={['完整 LOB', '不同步 LOB', '受限制 LOB']}
        />
      </ProCard>
      <Submitter form={form} onFinish={onFinish}/>
    </Form>
  </>;
}

function Step3() {

  const onFinish = (values: any) => {
    return values;
  };

  const [form] = Form.useForm();


  return <>
    <Form form={form}>
      <ProCard
        style={{
          marginBlockEnd: 16,
        }}
      >
        <ProFormCheckbox.Group
          name='checkbox'
          label='部署单元'
          rules={[
            {
              required: true,
            },
          ]}
          options={['部署单元1', '部署单元2', '部署单元3']}
        />
        <ProFormSelect
          label='部署分组策略'
          name='remark'
          rules={[
            {
              required: true,
            },
          ]}
          width='md'
          initialValue='1'
          options={[
            {
              value: '1',
              label: '策略一',
            },
            {value: '2', label: '策略二'},
          ]}
        />
        <ProFormSelect
          label='Pod 调度策略'
          name='remark2'
          width='md'
          initialValue='2'
          options={[
            {
              value: '1',
              label: '策略一',
            },
            {value: '2', label: '策略二'},
          ]}
        />
      </ProCard>
      <Submitter form={form} onFinish={onFinish}/>
    </Form>
  </>;
}

export default () => {

  const [tabPosition, setTabPosition] = useState<TabPosition>('top');
  const [type, setType] = useState<Type>('steps');
  const [bordered, setBordered] = useState(false);

  const changeTabPosition = (e: RadioChangeEvent) => {
    setTabPosition(e.target.value);
  };

  const changeType = (e: RadioChangeEvent) => {
    setType(e.target.value);
  };

  const items = [
    {
      key: 'step1',
      title: 'Step1',
      children: <Step1/>,
    },
    {
      key: 'step2',
      title: 'Step2',
      children: <Step2/>,
    },
    {
      key: 'step3',
      title: 'Step3',
      children: <Step3/>,
    },
  ];

  const onFinish = (values: any) => {
    message.success('你点击了tabs的onFinish');
    //  eg. 例如请求API
    return values;
  };

  const onFinished = (values: any) => {
    message.success('tabs的onFinished');
    //  完成后回调, do something...
    console.log('onFinish return values', values);
  };

  return <>
    <Space style={{marginBottom: 24}}>
      type:
      <Radio.Group value={type} onChange={changeType}>
        <Radio.Button value='steps'>steps</Radio.Button>
        <Radio.Button value='card'>card</Radio.Button>
        <Radio.Button value='line'>line</Radio.Button>
      </Radio.Group>
      position:
      <Radio.Group value={tabPosition} onChange={changeTabPosition}>
        <Radio.Button value='top'>top</Radio.Button>
        <Radio.Button value='bottom'>bottom</Radio.Button>
        <Radio.Button value='left'>left</Radio.Button>
        <Radio.Button value='right'>right</Radio.Button>
      </Radio.Group>
      bordered:
      <Switch checked={bordered} onChange={setBordered}/>
    </Space>

    <StepTabs bordered={bordered} position={tabPosition} type={type} items={items}
              submitter={{
                onFinish, onFinished,
              }}/>

  </>;
}
