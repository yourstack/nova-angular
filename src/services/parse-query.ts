import { Parse } from "./parse"
export class ParseQuery extends Parse{
    className:string = ""
    data:any = {}

    _where:string|null = null
    _containsQuery:string|null = null
    _limitQuery:string|null = null
    limit(limit:number){
        this._limitQuery = `limit=${limit}`
    }
    contains(key:string,value:string){
        this._containsQuery = `where={"${key}":{"$regex":"^${value}"}}`
    }
    async find(){
        let path = "/classes/" + this.className + "?"
        let queryParams = ""
        if(this._limitQuery){
            queryParams += this._limitQuery
        }
        if(this._containsQuery){
            queryParams += this._containsQuery
        }

        let url = this.serverURL + path + (queryParams);
        let response = await fetch(url, {
            "credentials": "omit",
            "headers": {
                "X-Parse-Application-Id":this.applicationId||""
            },
            "method": "GET",
            "mode": "cors"
        });
        if(response.status==200){
            console.log(response.json())
            return await response.json()
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