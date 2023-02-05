---
toc: content
---

## Popups

用于维护`items.children`窗口间交互(唤起, 数据传递), 状态(显示/隐藏), `children`通过[usePopup(Hooks)](#usepopup)获取当前窗口状态(数据,显示状态等)。

:::info{title=Tips}
结合`PopupWindow`组件使用更佳, 内部自实现与Popups关联, 直接声明即可, 无需维护状态
:::

## Examples

<code src="./demos/base.tsx" title="基本使用" description="通过声明Popups, 用Popup包裹, 即可完成状态自动托管, 专心完成业务组件开发" background="#f6f7f9"></code>

<code src="./demos/window.tsx" title="结合PopupWindow演示" background="#f6f7f9"></code>

<code src="./demos/form.tsx" title="结合Form表单完成添加, 编辑功能演示"  ></code>

## API

| 参数         | 说明                          | 类型                                        | 默认值 |
|------------|-----------------------------|-------------------------------------------|-----|
| ref        | 必填字段, Popups 实例             | `PopupsRef`                               | -   |
| items      | Popups内容                    | `{key: string, children: ReactNode}[]`    | -   |
| onChange   | 调用 open,close 时触发           | `(key: string, visible: boolean) => void` | -   |
| onFinished | 用于完成事件后回调, 例如提交表单完成通知列表刷新 | `(key: string, response?: any) => void`   | -   |

### PopupsRef

Popups 实例对象, 暴露以下方法

| 参数  | 说明                | 类型                                                    | 默认值  |
| ----- | ------------------- |-------------------------------------------------------| ------- |
| open  | 唤起某个 Popup | `(key: string, initValues: any, opts?: any) => void)` | -       |
| close | 关闭某个 Popup | `(key: string) => void`                               | `false` |


### usePopup

Popup 内部使用`Hook`, 用于获取当前 Popup 关联数据和 Popup 间交互

| 属性            | 说明                    | 类型                                                    | 默认值     |
|---------------|-----------------------|-------------------------------------------------------|---------|
| initialValues | open方法透传数据            | `any`                                                 | -       |
| opts          | open方法透传额外内容                  | `any`                                                 | -       |
| visible       | 当前状态(显示/隐藏)           | `boolean`                                             | `false` |
| open          | 唤起某个 Popup            | `(key: string, initValues: any, opts?: any) => void)` | -       |
| close         | 触发关闭事件                | `() => void`                                          | -       |
| finished    | 透传Popups的onFinished 事件 | `(response?: unknown) => void`                        | -       |


## FAQ
1. 使用PopupWindow如果有遮挡的情况, 请使用zIndex属性配置权重解决
2. Popup内部使用Submitter组件, 默认自动关联usePopup事件, 如不需要, 请在Submitter下自行重写即可
