import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterPageComponent } from './register-page/register-page.component';
import { BankStructureComponent } from './bank-structure/bank-structure.component';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './login-page/login-page.component';

const routes: Routes = [
  {path: 'signup',component:RegisterPageComponent},
  {path: 'bankstructure',component:BankStructureComponent},
  {path: 'login',component:LoginPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),
    CommonModule,
  ],
  exports: [RouterModule],
  declarations:[]
})
export class AppRoutingModule { }

export const routingComponent = [RegisterPageComponent,BankStructureComponent,LoginPageComponent]