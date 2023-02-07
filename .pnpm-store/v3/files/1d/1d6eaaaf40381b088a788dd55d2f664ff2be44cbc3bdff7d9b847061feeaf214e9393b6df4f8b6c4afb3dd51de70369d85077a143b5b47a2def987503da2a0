import type { IntlType } from '@ant-design/pro-provider';
import React from 'react';
export type AlertRenderType<T> = ((props: {
    intl: IntlType;
    selectedRowKeys: (number | string)[];
    selectedRows: T[];
    onCleanSelected: () => void;
}) => React.ReactNode) | false;
export type TableAlertProps<T> = {
    selectedRowKeys: (number | string)[];
    selectedRows: T[];
    alwaysShowAlert?: boolean;
    alertInfoRender?: AlertRenderType<T>;
    onCleanSelected: () => void;
    alertOptionRender?: AlertRenderType<T>;
};
declare function TableAlert<T>({ selectedRowKeys, onCleanSelected, alwaysShowAlert, selectedRows, alertInfoRender, alertOptionRender, }: TableAlertProps<T>): React.ReactElement<any, string | React.JSXElementConstructor<any>> | null;
export default TableAlert;
