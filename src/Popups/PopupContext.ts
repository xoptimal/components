import { createContext } from 'react';

export type PopupType<V = any> = {
  /**
   * @description       open方法透传数据
   * @default           -
   */
  initialValues?: V;

  /**
   * @description       当前状态(显示/隐藏)
   * @default           -
   */
  visible: boolean;

  /**
   * @description       透传Popups的onFinished
   * @default           -
   */
  finished?: (response: any) => void;

  /**
   * @description       触发关闭事件
   * @default           -
   */
  close: () => void;

  /**
   * @description       唤起某个 Popup
   * @default           -
   */
  open: (key: string, initialValues?: unknown, opts?: unknown) => void;

  /**
   * @description       open方法透传额外内容
   * @default           -
   */
  opts?: any

  /**
   * @description       内部使用, 用于辨别children是否包含PopupWindow
   * @default           -
   */
  hasPopupWindow?: (result: boolean) => void
};

export default createContext<PopupType>({
  visible: false,
  open: () => {},
  close: () => {},
});
