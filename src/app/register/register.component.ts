import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  rForm: FormGroup;
  post : any;
  name:string = '';
  age:number = 0;
  marital:string = '';
  phNb:number = 0;
  emailId:string = '';
  password:string = '';
  cnfpassword:string = '';
  interests:string='';
  alertMsg:string = '*This Field is Required';

  constructor(private formBuilder: FormBuilder) {
    this.rForm = formBuilder.group({
      'name': [null, Validators.required],
      'age' : [null, Validators.required],
      'marital' : [null, Validators.required],
      'phNb' : [null, Validators.compose([Validators.required , Validators.minLength(10), Validators.maxLength(10)])],
      'emailId' : [null, Validators.required],
      'password' : [null, Validators.required],
      'cnfpassword' : [null, Validators.required],
      'interests' : [null, Validators.required]
    })
   }

   onRegister(post){
     this.name = post.name;
     this.age = post.age;
     this.marital = post.marital;
     this.phNb = post.phNb;
     this.emailId = post.emailId;
     this.password = post.password;
     this.cnfpassword = post.cnfpassword;
   }
  ngOnInit() {
  }

}
