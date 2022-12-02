# 端对端测试：模拟真实用户场景

通过模拟真实的用户场景，验证被测系统及其组件的集成性和数据完整性，从最终用户的体验进行测试。

选用目前先进的前端端对端测试框架：Cypress


端对端测试示例：
- cypress\e2e\bvideo.cy.ts

编写规则详解：
- 浏览行为
    - 访问路由 https://docs.cypress.io/api/commands/visit
    - 获取元素 https://docs.cypress.io/api/commands/get
    - ...
- 事件模拟
    - 点击事件 https://docs.cypress.io/api/commands/click
    - 滚动事件 https://docs.cypress.io/api/commands/scrollTo
    - ...
- 假设检测
    - 创建假设 https://docs.cypress.io/api/commands/should
    - 假设判断 https://docs.cypress.io/guides/references/assertions#Chai
    - ...