import { Injectable } from '@angular/core';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class BanklogicService implements OnInit {
  
  entity:any;

  constructor(private http:HttpClient) { }
  ngOnInit(): void { }

  url="http://localhost:9099/BankDetails/";

  postBankCustomerData(data:any){
    console.log(data)
    return this.http.post(this.url+"saveCustomerData",data,{responseType:'text'as'json'});
  }

  getBankCustomerData(byId:number){

  }
}