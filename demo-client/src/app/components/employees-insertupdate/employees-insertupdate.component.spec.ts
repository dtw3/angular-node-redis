import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeesInsertupdateComponent } from './employees-insertupdate.component';

describe('EmployeesAddComponent', () => {
  let component: EmployeesInsertupdateComponent;
  let fixture: ComponentFixture<EmployeesInsertupdateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeesInsertupdateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeesInsertupdateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
