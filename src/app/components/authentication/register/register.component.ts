import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthenticationService } from '../../../services/authentication.service';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, RouterLink],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  registerForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthenticationService,
    private router: Router
  ) { }

  ngOnInit():void {
    this.registerForm = this.fb.group({
      username: ['', [Validators.required]],
      firstname: ['', [Validators.required]],
      email: ['', [Validators.required],],
      lastname: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  register(){
    this.authService.register(this.registerForm.value).subscribe({
      next: (data: any) => {
        console.log("Registration was successful", data);
        this.router.navigate(['/login']);
      }, 
      error: (err: {message:string}) => {
        console.error('Registration has Failed', err);
        alert('Registration has Failed' + err.message);
      }
    })
  }
}
