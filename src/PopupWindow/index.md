---
toc: content
---

## PopupWindow

`PopupWindow`在`antd`的`Modal,Drawer`组件基础上进行了一层封装，API保持一致性, 移除footer相关属性。

:::info{title=Tips} 
如需事件操作, 推荐使用新增的[Submitter](/components/submitter)参数 
结合[Popups](/components/popups)组件使用, 自动实现状态维护以及多个Popup模块间交互(唤起, 数据传递)
:::

### 代码演示

<code src="./demos/base.tsx" title="基本使用" background="#f6f7f9"></code>

<code src="../Popups/demos/form.tsx" title="Popups+PopupWindow+Submitter组合使用" ></code>

### API

这里只列出扩展 api,
其余属性请移步Ant-Design [Modal](https://ant-design.gitee.io/components/modal-cn/#API)、[Drawer](https://ant-design.gitee.io/components/drawer-cn/#API)

| 参数    | 说明     | 类型               | 默认值  |
| ------- | -------- | ------------------ | ------- |
| mode    | 窗口类型 | `modal` \| `drawer` | `modal` |
| onClose | 关闭回调 | `() => void`       | - |
| visible | 显示隐藏 | `boolean`       | - |
| bordered | 显示边框 | `boolean`       | - |
| submitter | Submitter实例透传 | `SubmitterProps`       | - |
