import { Component, ViewChild } from '@angular/core';
import { EmployeeServicesService } from '../../services/employee-services.service';
import { Router } from '@angular/router';
import { Employee } from '../../model/employee';
import { BrowserModule } from '@angular/platform-browser'
import {CommonModule} from '@angular/common'


@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {

  employees!: Employee[];
  employee!: Employee;


  totalEmployees!: number;


  constructor(private employeeService: EmployeeServicesService,
    private router: Router) { }

    ngOnInit(): void{
      this.getAllEmployees();
   
    }

     getEmployeesByAdminId(adminid: number){
      this.employeeService.getEmployeesByAdminId(adminid).subscribe(data=> {this.employees = data})
      
    }

    updateEmployeeById(employeeId: number) {
      this.router.navigate(['/update', employeeId])
      console.log("Update",employeeId)
    }

    addEmployees(){
      this.router.navigate(['add']);
    }
    
    public getEmployeeById(employeeId: number){
      this.router.navigate(['/view', employeeId]); 
    }

    public getAllEmployees() {
      this.employeeService.getAllEmployees().subscribe(data => {this.employees = data,
        this.totalEmployees = data.length;
      })
    }

    public deleteByEmployeeId(employeeId: number) {
      this.employeeService.deleteEmployee(employeeId).subscribe(data =>{this.getAllEmployees();})
    }

}
