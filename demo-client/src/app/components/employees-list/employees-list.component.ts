import { Component, OnInit } from '@angular/core';
import { Employee } from '../../model/employee';
import { EmployeesService } from '../../services/employees.service';
import { NzModalService } from 'ng-zorro-antd/modal';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-list',
  templateUrl: './employees-list.component.html',
  styleUrls: ['./employees-list.component.css']
})
export class EmployeesListComponent implements OnInit {

  listOfData: Employee[];

  constructor(
    private employeesService: EmployeesService,
    private modal: NzModalService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDate();
  }

  getDate(): void {
    this.employeesService.getEmployeesList().subscribe(res => {
      let list = [];
      for (let iterator of res.list) {
        iterator = JSON.parse(iterator);
        list.push(iterator);
      }
      this.listOfData = list;
    });
  }

  public delete(employeeId: number): void {
    this.modal.confirm({
      nzTitle: 'Are you sure delete this employee ?',
      nzOkText: 'Yes',
      nzOkType: 'primary',
      nzOkDanger: true,
      nzOnOk: () => { this.confirmDelete(employeeId) },
      nzCancelText: 'No',
    });
  }

  public update(employeeId: number): void {
    this.router.navigate(['/employees-insertupdate', { id: employeeId }]);
  }

  private confirmDelete(employeeId: number): void {
    this.employeesService.deleteEmployee(employeeId).subscribe(res => {
      if (res) {
        this.getDate();
      }
    });
  }

}
