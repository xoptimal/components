---
toc: content
---

## StepTabs

Ant Steps + Tabs + Submitter 组合组件, 解决提交是Step部署形式, 编辑是Tab形式的业务场景

## Examples

<code src="./demos/base.tsx" title="基本使用"></code>
<code src="./demos/window.tsx" title="结合PopupWindow使用"></code>
<code src="./demos/popups.tsx" title="结合表格 + Popups实现添加+编辑功能"></code>

## API

| 参数    | 说明                 | 类型                                                    | 默认值  |
| ------- |--------------------|-------------------------------------------------------| ------- |
| items | 内容                 | [StepTabItem[]](#steptabitem)                         | - |
| initialValues | 初始化数据(透传到每个Tab)    | `object`                                              | - |
| type | 类型                 | `steps` \| `line` \| `card`       | `line` |
| position | 方向                 | `top` \| `bottom` \| `left` \| `right`    | `top` |
| bodyStyle | 自定义内容样式            | `CSSProperties`                                       | - |
| activeKey | 当前展示Tab.Key        | `string`                                              | - |
| fault | 是否断层(仅type=Step有效) | `boolean`                                             | `false` |
| bordered | 是否显示边框             | `boolean`                                             | `false` |
| onChange | 页面切换回调             | `(from: string, to: string) => void`                  | - |
| render | 自定义布局              | `(dom: ReactNode, submitter: ReactNode) => JSX.Element` | - |
| submitter | 事件处理               | [StepTabSubmitterProps](#steptabsubmitterprops)                            | - |
| stepsProps | `Ant.Step`实例透传     | `StepsProps`                                          | - |
| tabsProps | `Ant.Tabs`实例透传     | `TabsProps`                                           | - |


### StepTabItem

| 参数    | 说明     | 类型               | 默认值  |
| ------- | -------- | ------------------ | ------- |
| key |  唯一标识 | `string`       | - |
| children | 内容 | `ReactNode`       | - |
| title | 标题 | `ReactNode`       | - |
| stepProps | Steps.Step实例透传 | `StepProps`       | - |


### StepTabSubmitterProps
这里只列举新增字段, 其余请移步至[SubmitterProps](/components/submitter#api)查看
| 参数    | 说明     | 类型               | 默认值  |
| ------- | -------- | ------------------ | ------- |
| prevText    | 上一步文本 | `string` | 上一步 |
| nextText    | 下一步文本 | `string` | 下一步 |
| onCancel    | 取消回调 | `(key: string) => void` | - |
| onBefore    | 提交前回调 | `(key: string) => void` | - |
| onFinish | 提交回调 | `<V = any> (values: V, key: string) => any`       | - |
| onFinished | 提交成功回调 | `<V = any> (values: V, key: string) => void`       | - |
| onFinishFailed | 提交失败回调 | `(error: Error, key: string) => void`       | - |

### useStepTab

`StepTabs.children`内部使用Hook, 用于获取当前 StepTabs数据

| 参数    | 说明             | 类型       | 默认值  |
| ------- |----------------|----------| ------- |
| values | StepTabs提交数据汇总 | `any`    | - |
| initialValues | StepTabs初始化数据  | `any` | - |


## FAQ
1. 在Step模式下, submitter事件(before -> finish -> finished)只会在最后一个步骤完成后冒泡顶层事件(StepTabs.Submitter声明事件)
