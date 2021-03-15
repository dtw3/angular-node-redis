import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employees-insertupdate',
  templateUrl: './employees-insertupdate.component.html',
  styleUrls: ['./employees-insertupdate.component.css']
})
export class EmployeesInsertupdateComponent implements OnInit {

  btnText: string;
  profileForm = this.fb.group({
    employeeId: ['', Validators.required],
    name: ['', Validators.required],
    age: ['', Validators.required],
    address: [''],
    tel: ['', Validators.required],
    email: ['', Validators.required],
  });

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private employeesService: EmployeesService,
    private router: Router
  ) { }

  get employeeId() { return this.profileForm.get('employeeId'); }
  get name() { return this.profileForm.get('name'); }
  get age() { return this.profileForm.get('age'); }
  get tel() { return this.profileForm.get('tel'); }
  get email() { return this.profileForm.get('email'); }

  ngOnInit(): void {
    let id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.btnText = 'Update';
      this.profileForm.controls['employeeId'].disable();
      this.employeesService.getEmployeeById(Number(id)).subscribe(res => {
        if (res.resultType) {
          const employee = JSON.parse(res.employee);
          this.profileForm.patchValue(employee);
        }
      });
    } else {
      this.btnText = 'Add';
    }
  }

  onSubmit() {
    this.profileForm.controls['employeeId'].enable();
    this.employeesService.updateInsertEmployee(this.profileForm.value).subscribe(res => {
      if (res) {
        this.router.navigate(['/employees-list']);
      }
    });
  }

}
