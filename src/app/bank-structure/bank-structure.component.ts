import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-bank-structure',
  templateUrl: './bank-structure.component.html',
  styleUrls: ['./bank-structure.component.css']
})
export class BankStructureComponent implements OnInit {

  flag:boolean;     // declaration of flag for signup&register
  linkage: boolean; //declaration for login
  
  callSignUp(){
    this.router.navigate(['signup'])
    this.flag=false;
  }

  loginclick(){
    this.router.navigate(['login'])
    this.linkage=false;

  }

  constructor(private router:Router) {
    this.flag=true;
    this.linkage=true;
   }

  ngOnInit(): void {
  }

}
