# 技术文档及注释规范

- 项目文档 https://compodoc.app/
- 编写规范 https://tsdoc.org/

# compodoc
- 参考文档：https://compodoc.app/guides/getting-started.html

## 基本用法
安装依赖：
``` sh
# 安装依赖
# npm install -g @compodoc/compodoc
# npm install -D @compodoc/compodoc
```

生成主项目文档：
``` sh
# 创建配置文件 /tsconfig.doc.json
# 内容如下：
{
    "include": ["src/**/*.ts"]
}

# 生成文档（主项目）
# -s 启动预览
# -w 实时刷新
# --language zh-CN 设置默认中文
compodoc -d dist/docs -p tsconfig.doc.json -s -w --language zh-CN

```

生成子项目文档：
``` sh
# 创建配置文件 /projects/admin-gametap/tsconfig.doc.json
# 内容如下：
{
    "include": ["src/**/*.ts"]
}
# 生成文档（子项目）
compodoc -d dist/docs-admin-gametap -p projects/admin-gametap/tsconfig.doc.json -s -w --language zh-CN
```

文档测试：生成覆盖率
``` sh
# https://compodoc.app/guides/documentation-coverage.html
compodoc -d dist/docs -p tsconfig.doc.json --coverageTest
compodoc -d dist/docs-admin-gametap -p projects/admin-gametap/tsconfig.doc.json --coverageTest
```

访问地址：
http://127.0.0.1:8080/index.html


## 注释规范
- 参考文档：https://compodoc.app/guides/jsdoc-tags.html

### class类标记
- @deprecated Deprecated description 表示该类已废弃

``` js
/**
 * This is my class
 * @deprecated This class is deprecated
 */
class TestPageComponent {}
```
### function函数标记
- @param {Type} Name Description
- @returns 返回值

``` js
/**
 * @param {string} className  数据后端对应的Schema表名
 * @param {string} objectId  数据对象的唯一识别ID
 * @returns 获得数据结果的json对象或null空值
 */
async function getDataById(className,objectId):any|null{
    if(className && objectId){
      let response = await fetch(`http://metapunk.cn:9999/parse/classes/${className}/${objectId}?`, {
        "headers": {
          "x-parse-application-id": "dev"
        },
        "body": null,
        "method": "GET",
        "mode": "cors",
        "credentials": "omit"
      });
      let data = await response.json();
      if(data?.objectId){
        return data;
      }
    }
    return null
  }
```

### 变量标记
- @type 已弃用，直接使用ts强类型定义即可
- 变量可用的标记
    - 注释内直接写描述
    - @example加具体的使用文档

``` js
  /**
   * 指针指向后端数据的Schema表名
   * @type string
   * @example
   * <nova-edit-pointer [className]="'GameComment'">
   */
  @Input("className")
  className!:string
```

### 泛类型标记

### 文档标记
- @link 引用标记

``` js
//for an 内部引用（属性名、方法名、类名）

{@link Todo}
[Todo]{@link Todo}
{@link Todo|TodoClass}

Anchors are supported : [Todo]{@link Todo#myproperty}

//for an 外部链接

[Google]{@link http://www.fmode.cn}
{@link http://www.fmode.cn|未来飞马}
{@link https://github.com GitHub}
```

- Markdown支持，可直接使用markdown/html格式编写描述
    - 示例：使用\-无序列表
    - 示例：使用<br>换行

``` js
  /**
   * 获取相关数据列表<br>
   * - 相关属性：{@link className}
   * - 相关属性：{@link searchCol}
   * - 相关属性：{@link searchText}
   * @returns 获取相关数据列表并赋值给this.list
   */
  async getDataList(){}
```

- @example 示例文档
``` js
  /**
   * 该指针查询时对应的Schema表列字段，搭配className使用
   * @type string
   * @example
   * <!-- 编辑用户_User的指针数据，且根据nickname昵称搜索 -->
   * <nova-edit-pointer [className]="'_User" [searchCol]="'nickname'">
   */
  @Input("searchCol")
  searchCol!:string
```

### 其他标记
- @ignore 忽略，不显示在文档中

``` js
/**
 * Footer component
 */
@Component({
    selector: 'the-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
    /**
     * @ignore
     */
    ignoredProperty: string;

    /**
     * @ignore
     */
    @Input() ignoredInput: string;

    /**
     * @ignore
     */
    @Output() ignoredOutput;

    /**
     * @ignore
     */
    ignoredFunction() {}
}
```

# tsdoc

