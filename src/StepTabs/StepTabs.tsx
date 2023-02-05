import { Space, StepProps, Steps as AntSteps, StepsProps, Tabs, TabsProps } from 'antd';
import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { usePopup } from '../Popups';
import Submitter, { SubmitterProps, SubmitterRef } from '../Submitter';
import StepTab from './StepTab';
import './StepTabs.less';

export type StepTabItem = {
  /**
   * @description       唯一标识
   * @default           -
   */
  key: string

  /**
   * @description       内容
   * @default           -
   */
  children: ReactNode

  /**
   * @description       标题
   * @default           -
   */
  title: ReactNode

  /**
   * @description       Steps.Step实例透传
   * @default           -
   */
  stepProps?: StepProps

}

export type StepTabSubmitterProps = {

  /**
   * @description       上一步文本
   * @default           -
   */
  prevText?: string

  /**
   * @description       下一步文本
   * @default           -
   */
  nextText?: string

  /**
   * @description       取消回调
   * @default           -
   */
  onCancel?: (key: string) => void

  /**
   * @description       提交前回调
   * @default           -
   */
  onBefore?: (key: string) => void

  /**
   * @description       提交回调
   * @default           -
   */
  onFinish?: <V = any> (values: V, key: string) => any

  /**
   * @description       提交成功回调
   * @default           -
   */
  onFinished?: <V = any> (values: V, key: string) => void

  /**
   * @description       提交失败回调
   * @default           -
   */
  onFinishFailed?:  (error: Error, key: string) => void

} & Omit<SubmitterProps, 'onFinish' | 'onFinished' | 'onFinishFailed' | 'onBefore'>

export type StepTabsProps<V = any> = {

  /**
   * @description       页面切换回调
   * @default           -
   */
  onChange?: (from: string, to: string) => void

  /**
   * @description       自定义布局
   * @default           -
   */
  render?: (dom: ReactNode, submitter: ReactNode) => JSX.Element

  /**
   * @description       Submitter实例透传
   * @default           -
   */
  submitter?: StepTabSubmitterProps

  /**
   * @description       Ant.Step实例透传
   * @default           -
   */
  stepsProps?: StepsProps

  /**
   * @description       Ant.Tabs实例透传
   * @default           -
   */
  tabsProps?: TabsProps

  /**
   * @description       初始化数据(透传到每个Tab)
   * @default           -
   */
  initialValues?: V

  /**
   * @description       内容
   * @default           -
   */
  items: StepTabItem[]

  /**
   * @description       类型
   * @default           -
   */
  type?: 'steps' | 'line' | 'card'

  /**
   * @description       方向
   * @default           -
   */
  position?: 'top' | 'bottom' | 'left' | 'right'

  /**
   * @description       自定义内容样式
   * @default           -
   */
  bodyStyle?: React.CSSProperties;

  /**
   * @description       当前展示Tab.Key
   * @default           -
   */
  activeKey?: string

  /**
   * @description       是否断层(仅type=Step有效)
   * @default           -
   */
  fault?: boolean

  /**
   * @description       是否显示边框
   * @default           -
   */
  bordered?: boolean

}

type DirectionType = 'horizontal' | 'vertical'

const defaultBorderStyle = 'solid 1px #f0f0f0';

function StepTabs(props: StepTabsProps) {

  const {
    activeKey,
    bodyStyle: bodyStyleProps,
    type = 'line',
    position = 'top',
    items,
    render,
    fault,
    onChange,
    submitter,
    stepsProps,
    tabsProps,
    initialValues,
    bordered,
  } = props;

  const [current, setCurrent] = useState<number>(0);

  useEffect(() => {
    if (items.length > 0 && activeKey) {
      setCurrent(items.findIndex(find => find.key === activeKey));
    }
  }, [activeKey, items]);

  const onChangeTab = (key: string) => {
    setCurrent(items.findIndex(find => find.key === key));
  };

  const total = items.length - 1;

  const events = useRef<Record<string, any>>({});

  const bindEvent = (tabKey: number, event: any) => {
    events.current[tabKey] = event;
  };

  const [values, setValues] = useState<Record<string, any>>({});

  //  用于判断Step模式下, 当前Tab是否已经完成
  const completed = useRef(false);

  const popup = usePopup();

  const submitterRef = useRef<SubmitterRef>();

  const handleChange = (from: number) => {
    setTimeout(() => {
      onChange?.(items[from].key, items[current].key);
    }, 50);
  };

  const handleFinished = () => {
    if (submitter?.onFinished) {
      submitter.onFinished?.(values, items[current].key);
    } else if (popup) {
      popup.close();
      popup.finished?.(values);
    }
  };

  useEffect(() => {
    if (popup && popup.visible) {
      let current = 0;
      if (activeKey) {
        current = items.findIndex(find => find.key === activeKey);
      }
      setCurrent(current);
      completed.current = false;
    }
  }, [popup]);

  const submitterDom = (
    <Submitter
      ref={submitterRef}
      insideStepTabs
      onCancel={() => {
        if (type === 'steps') {
          setCurrent(prev => prev - 1);
          if (completed.current) completed.current = false;
          handleChange(current + 1);
        } else {
          if (submitter?.onCancel) {
            submitter.onCancel?.(items[current].key);
          } else {
            popup?.close();
          }
        }
      }}
      onBefore={async () => {
        if (completed.current) {
          return submitter?.onBefore?.(items[current].key);
        } else {
          await events.current[current]?.onBefore();
          if (type !== 'steps') {
            await submitter?.onBefore?.(items[current].key);
          }
        }
      }}
      onFinish={async () => {
        if (completed.current) {
          return submitter?.onFinish?.(values, items[current].key);
        } else {
          let finishValue = await events.current[current]?.onFinish();
          if (type !== 'steps' && submitter?.onFinish) {
            finishValue = await submitter.onFinish(finishValue, items[current].key);
          }
          return finishValue;
        }
      }}
      onFinished={(res) => {
        if (completed.current) {
          handleFinished();
        } else {
          setValues(prev => {
            prev[items[current].key] = res;
            return prev;
          });
          events.current[current]?.onFinished?.(res);
          if (type === 'steps') {
            if (current < total) {
              setCurrent(prev => prev + 1);
              handleChange(current - 1);
            } else {
              completed.current = true;
              submitterRef.current?.reset();
            }
          } else {
            handleFinished();
          }
        }
      }}
      onFinishFailed={async e => {
        if (completed.current) {
          submitter?.onFinishFailed?.(e as Error, items[current].key);
        } else {
          events.current[current]?.onFinishFailed(e as Error);
          if (type !== 'steps') {
            await submitter?.onFinishFailed?.(e as Error, items[current].key);
          }
        }
      }}
      cancelText={type === 'steps' ? submitter?.prevText || '上一步' : submitter?.cancelText || '取消'}
      confirmText={type === 'steps'
        ? current < total
          ? submitter?.nextText || '下一步'
          : submitter?.confirmText || '确定'
        : submitter?.confirmText || '确定'}
      render={({ okDom, cancelDom }) => {
        if (type === 'steps' && (current === 0 || fault)) {
          return okDom;
        }
        return <Space>{cancelDom}{okDom}</Space>;
      }}
    />
  );

  const isLR = position === 'left' || position === 'right';

  const bodyStyle: React.CSSProperties = {
    padding: '16px 24px',
    minWidth: 0,
    maxWidth: '100%',
    boxSizing: 'border-box',
    flex: 1,
    ...bodyStyleProps,
  };

  const contentDom = items.map((item, index) => {

    const temp: any = {
      type,
      tabKey: index,
      current,
      bindEvent,
      values,
      initialValues,
    };

    if (type !== 'steps') {
      temp.style = {};
    }

    return (
      <StepTab key={item.key} {...temp}>
        {item.children}
      </StepTab>
    );
  });

  if (type === 'steps') {

    const style: React.CSSProperties = {
      minWidth: 0,
      maxWidth: '100%',
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      flex: 1,
    };

    let direction: DirectionType = 'horizontal';

    let stepsStyle: React.CSSProperties = { boxSizing: 'border-box', padding: '16px 24px' };

    let size: 'default' | 'small' = 'default';

    if (isLR) {
      style.flexDirection = 'row';
      direction = 'vertical';
      stepsStyle.width = 'fit-content';
      stepsStyle.height = 'fit-content';
      size = 'small';
      stepsStyle.padding = '16px 24px';
    }

    if (stepsProps?.style) {
      stepsStyle = { ...stepsProps?.style, ...stepsStyle };
    }

    let stepsDom = (
      <AntSteps size={size} {...stepsProps} key={'steps'} items={items} direction={direction} style={stepsStyle}
                current={current} />
    );

    const arr: ReactNode[] = [];

    if (isLR && bordered) {
      const stepContainerStyle: React.CSSProperties = {};

      if (position === 'left') {
        stepContainerStyle.borderRight = defaultBorderStyle;
      } else {
        stepContainerStyle.borderLeft = defaultBorderStyle;
      }

      stepsDom = <div style={stepContainerStyle}>{stepsDom}</div>;

      bodyStyle.padding = '16px';

      style.border = defaultBorderStyle;

    } else if (bordered) {
      style.border = defaultBorderStyle;
    }

    let bodyDom: ReactNode = (
      <div key='content' style={bodyStyle}>
        {contentDom}
        {!render && <div style={{ marginTop: '16px' }}>{submitterDom}</div>}
      </div>
    );

    arr.push(stepsDom);

    if (position === 'right' || position === 'bottom') {
      arr.unshift(bodyDom);
    } else {
      arr.push(bodyDom);
    }

    const content = <div style={style}>{arr}</div>;

    if (render) {
      return render(content, submitterDom);
    } else {
      return content;
    }
  }

  const tabItems = items.map((item, index) => {
    const tempStyle = { ...bodyStyle };
    let children: ReactNode = render
      ? <div style={tempStyle}>{contentDom[index]}</div>
      : <div style={tempStyle}>{contentDom[index]}
        <div style={{ marginTop: '16px' }}>{submitterDom}</div>
      </div>;

    return { key: item.key, label: item.title, children };
  });

  const tabStyle: React.CSSProperties = {};
  if (bordered) {
    tabStyle.border = defaultBorderStyle;
  }

  const tabDom = <Tabs {...tabsProps} onChange={onChangeTab} style={tabStyle} type={type as any} tabPosition={position}
                       items={tabItems} activeKey={items[current].key} className={`re-step-tabs-${position}`} />;

  if (render) {
    return render(tabDom, submitterDom);
  }

  return tabDom;

}

StepTabs.displayName = 'StepTabs';

export default StepTabs;
