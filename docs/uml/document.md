# UML技术文档编写规范

# 依赖插件
- VSCode插件：PlantUML
    - 参考文档：https://plantuml.com/
    - 快捷键：Alt+D
- 设置预览服务器
    - 配置文件/.vscode/settings.json
    - MD预览时，设置允许跨域资源访问
``` json
{
    "plantuml.server":"http://www.plantuml.com/plantuml"
}
```

- 预览示例，VSCode可在Ctrl+Shift+V中直接预览

```plantuml
@startuml
工程师 -> 项目经理 : push 代码提交
工程师 <- 项目经理 : review 代码审阅
@enduml
```


# 类图：描述数据范式、接口、对象
- 参考文档：https://plantuml.com/class-diagram
- 相关资料：
    - [UML类图的对应关系](https://zhuanlan.zhihu.com/p/110209045)
    - [五分钟看懂UML类图](https://zhuanlan.zhihu.com/p/85960253)
## 示例：音频FM类图
- [音频FM类图示例：class.puml](./class-audio.puml)

```plantuml
' 音频FM项目类图
@startuml

AudioWork *-- "AudioWork" : chapers包含自身
AudioWork *-- "AudioActor" 
' (AudioWork, User) . AudioActor : 单作品多演员
' (AudioWork, User) . AudioWorkDanmu : 单作品多弹幕
AudioWork *-- "AudioWorkDanmu" : 单作品多弹幕
AudioWork *-- "AudioWorkComment" : 单作品多评论
' AudioWork "many" --* "1" User : 作品的author字段指向用户

' 音频作品
class AudioWork {
    .. 数据字段 ..
    title: String
    cover: String
    .. 权限字段 ..
    ' 是否发布
    isPublished: Boolean
    .. 关联字段 ..
    author: Pointer<User>
    actors: Array<AudioActor>
    chapters: Array<AudioWork>
}

class AudioActor{
    work: Pointer<AudioWork>
    user: Pointer<User>
    role: String
    studio: String
}

class User{
    name: String
    avatar: String
    followCount: Number
}


' 音频弹幕
class AudioWorkDanmu {
    work: Pointer<AudioWork>
    content: String
    user: Pointer<User>
    ' 弹幕时间
    time: Number
    ' 发布时间
    createAt: Date
}

' 音频评论表
class AudioWorkComment {
    work: Pointer<AudioWork>
    user: Pointer<User>
    content: String
    createAt: Date
}


@enduml
```

# 时序图
- [时序图示例：seq.puml](./seq.puml)