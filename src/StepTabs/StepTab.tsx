import React, { PropsWithChildren, useMemo } from 'react';
import StepTabsContext from './StepTabsContext';
import type { SubmitterEventType } from '../Submitter';

export type StepTabProps = {

  /**
   * @description       唯一标识
   * @default           -
   */
  tabKey: number;

  /**
   * @description       类型
   * @default           -
   */
  type?: 'steps' | 'line' | 'card',

  /**
   * @description       当前展示Tab.Key
   * @default           -
   */
  current?: number

  /**
   * @description       绑定当前Submitter事件
   * @default           -
   */
  bindEvent: (tabKey: number, event: SubmitterEventType) => void

  /**
   * @description       StepTabs内容数据
   * @default           -
   */
  values: Record<string, any>

  /**
   * @description       初始化数据
   * @default           -
   */
  initialValues?: any

  /**
   * @description       样式
   * @default           -
   */
  style?: React.CSSProperties

};

function StepTab(props: PropsWithChildren<StepTabProps>) {

  const { children, type, current, tabKey, bindEvent: bindEventProps, values, initialValues, style } = props;

  const dom = useMemo(() => {

    const tempStyle: React.CSSProperties = {};

    tempStyle.contentVisibility = current === tabKey ? 'visible' : 'hidden';

    return (
      <div style={style || tempStyle}>
        {children}
      </div>
    );
  }, [current, style]);

  return (
    <StepTabsContext.Provider value={{
      values,
      initialValues,
      type,
      bindEvent: (event: any) => {
        bindEventProps(tabKey, event);
      },
    }}>
      {dom}
    </StepTabsContext.Provider>
  );

}

export default StepTab;
