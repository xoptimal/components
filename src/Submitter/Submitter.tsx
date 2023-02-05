import { Button, Space } from 'antd';
import React, { forwardRef, Fragment, ReactNode, useEffect, useImperativeHandle, useState } from 'react';
import usePopup from '../Popups/hooks/usePopup';

import type { FormInstance } from 'antd/lib/form';
import useStepTab from '../StepTabs/hooks/useStepTab';

export type SubmitterEventType = {
  /**
   * @description       取消按钮回调
   * @default           -
   */
  onCancel?: () => void;
  /**
   * @description       onFinish触发前钩子, 推荐用于表单等数据校验等场景
   * @default           -
   */
  onBefore?: () => void;

  /**
   * @description       提交回调, 推荐用于表单提交服务器等场景
   * @default           -
   */
  onFinish: <V = any> (values?: V) => any;

  /**
   * @description       提交完成后回调
   * @default           -
   */
  onFinished?: <V = any> (values?: V) => void;

  /**
   * @description       onFinish失败触发钩子
   * @default           -
   */
  onFinishFailed?: (error: Error) => void;
}

export type SubmitterProps = {

  /**
   * @description       样式
   * @default           -
   */
  style?: React.CSSProperties

  /**
   * @description       自定义渲染内容
   * @default           -
   */
  render?: (
    original: {
      cancelDom: ReactNode;
      okDom: ReactNode;
    },
    onCancel: () => void,
    onFinish: () => void,
  ) => React.ReactNode;

  /**
   * @description       AntForm组件实例
   * @default           -
   */
  form?: FormInstance;

  /**
   * @description       提交按钮文本
   * @default           -
   */
  confirmText?: string

  /**
   * @description       取消按钮文本
   * @default           -
   */
  cancelText?: string

  /**
   * @description       用于标记StepTabs内的Submitter
   * @default           -
   */
  insideStepTabs?: boolean
} & SubmitterEventType

export type SubmitterRef = {

  /**
   * @description       重新触发onSubmit方法
   * @default           -
   */
  reset: () => void
} | undefined

const Submitter = forwardRef<SubmitterRef, SubmitterProps>((props, ref) => {

    const {
      onCancel,
      render,
      onBefore,
      onFinish,
      onFinishFailed,
      onFinished: onFinishedProps,
      form,
      confirmText = '确定',
      cancelText = '取消',
      insideStepTabs,
      style,
    } = props;

    const [isLoading, setLoading] = useState(false);

    const popup = usePopup();

    const stepTab = useStepTab();

    useEffect(() => {
      if (popup?.visible) {
        if (popup?.initialValues) {
          form?.setFieldsValue(popup?.initialValues);
        } else {
          form?.resetFields();
        }
      }
    }, [popup]);

    const handleCancel = () => {
      if (onCancel) {
        onCancel?.();
      } else {
        popup?.close();
      }
    };

    const handleBefore = async () => {
      if (onBefore) {
        await onBefore?.();
      } else {
        await form?.validateFields();
      }
    };

    const handleFailed = (err: Error) => {
      if (onFinishFailed) {
        onFinishFailed?.(err);
      }
    };

    const handleFinish = async () => {
      return onFinish?.(form?.getFieldsValue());
    };

    const handleFinished = (values: any) => {
      if (onFinishedProps) {
        onFinishedProps?.(values);
      } else {
        if (!stepTab.bindEvent && popup?.visible) {
          handleCancel();
          popup?.finished?.(values);
        }
      }
    };

    const handleSubmit = async () => {
      try {
        await handleBefore();
        setLoading(true);
        const res = await handleFinish();
        await handleFinished(res);
        return res;
      } catch (e) {
        handleFailed(e as Error);
      } finally {
        setLoading(false);
      }
    };

    useEffect(() => {
      if (stepTab.bindEvent && !insideStepTabs) {
        stepTab.bindEvent({
          onCancel: handleCancel,
          onBefore: handleBefore,
          onFinish: handleFinish,
          onFinished: handleFinished,
          onFinishFailed: handleFailed,
        });
      }
    }, [stepTab.bindEvent, insideStepTabs]);

    useImperativeHandle(ref, () => ({
      reset: handleSubmit,
    }));

    const cancelDom = (
      <Button onClick={handleCancel} disabled={isLoading}>
        {cancelText}
      </Button>
    );

    const okDom = (
      <Button onClick={handleSubmit} type='primary' loading={isLoading}>
        {confirmText}
      </Button>
    );

    const dom = render ? <div>
      {render({ cancelDom, okDom }, handleCancel, handleSubmit)}
    </div> : (
      <Space style={style}>
        {cancelDom}
        {okDom}
      </Space>
    );

    return stepTab.type ? insideStepTabs ? dom : <Fragment /> : dom;
  },
);

export default Submitter;

