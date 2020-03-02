import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { Observable } from 'rxjs';
import { Leave } from '../leave';
import { LeaveService } from '../leave.service';
import { Router } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-appdeny',
  templateUrl: './appdeny.component.html',
  styleUrls: ['./appdeny.component.css']
})
export class AppdenyComponent implements OnInit {
  employee = new Employee();
  leave = new Leave();
  employeeFound : Observable<Employee>;
  leaveFound : Observable<Leave>
  empFound : Employee;
  mgrId : number;
  empName : string;
  values : number;
  result : string;
  constructor(private leaveService : LeaveService, private _route : Router, private _employService : EmployeeService ) {
    this.employee.empId = parseInt(localStorage.getItem("apeid"));
    this.employeeFound = this._employService.searchEmployee(this.employee.empId);
    this.leave.leaveId = parseInt(localStorage.getItem("aplid"));
    this.leaveFound = this.leaveService.searchByLeaveId(this.leave.leaveId);
}

approveLeave() {
  this.mgrId = parseInt(localStorage.getItem("empId"));
  alert(this.mgrId);
  alert(this.leave.leaveId);
  alert(this.leave.managerComment);
  this.leave.leaveId = parseInt(localStorage.getItem("aplid"));
  this.values = 1;
  this.leaveService.approveDeny(this.mgrId, this.leave.leaveId, this.leave.managerComment, this.values).subscribe(x =>{
    this.result = x;
  }) 
setTimeout(() => {
  this._route.navigate(['/dashboard'])
}
, 5000);
}
denyLeave() {
  this.mgrId = parseInt(localStorage.getItem("empId"));
  alert(this.mgrId);
  alert(this.leave.leaveId);
  alert(this.leave.managerComment);
  this.leave.leaveId = parseInt(localStorage.getItem("aplid"));
  this.values = 2;
  this.leaveService.approveDeny(this.mgrId, this.leave.leaveId, this.leave.managerComment, this.values). subscribe(x => {
    this.result = x;
  })
  setTimeout(() => {
    this._route.navigate(['/dashboard'])

  }
  , 5000);
}

  ngOnInit(): void {
  }

}
