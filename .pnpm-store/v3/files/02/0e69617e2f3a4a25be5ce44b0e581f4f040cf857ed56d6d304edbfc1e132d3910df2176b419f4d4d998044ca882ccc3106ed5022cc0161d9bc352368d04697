import type { InputNumberProps } from 'antd';
import React from 'react';
import type { ProFormFieldItemProps } from '../../typing';
export type Value = string | number | undefined;
export type ValuePair = Value[];
export type RangeInputNumberProps = Omit<InputNumberProps, 'value' | 'defaultValue' | 'onChange' | 'placeholder'> & {
    value?: ValuePair;
    defaultValue?: ValuePair | undefined;
    onChange?: (value?: ValuePair) => void;
};
export type ProFormDigitRangeProps = ProFormFieldItemProps<RangeInputNumberProps> & {
    separator?: string;
    separatorWidth?: number;
};
declare const _default: React.ForwardRefExoticComponent<{
    fieldProps?: (import("../../typing").FieldProps<any> & Omit<InputNumberProps<import("@rc-component/mini-decimal").ValueType>, "defaultValue" | "placeholder" | "onChange" | "value"> & {
        value?: ValuePair | undefined;
        defaultValue?: ValuePair | undefined;
        onChange?: ((value?: ValuePair | undefined) => void) | undefined;
    }) | undefined;
    placeholder?: string | string[] | undefined;
    secondary?: boolean | undefined;
    cacheForSwr?: boolean | undefined;
    disabled?: boolean | undefined;
    width?: number | "sm" | "md" | "xl" | "xs" | "lg" | undefined;
    proFieldProps?: import("@ant-design/pro-utils").ProFieldProps | undefined;
    footerRender?: import("../../typing").LightFilterFooterRender | undefined;
    children?: React.ReactNode;
} & Omit<import("..").ProFormItemProps, "valueType"> & Pick<import("../../typing").ProFormGridConfig, "colProps"> & import("../../typing").ExtendsProps & {
    separator?: string | undefined;
    separatorWidth?: number | undefined;
} & React.RefAttributes<any>>;
export default _default;
