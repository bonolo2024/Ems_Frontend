import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeServicesService } from '../../services/employee-services.service';
import { Employee } from '../../model/employee';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule, NgFor } from '@angular/common';
import { Departments } from '../../model/departments';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  employeeId!: number;
  employee: Employee = new Employee();

  departments = Object.values(Departments);

  constructor(private route: ActivatedRoute,private employeeService: EmployeeServicesService, private router: Router) {
     this.employeeId = route.snapshot.params['employeeId'];
  }

  ngOnInit():void {
    this.employeeId = this.route.snapshot.params['employeeId'];
    console.log(this.employeeId);
    this.employeeService.getEmployeeById(this.employeeId).subscribe(data => { this.employee = data });
  }

  onSubmit(){
    this.employeeService.updateEmployee(this.employeeId, this.employee).subscribe( data =>{
      this.goToEmployeeList(); 
    }
    , error => console.log(error));
  }

  goToEmployeeList(){
    this.router.navigate(['/']);
  }

}
