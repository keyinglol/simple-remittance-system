import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
selector: 'app-login',
standalone: true,
templateUrl: './login.component.html',
styleUrls: ['./login.component.css'],
imports: [ReactiveFormsModule] // Import ReactiveFormsModule
})
export class LoginComponent {
form: FormGroup;

  // Hardcoded credentials
private username = 'user';
private password = '123';

constructor(private fb: FormBuilder, private router: Router) {
    // Initialize the form
this.form = this.fb.group({
username: [''],
password: ['']
});
}

  // Handle form submission
onSubmit() {
const { username, password } = this.form.value;

if (username === this.username && password === this.password) {
console.log('Login successful');
this.router.navigate(['/remittance']); // Navigate to remittance page after successful login
} else {
alert('Invalid username or password');
}
}
}
