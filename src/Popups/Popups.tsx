import React, { forwardRef, useEffect, useImperativeHandle, useMemo, useState } from 'react';
import Popup from './Popup';

export type PopupsRef =
  | {
  /**
   * @description       唤起
   * @default           -
   */
  open: (key: string, initialValues?: any, opts?: unknown) => void;

  /**
   * @description       关闭
   * @default           -
   */
  close: (key: string) => void;
}
  | undefined;

export type PopupsProps = {

  /**
   * @description       调用open,close时触发
   * @default           -
   */
  onChange?: (key: string, visible: boolean) => void;

  /**
   * @description       预留钩子, 用于完成某个事件后的触发回调, 例如提交表单完成返回刷新列表
   * @default           -
   */
  onFinished?: (key: string, response?: unknown) => void;

  items: {
    key: string,
    children: React.ReactNode
  }[]
};

export type PopupType = Record<string, {
  visible: boolean;
  initialValues?: any;
  opts?: unknown;
}>;

const Popups = forwardRef<PopupsRef, PopupsProps>((props, ref) => {

    const { onFinished: onFinishedProps, onChange, items = [] } = props;

    const [popups, setPopups] = useState<PopupType>({});

    useEffect(() => {
      setPopups(draft => {
        items.forEach(item => {
          draft[item.key] = { visible: false, initialValues: undefined };
        });
        return { ...draft };
      });
    }, []);

    const imperativeHandle: PopupsRef = {
      open: (key, initialValues, opts) => {
        if (popups.hasOwnProperty(key)) {
          setPopups(prevState => {
            prevState[key] = { visible: true, initialValues, opts };
            return { ...prevState };
          });
          onChange?.(key, popups[key].visible);
        } else {
          throw new Error(`Popups下未找到与""${key}'关联的组件, 请检查!`);
        }
      },
      close: (key: string) => {
        setPopups(prevState => {
          prevState[key].visible = false;
          return { ...prevState };
        });
      },
    };

    useImperativeHandle(ref, () => imperativeHandle);

    const dom = useMemo(() => {
      return items.map(child =>
        <Popup key={child.key}
               {...popups[child.key]}
               open={imperativeHandle.open}
               close={() => {
                 imperativeHandle.close(child.key);
               }}
               onFinished={(values: any) => {
                 onFinishedProps?.(child.key, values);
               }}
        >{child.children}</Popup>,
      );
    }, [popups]);

    return <React.Fragment>
      {dom}
    </React.Fragment>;
  },
);

Popups.displayName = 'Popups';

export default Popups;
