
export class Parse{
    _serverURL:string|null = null
    get serverURL(){
        return localStorage.getItem("Parse/serverURL") || this._serverURL;
    }
    set serverURL(v:string|null){
        this._serverURL = v
        if(v) localStorage.setItem("Parse/serverURL",v);
    }

    _applicationId:string|null = null
    get applicationId(){
        return localStorage.getItem("Parse/applicationId") || this._applicationId;
    }
    set applicationId(v:string|null){
        this._applicationId = v
        if(v) localStorage.setItem("Parse/applicationId",v);
    }

    initialize(data:{
        serverURL:string,applicationId:string
    }){
        this.serverURL = data.serverURL
        this.applicationId = data.applicationId
    }
}