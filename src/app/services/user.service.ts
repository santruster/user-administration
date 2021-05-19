import { Injectable } from "@angular/core";
import { User } from "../models/user.model";
import { HttpClient } from "@angular/common/http";
import { Request, RequestAction, RequestUsers } from "../models/request.model";
import { ToastrService } from "ngx-toastr";

@Injectable({
  providedIn: "root"
})
export class UserService {
  private Url = "http://190.210.222.36:8085//web/pdo/DemoWS/demo/obtenerUsuarios ";
  private Url2 = "http://190.210.222.36:8085//web/pdo/DemoWS/demo/gestionarUsuarios";
  requestFormUsers:RequestUsers={};
  requestFormAction:RequestAction={};
  requestForm:Request={};
  
  constructor(private http: HttpClient,
    private toastr: ToastrService) {}

  public getUser():any {
    return this.http.put(this.Url, "");    
  }

  public createUser(user):any {  
    this.createRequest(user);
    this.requestForm.request.pcaccion="create";   
    
    return this.http.put(this.Url2, JSON.parse(JSON.stringify(this.requestForm))).subscribe((msg:any)=>{
      if (msg.response.pcErr){
        console.log(msg.response.pcErr)
        this.toastr.error('Ocurrio un error')
      }  
      else
        this.toastr.success('Se creo correctamente');});    
  }

  public deleteUser(user):any {
    this.createRequest(user);
    this.requestForm.request.pcaccion="delete";
    
    return this.http.put(this.Url2, JSON.parse(JSON.stringify(this.requestForm))).subscribe((msg:any)=>{
      if (msg.response.pcErr)
        console.log(msg.response.pcErr)});        
  }

  public editUser(user):any {    
    this.createRequest(user);
    this.requestForm.request.pcaccion="update";
    
    return this.http.put(this.Url2, JSON.parse(JSON.stringify(this.requestForm))).subscribe((msg:any)=>{
      if (msg.response.pcErr){
        console.log(msg.response.pcErr)
        this.toastr.error('Ocurrio un error')
      }  
      else
        this.toastr.success('Se edito correctamente');
      });        
  }

  public createRequest(user){
    let users:User[]=[]  
    users.push(user)
    this.requestFormUsers.ttusuarios=users;
    this.requestFormAction.dsUsuariosDemo=this.requestFormUsers;    
    this.requestForm.request=this.requestFormAction
  }
}