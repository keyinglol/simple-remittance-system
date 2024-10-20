//import { Component } from '@angular/core';
//
//@Component({
//selector: 'app-hello-world',
//standalone: true,
//templateUrl: './hello-world.component.html',
//styleUrls: ['./hello-world.component.css']
//})
//export class HelloWorldComponent {
//  // Any additional logic here
//}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
selector: 'app-hello-world',
standalone: true,
templateUrl: './hello-world.component.html',
styleUrls: ['./hello-world.component.css'],
imports: [ReactiveFormsModule] // Import ReactiveFormsModule
})
export class HelloWorldComponent {
  // Define a form group
form: FormGroup;

constructor(private fb: FormBuilder) {
    // Initialize the form with a control 'name'
this.form = this.fb.group({
name: [''] // Default empty value
});
}

  // Method to handle form submission
onSubmit() {
console.log('Form Submitted:', this.form.value);
}
}
