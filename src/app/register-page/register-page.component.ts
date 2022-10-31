import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BanklogicService } from '../banklogic.service';
import { Entity } from '../entity';
import { FormBuilder, FormGroup} from "@angular/forms";


@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})

export class RegisterPageComponent implements OnInit {

  entity:any;
  submitted = false;
  pAadhaarCard:any;
  pemailId:any;
  pMobileNumber:any;
  pUserName:any;
  pPanCard:any;


  form: FormGroup;
  passWord:any;
  confirmPassWord:any;
  panCardNo:any;
  aadhaarCardNumber:any;
  mobileNumber:any;
  emailId:any;
  userName:any;


  constructor(private service:BanklogicService, private router:Router,private fb:FormBuilder) { }
  
  ngOnInit(){

   }

  addCustomer(){

    this.objectCreated(this.aadhaarCardNumber,this.emailId,this.mobileNumber,this.panCardNo,this.userName,this.passWord,this.confirmPassWord);
    console.log(this.entity)
    this.service.postBankCustomerData(this.form.value).subscribe(data =>
      this.entity = data      
      )
    console.log(this.entity);
    }
            


  objectCreated(aadhaarCardNumber:string,emailId:string,mobileNumber:number,panCardNo:string,userName:string,passWord:string,confirmPassWord:string){

    this.form = this.fb.group({
      aadhaarCardNumber:[`${aadhaarCardNumber}`],
      emailId: [`${emailId}`],
      mobileNumber: [`${mobileNumber}`],
      panCardNo: [`${panCardNo}`],
      userName: [`${userName}`],
      passWord: [`${passWord}`],
      confirmPassWord: [`${confirmPassWord}`],

    })
  console.log(this.form.value)
  }

  cancel(){
    
  }

  onSubmit(){
    this.submitted = true;
    this.addCustomer;
  }

  gotoList(){
    this.router.navigate(['signup/Register']);
  }

}






// pAccountNumber:any;
// pAadhaarCard:any;
// pMobileNumber:any;
// pemailId:any;
// pUserName:any;
// pPanCard:any;
// entity:any;
// form: FormGroup;



// this.objectCreated(this.pAadhaarCard,this.pMobileNumber,this.pUserName,this.pPanCard,this.pemailId);
// console.log(this.pAadhaarCard)
// this.service.postBankCustomerData(this.form.value)

  // this.form = this.fb.group({
    //   aadhaarCardNumber:[`${pAadhaarCard}`],
    //   mobileNumber:[`${pMobileNumber}`],
    //   emailId:[`${pemailId}`],
    //   userName:[`${pUserName}`],
    //   panCardNo:[`${this.pPanCard}`]
    // });