import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BanklogicService } from '../banklogic.service';
import { FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

username : string ="";
password : string ="";
show: boolean= false;

submit(){
console.log("user name is " + this.username)
this.clear();
}

clear(){
this.username ="";
this.password = "";
this.show = true;
}

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  gotoLogin(){
    this.router.navigate(['login']);
  }

}
