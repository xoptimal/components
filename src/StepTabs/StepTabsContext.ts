import { createContext } from 'react';
import type { SubmitterEventType } from '../Submitter';

export type StepTabsValue = {

  /**
   * @description       当前StepTabs类型, 用于内部Submitter判断
   * @default           -
   */
  type?: 'steps' | 'line' | 'card'

  /**
   * @description       当前StepTabs类型, 用于内部Submitter事件绑定
   * @default           -
   */
  bindEvent?: (event: SubmitterEventType) => void

  /**
   * @description       当前StepTabs数据汇总(通过onFinish返回)
   * @default           -
   */
  values: Record<string, any>

  /**
   * @description       当前StepTabs初始化数据广播(来自StepTabs.initialValues)
   * @default           -
   */
  initialValues?: any
};

export default createContext<StepTabsValue>({
  values: {},
});
