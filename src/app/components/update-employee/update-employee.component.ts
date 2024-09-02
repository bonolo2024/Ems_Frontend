import { Component } from '@angular/core';
import { Employee } from '../../model/employeeModel';
import { Departments } from '../../model/departmentModel';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeesService } from '../../services/employees.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-update-employee',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './update-employee.component.html',
  styleUrl: './update-employee.component.css'
})
export class UpdateEmployeeComponent {

  employeeId!: number;
  employee: Employee = new Employee();

  departments = Object.values(Departments);

  constructor(private route: ActivatedRoute,private employeeService: EmployeesService, private router: Router) {
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


  back():void {
    this.router.navigate(['/dashboard']);
  }

}
