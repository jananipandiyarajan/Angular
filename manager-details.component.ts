import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-manager-details',
  templateUrl: './manager-details.component.html',
  styleUrls: ['./manager-details.component.css']
})
export class ManagerDetailsComponent implements OnInit {
  managerFound : Observable<Employee>;
  mgrId : number;
  constructor(private _employeeservice : EmployeeService) { 
  this.mgrId = parseInt(localStorage.getItem("mgrId"));
  this.managerFound = this._employeeservice.searchEmployee(this.mgrId);
}
  ngOnInit(): void {
  }

}
