---
toc: content
---

## Submitter

针对按钮操作进行一层封装, 提供事件预设行为, 省却繁琐的状态维护, 专注业务层开发(API请求, 逻辑判断)。

## Examples

<code src="./demos/base.tsx" title="基本使用" background="#f6f7f9"></code>

<code src="./demos/form.tsx" title="结合Form表单使用" background="#f6f7f9"></code>

## API

| 参数    | 说明     | 类型               | 默认值  |
| ------- | -------- | ------------------ | ------- |
| onCancel    | 取消按钮回调 | `() => void` | - |
| onBefore | 提交前回调 | `() => void`  | - |
| onFinish | 提交回调 | `<V = any> (values?: V) => any`       | - |
| onFinished | 提交成功后回调 | `<V = any> (values?: V) => void`       | - |
| onFinishFailed | 提交失败后回调 | `(error: Error) => void`       | - |
| render | 自定义渲染内容 | `({cancelDom, okDom}, onCancel, onFinish) => JSX.Element`       | - |
| form | AntForm组件实例 | `FormInstance<any>`       | - |
| confirmText | 提交按钮文本 | `string`       | 确定 |
| cancelText | 取消按钮文本 | `string`       | 取消 |
| style | 样式 | `CSSProperties`       | - |

## FAQ
1. Submitter接受到Form参数, 默认会初始化Form的数据, 提交前校验数据, 提交时返回数据, 关闭时清空数据
