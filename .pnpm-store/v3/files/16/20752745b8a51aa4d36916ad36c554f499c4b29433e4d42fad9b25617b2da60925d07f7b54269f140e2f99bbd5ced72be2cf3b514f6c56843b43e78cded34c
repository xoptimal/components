import type { ProFieldMoneyProps } from '@ant-design/pro-field';
import type { InputNumberProps } from 'antd';
import React from 'react';
import type { ProFormFieldItemProps } from '../../typing';
export type ProFormMoneyProps = ProFormFieldItemProps<Omit<ProFieldMoneyProps, 'valueType' | 'text'> & InputNumberProps> & {
    customSymbol?: string;
    locale?: string;
    min?: InputNumberProps['min'];
    max?: InputNumberProps['min'];
};
declare const _default: React.ForwardRefExoticComponent<{
    fieldProps?: (import("../../typing").FieldProps<any> & Omit<import("@ant-design/pro-field").FieldMoneyProps, "text" | "valueType"> & InputNumberProps<import("@rc-component/mini-decimal").ValueType>) | undefined;
    placeholder?: string | string[] | undefined;
    secondary?: boolean | undefined;
    cacheForSwr?: boolean | undefined;
    disabled?: boolean | undefined;
    width?: number | "sm" | "md" | "xl" | "xs" | "lg" | undefined;
    proFieldProps?: import("@ant-design/pro-utils").ProFieldProps | undefined;
    footerRender?: import("../../typing").LightFilterFooterRender | undefined;
    children?: React.ReactNode;
} & Omit<import("..").ProFormItemProps, "valueType"> & Pick<import("../../typing").ProFormGridConfig, "colProps"> & import("../../typing").ExtendsProps & {
    customSymbol?: string | undefined;
    locale?: string | undefined;
    min?: import("@rc-component/mini-decimal").ValueType | undefined;
    max?: import("@rc-component/mini-decimal").ValueType | undefined;
} & React.RefAttributes<any>>;
export default _default;
