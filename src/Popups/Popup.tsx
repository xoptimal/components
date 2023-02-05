import React, { memo, PropsWithChildren, useMemo, useState } from 'react';
import PopupContext from './PopupContext';

export type PopupProps = {

  /**
   * @description       唯一标识
   * @default           -
   */
  key: string;

  /**
   * @description       唯一标识
   * @default           -
   */
  onFinished?: (key: string, response?: any) => void;

  /**
   * @description       唤起
   * @default           -
   */
  open: (key: string, initialValues?: any, opts?: any) => void;

  /**
   * @description       关闭
   * @default           -
   */
  close: () => void;

  /**
   * @description       是否显示
   * @default           -
   */
  visible?: boolean

  /**
   * @description       初始化内容
   * @default           -
   */
  initialValues?: object

  /**
   * @description       额外内容
   * @default           -
   */
  opts?: any
};

const Popup = memo((props: PropsWithChildren<PopupProps>) => {

  const {
    visible: visibleProps = false,
    initialValues,
    onFinished,
    open,
    close,
    children,
    opts,
  } = props;

  const [isPopupWindow, hasPopupWindow] = useState(false);

  const dom = useMemo(() => {
    return isPopupWindow
      ? children
      : (
        <div style={{ contentVisibility: visibleProps ? 'visible' : 'hidden' }}>
          {children}
        </div>
      );
  }, [isPopupWindow, visibleProps]);

  return (
    <PopupContext.Provider
      value={{
        initialValues,
        visible: visibleProps,
        opts,
        open,
        close,
        finished: onFinished,
        hasPopupWindow,
      }}
    >
      {dom}
    </PopupContext.Provider>
  );
});

Popup.displayName = 'Popup';

export default Popup;
