import { Component, OnInit } from '@angular/core';
import { Leave } from '../leave';
import { Observable } from 'rxjs';
import { LeaveService } from '../leave.service';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pending',
  templateUrl: './pending.component.html',
  styleUrls: ['./pending.component.css']
})
export class PendingComponent implements OnInit {
  empId : number;
  leaveStatus : string;
  Pend : Observable<Leave[]>;
  emp : Observable<Employee[]>;
 
  constructor(private _leaveservice : LeaveService, private _employeeservice : EmployeeService,
               private _router : Router) { 
  this.empId = parseInt(localStorage.getItem("empId"));
  this.leaveStatus = localStorage.getItem("leaveStatus");
  this.Pend = this._leaveservice.Pendingleave(this.empId, this.leaveStatus) ;
  this.emp = this._employeeservice.showEmployee();
}
  setClickrow(leaveId,empId) {
    localStorage.setItem("aplid",leaveId);
    localStorage.setItem("apeid",empId);
    this._router.navigate(['/Appdeny'])

  }


  ngOnInit(): void {
  }

}
