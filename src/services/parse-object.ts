import { Parse } from "./parse"
export class ParseObject extends Parse{
    className:string = ""
    data:any = {}

    async destory(objectId:string){
        let url = this.serverURL + "/classes/" + this.className + "/" + objectId
        let response = await fetch(url, {
            "credentials": "omit",
            "headers": {
            },
            "body":this.data,
            "method": "DELETE",
            "mode": "cors"
        });
        if(response.status==200){
            return await response.text()
        }else{
            return null
        }
    }
    async save(){
        let url = this.serverURL + "/classes/" + this.className
        let response = await fetch(url, {
            "credentials": "omit",
            "headers": {
            },
            "body":this.data,
            "method": "POST",
            "mode": "cors"
        });
        if(response.status==200){
            return await response.text()
        }else{
            return null
        }
    }
    async get(objectId:string){
        let url = this.serverURL + "/classes/" + this.className + "/" + objectId
        let response = await fetch(url, {
            "credentials": "omit",
            "headers": {
            },
            "body":this.data,
            "method": "GET",
            "mode": "cors"
        });
        if(response.status==200){
            return await response.json()
        }else{
            return null
        }
    }
}