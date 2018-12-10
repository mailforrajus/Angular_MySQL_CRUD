//import Component
//Component used to create the Building Block Of Angular Application
import { Component } from "@angular/core";
//import fetchService
import { fetchService } from "../services/fetch.service";
//import insertService
import { insertService } from "../services/insert.service";
//import updateService
import { updateService } from "../services/update.service";
//import deleteService
import { deleteService } from "../services/delete.service";
//import HttpErrorResponse
//HttpErrorResponse is used to categorize the Errors
import { HttpErrorResponse } from "@angular/common/http";
//use Component
@Component({
    selector:"crud",
    templateUrl:"./mysql.component.html"
})
//export the class
export class mysqlComponent{
    //declare variable to hold records
    private records:any;
    //declare variable to hold insertStatus
    private insertStatus:any;
    //declare the variable to hold updateStatus
    private updateStatus:any;
    //declare the variable to hold deleteStatus
    private deleteStatus:any;
    //declare the variables to hold the Observables
    private fetchSubScribe:any;
    private insertSubScribe:any;
    private updateSubScribe:any;
    private deleteSubScribe:any;

    //create the instances to Services
    constructor(private _fetch:fetchService,
                private _insert:insertService,
                private _update:updateService,
                private _delete:deleteService){}
    
    //first life cycle hook
    ngOnInit(){
        this.fetchSubScribe = 
                this._fetch.getProducts()
                    .subscribe(this._fetchCallBack,
                               this._errorCallBack);
    };

    //create the _fetchCallBack
    public _fetchCallBack = (res):any=>{
        this.records = res;
    };

    //create the _errorCallBack
    public _errorCallBack = (err:HttpErrorResponse)
                                                :any=>{
        if(err.error instanceof Error){
            console.log("Client Side Error !!!");
        }else{
            console.log("Server Side Error !!!");
        }
    };


    public record:any;
    //create the custom function @insert()
    /*insert() function will execute when ever we 
    click the insert button*/
    public insert(obj:any):any{
        //the argument for the insert() function is obj
        //obj is the JSON Object
        //obj contain @p_id,@p_name,@p_cost
        //send the obj to the service
        this.insertSubScribe = 
                this._insert.saveEmp(obj)
                    .subscribe(this._insertCallBack,
                               this._errorCallBack);
        this.record = obj;
    };
    //create the _insertCallBack
    public _insertCallBack = (res:any):any=>{
        if(res.insert == "success"){
            this.records.push(this.record);
        };
        this.insertStatus = res;
    };
    //implement the update()
    /*update() function will execute when ever 
    we click the update button*/
    public update(obj:any):any{
        //obj is the JSON Object
        //obj contain p_id , p_name & p_cost
        //obj should come from view
        //send the obj to the service
        this.updateSubScribe = 
                this._update.updateEmp(obj)
                    .subscribe(this._updateCallBack,
                               this._errorCallBack);
    };

    //create the _updateCallBack
    public _updateCallBack = (res:any):any=>{
        this.updateStatus = res;
    };

    //implement the remove()
    /*remove() function will execute when ever 
      we click the delete button*/
    public remove(obj:any):any{
        //where obj is the JSON Object
        //obj contain @p_id
        //send the obj to the service
        this.deleteSubScribe = 
                this._delete.deleteEmp(obj)
                    .subscribe(this._deleteCallBack,
                               this._errorCallBack);
    };

    //implement _deleteCallBack
    public _deleteCallBack = (res):any=>{
        this.deleteStatus = res;
    };

    //last life cycle hook
    ngOnDestroy(){
        this.fetchSubScribe.unsubscribe();
        this.insertSubScribe.unsubscribe();
        this.updateSubScribe.unsubscribe();
        this.deleteSubScribe.unsubscribe();
    };
};