import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {



  constructor(private _router : Router) { 
    this.userName = localStorage.getItem("empId");
  }
  userName : string;
  passWord : string;
  validateMe()
  {
    if(this.passWord == "Janani") {
      this._router.navigate(['/Dashboard']);
    }
    else {
      alert("Invalid");
    }
  }
  
    
  
  ngOnInit(): void {
  }
}