import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
@Injectable()
export class fetchService{
    constructor(private _http:HttpClient){}
    public getProducts():any{
        return this._http.get("http://localhost:8080/fetch");
    };
};