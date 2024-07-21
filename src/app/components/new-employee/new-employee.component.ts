import { Component } from '@angular/core';
import { Employee } from '../../model/employee';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServicesService } from '../../services/employee-services.service';
import {  FormsModule, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-new-employee',
  standalone: true,
  imports: [FormsModule ],
  templateUrl: './new-employee.component.html',
  styleUrl: './new-employee.component.css'
})
export class NewEmployeeComponent {

  // employee!: Employee;
  employee: Employee = new Employee();

 constructor(private formbulider: FormBuilder, private employeeService: EmployeeServicesService,
  private router: Router){
  }

 ngOnInit(): void {
}

public addEmployee(){

  this.employeeService.addEmployee(this.employee).subscribe(data => {this.goToEmployees()})
}

goToEmployees(){
  this.router.navigate(['']);
}


onSubmit() {
  console.log(this.employee);
  this.addEmployee();
}


}

