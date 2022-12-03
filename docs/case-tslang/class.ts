// 类:面向对象,对常用数据及方法的整合
// 将现实场景中具体的数据实例的特征以及通用属性以及常用方法,通过代码逻辑表现出来

let StudentListArray =  [
    {name:"Xiao Ming",age:18,gender:"male"},
    {name:"Xiao Wang",age:18,gender:"male"},
    {name:"Xiao Li",age:18,gender:"female"}
]

// 十年后,所有的学生年龄增加了10

StudentListArray.forEach(student=>student.age+=10);

for(let index=0;index<StudentListArray.length;index++){
    StudentListArray[index].age += 10
}

console.log(StudentListArray);

// 重新定义学生的类,增加年龄
class Student{
    name:string | undefined
    age:number | undefined
    gender:"male"|"female" | undefined

    // 早晨到校时间及是否迟到
    // Date官方文档:https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Date
    signAt:Date|undefined
    isLate:boolean|undefined
    constructor(name:string){
        this.name = name
    }
    checkLate(){
        // hour超过9点算迟到
        if(this.signAt){
            let hour = this.signAt.getHours() - 8;
            console.log(hour)
            if(hour>=9){
                this.isLate = true
            }else{
                this.isLate = false
            }
        }else{
            this.isLate = true
        }
    }
    setAge(age:number){
        this.age = age
    }
    growUp(year:number){
        if(this.age){
            this.age += year
        }
    }
}

let ClassOne:Array<Student> = []

let xiaoming = new Student("Xiao Ming");
xiaoming.setAge(18)
xiaoming.signAt = new Date('2022-12-03T16:50:00')
// xiaoming.growUp(11)
ClassOne.push(xiaoming)

let xiaowang = new Student("Xiao Wang");
xiaowang.setAge(19)
xiaowang.signAt = new Date('2022-12-03T17:00:01')
ClassOne.push(xiaowang)

let xiaoli = new Student("Xiao Li");
xiaoli.setAge(17);
xiaoli.signAt = new Date('2022-12-03T15:00:00')

ClassOne.push(xiaoli);

ClassOne.forEach((student)=>{
    student.growUp(7)
    student.checkLate();
})

console.log(ClassOne);