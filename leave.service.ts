import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs';
import 'rxjs/add/operator/map';
import { map } from 'rxjs-compat/operator/map';
import { Leave } from './leave';
@Injectable({
  providedIn: 'root'
})
export class LeaveService {

  constructor(private _http : Http) { }
  Pendingleave(empId : number, leaveStatus : string) : Observable<Leave[]> {
    return this._http.get("http://localhost:8080/MLP185-0.0.1-SNAPSHOT/api/leaves/pending/"+empId+"/P").
    map((res : Response) => res.json());
}

  searchByLeaveId(leaveId : number) : Observable<Leave> {
    return this._http.get("http://localhost:8080/MLP185-0.0.1-SNAPSHOT/api/leaves/listByLeaveId/"+leaveId).
    map((res : Response) => res.json());
}

  approveDeny(empId : number, leaveId : number, managerComment : string, values : number) {
    return this._http.get("http://localhost:8080/MLP185-0.0.1-SNAPSHOT/api/leaves/approveDeny/" +leaveId +"/"+empId +"/" +values).
    map((res : Response) => res.text());
  }
}
