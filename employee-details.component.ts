import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {
    employeeFound : Observable<Employee>;
    empId : number;
  constructor(private _employeeservice : EmployeeService) { 
    this.empId = parseInt(localStorage.getItem("empId"));
    this.employeeFound = this._employeeservice.searchEmployee(this.empId);
  }

  ngOnInit(): void {
  }

}
                           