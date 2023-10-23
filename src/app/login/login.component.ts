import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user:User= new User();
  constructor(private userservice: LoginService){

  }

  ngOnInit(): void {
      
  }
  userLogin(){
    console.log(this.user)
    this.userservice.login(this.user).subscribe(data=>{
      alert("login Successfully")
    },error=>alert("Sorry Please enter correct UserId and Password"));
    
  }

}
