# Directive:属性选择器的精准控制

# 指令的定义及类型
指令的定义：
- 通过在标签上增加属性，传递给指令构造块，通过其HTMLElement/ElementRef对象对该标签进行精准控制

指令的类型：
- 结构型指令
    - *ngIf
    - *ngFor
    - *ngSwitch
- 属性型指令
    - 如下文示例中的highlight指令

# 创建第一个指令
- 指令名称：highlight
- 指令类型：属性型指令
- 示例代码：[projects/lib-nova/src/lib/directives/highlight.directive.ts](../../projects/lib-nova/src/lib/directives/highlight.directive.ts)