//  TS基本类型：https://www.tslang.cn/docs/handbook/basic-types.html


let x:number = 1;
let y:number = 2;

let student:string = "Xiao Ming";

// 数组类型两种定义方式
let studentList1:Array<string> = ["Xiao Ming","Xiao Wang", "Xiao Li"];
let studentList2:string[] = ["Xiao Ming","Xiao Wang", "Xiao Li"];

let isLate:boolean = false;

let u: undefined = undefined;
let n: null = null;

console.log(x+y)
console.log(student)


let studentListAdvance1:{
    name: string;
    age: number;
    gender: string;
}[]

let studentListAdvance2:Array<{
    name: string;
    age: number;
    gender: string;
}>

studentListAdvance1 = [
    {name:"Xiao Ming",age:18,gender:"male"},
    {name:"Xiao Wang",age:18,gender:"male"},
    {name:"Xiao Li",age:18,gender:"female"}
]

// TS接口(实现复杂类型,自定义对象类型的方式) https://www.tslang.cn/docs/handbook/interfaces.html
interface StudentInter{
    name:string
    age:number
    gender:"male"|"female"
}
let studentList:Array<StudentInter>
studentList = [
    {name:"Xiao Ming",age:18,gender:"male"},
    {name:"Xiao Wang",age:18,gender:"male"},
    {name:"Xiao Li",age:18,gender:"female"}
]