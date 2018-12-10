import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class insertService{
    constructor(private _http:HttpClient){};
    public saveEmp(obj:any):any{
        //where "saveEmp" is the custom function
        //the argument for saveEmp() function is obj
        //obj is the JSON Object
        //obj contain p_id , p_name & p_cost
        //obj should come from component throgh Dependency Injection
        //send the obj to the service
        return this._http.post("http://localhost:8080/insert",obj);
    };
};