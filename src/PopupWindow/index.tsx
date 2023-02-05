import React, { PropsWithChildren, useEffect } from 'react';
import type { DrawerProps, ModalProps } from 'antd';
import { Drawer, Modal } from 'antd';
import usePopup from '../Popups/hooks/usePopup';
import Submitter, { SubmitterProps } from '../Submitter';

import './index.less';

export type PopupWindowProps = {
  /**
   * @description       窗口类型
   * @default           modal
   */
  mode?: 'modal' | 'drawer';

  /**
   * @description       关闭回调
   * @default           -
   */
  onClose?: () => void;

  /**
   * @description       显示隐藏
   * @default           -
   */
  visible?: boolean

  /**
   * @description       显示边框
   * @default           -
   */
  bordered?: boolean

  /**
   * @description       Submitter实例透传
   * @default           -
   */
  submitter?: SubmitterProps

} & Omit<ModalProps,
  | 'onCancel'
  | 'cancelButtonProps'
  | 'okButtonProps'
  | 'cancelText'
  | 'confirmLoading'
  | 'okText'
  | 'okType'
  | 'open'
  | 'onOk'>
  & Omit<DrawerProps, | 'onClose' | 'open'>;

function PopupWindow(
  props: PropsWithChildren<PopupWindowProps>,
) {
  const {
    width = 550,
    mode = 'modal',
    bordered = false,
    onClose,
    visible,
    submitter,
    className,
    children,
    ...rest
  } = props;

  const popup = usePopup();

  useEffect(() => {
    if (popup.hasPopupWindow) popup.hasPopupWindow(true);
  }, [popup]);

  const handleClose = () => {
    if (onClose) {
      onClose();
    } else if (popup.hasPopupWindow) {
      popup.close();
    }
  };

  const params: any = { width, open: popup.hasPopupWindow ? popup.visible : visible, ...rest };

  if (submitter) {
    if (mode === 'drawer') {
      params.extra = <Submitter {...submitter} />;
    } else {
      params.footer = <Submitter {...submitter} />;
    }
  }

  return mode === 'drawer' ? (
    <Drawer {...params} onClose={handleClose} className={className}>
      {children}
    </Drawer>
  ) : (
    <Modal footer={false}
           {...params}
           onCancel={handleClose}
           className={`${bordered ? 'popup-window-bordered' : 'popup-window'} ${className}`}>
      {children}
    </Modal>
  );
}


export default PopupWindow;
