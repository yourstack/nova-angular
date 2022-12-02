describe('BVideo Page home test', () => {
    it('Visits the BVideo Module home page', () => {
    
        // 访问指令：https://docs.cypress.io/api/commands/visit
        // 访问指定路由
        cy.visit('/bvideo/home')
        // 视口指令：https://docs.cypress.io/api/commands/viewport
        // 设置视口大小/朝向
        cy.viewport("iphone-xr","portrait") // 默认iphone-xr手机界面，竖屏

        // 获取指令：https://docs.cypress.io/api/commands/get
        // 根据选择器获取元素或元素列表
        // 滚动指令：https://docs.cypress.io/api/commands/scrollto
        // 模拟触发屏幕滚动事件
        cy.get('.nav').first().scrollTo(200,0);
        cy.get('.nav').first().scrollTo(1000,0);

        // DOM包含内容检测：https://docs.cypress.io/api/commands/contains#Syntax
        // 模拟触发事件：查询包含娱乐字符的.navspan导航标签，并模拟点击事件
        // 点击指令：https://docs.cypress.io/api/commands/click
        cy.get('.nav',{timeout:1000}).find(".navspan").contains("娱乐")
        .click({ multiple: true });
        // 检测事件效果：点击后娱乐标签，应该具有navspan-active属性
        // 创建假设：https://docs.cypress.io/api/commands/should
        cy.get('.nav',{timeout:1000}).find(".navspan").contains("娱乐")
        .should("have.class","navspan-active")

        cy.scrollTo(0,600) // x-0 y-600

        // 页面内容检测：至少有2个以上视频卡片
        // 假设文档：https://docs.cypress.io/guides/references/assertions#Chai
        cy.get(".vlist").should(vlistEl=>{
            expect(vlistEl.children().length).to.be.greaterThan(2)
        })
    })
  })
  