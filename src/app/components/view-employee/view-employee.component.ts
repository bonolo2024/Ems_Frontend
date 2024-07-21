import { Component } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';
import { Employee } from '../../model/employee';
import { EmployeeServicesService } from '../../services/employee-services.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-employee',
  standalone: true,
  imports: [],
  templateUrl: './view-employee.component.html',
  styleUrl: './view-employee.component.css'
})
export class ViewEmployeeComponent {


  employeeId!: number;
  employee!: Employee;
  employees!: Employee[];
  

  constructor(private router: Router,private route: ActivatedRoute, private employeeService: EmployeeServicesService) {
  }

  ngOnInit(): void {
    this.employeeId = this.route.snapshot.params['employeeId'];
    this.employee = new Employee();
    this.employeeService.getEmployeeById(this.employeeId).subscribe(data => { this.employee = data })
  }

  public deleteByEmployeeId(employeeId: number) {
    this.employeeService.deleteEmployee(employeeId).subscribe(data =>{this.getAllEmployees();})
  }

  public getAllEmployees() {
    this.router.navigate(['/']); 
    // this.employeeService.getAllEmployees().subscribe(data => {this.employees = data})
  }
}
