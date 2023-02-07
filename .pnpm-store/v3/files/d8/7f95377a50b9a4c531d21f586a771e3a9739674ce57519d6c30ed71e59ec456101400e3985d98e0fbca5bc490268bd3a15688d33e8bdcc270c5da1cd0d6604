import type { ProFieldEmptyText } from '@ant-design/pro-field';
import type { ProSchemaComponentTypes, UseEditableUtilType } from '@ant-design/pro-utils';
import type { TableColumnType, TableProps } from 'antd';
import { Table } from 'antd';
import type { useContainer } from '../container';
import type { ProColumnGroupType, ProColumns } from '../typing';
type ColumnToColumnReturnType<T> = (TableColumnType<T> & {
    index?: number;
    isExtraColumns?: boolean;
    extraColumn?: typeof Table.EXPAND_COLUMN | typeof Table.SELECTION_COLUMN;
})[];
type ColumnToColumnParams<T> = {
    columns: ProColumns<T, any>[];
    counter: ReturnType<typeof useContainer>;
    columnEmptyText: ProFieldEmptyText;
    type: ProSchemaComponentTypes;
    editableUtils: UseEditableUtilType;
} & Pick<TableProps<T>, 'rowKey' | 'childrenColumnName'>;
/**
 * 转化 columns 到 pro 的格式 主要是 render 方法的自行实现
 *
 * @param columns
 * @param map
 * @param columnEmptyText
 */
export declare function genProColumnToColumn<T>(params: ColumnToColumnParams<T>, parents?: ProColumnGroupType<T, any>): ColumnToColumnReturnType<T>;
export {};
