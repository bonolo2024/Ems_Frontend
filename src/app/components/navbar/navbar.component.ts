import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private router: Router) {}

  ngOnInit():void {

  }

  public getAllEmployees() {
    this.router.navigate(['/']); 
    // this.employeeService.getAllEmployees().subscribe(data => {this.employees = data})
  }

}
