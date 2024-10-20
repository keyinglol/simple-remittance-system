//import { Component } from '@angular/core';
//import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
//
//@Component({
//selector: 'app-remittance-form',
//standalone: true,
//templateUrl: './remittance-form.component.html',
//styleUrls: ['./remittance-form.component.css'],
//imports: [ReactiveFormsModule] // Import ReactiveFormsModule
//})
//export class RemittanceFormComponent {
//  // Define the form group
//form: FormGroup;
//
//  // Sample countries (you can replace these with actual data)
//countries = ['USA', 'Canada', 'India', 'UK', 'Australia'];
//
//  // Payment types
//paymentTypes = ['Bank Account', 'Cash Pickup', 'Mobile Wallet'];
//
//constructor(private fb: FormBuilder) {
//    // Initialize the form with default values
//this.form = this.fb.group({
//receiverCountry: [''], // Selected country
//paymentType: [''], // Selected payment type
//amount: [''], // Payment amount
//});
//}
//
//  // Method to handle form submission
//onSubmit() {
//console.log('Form Submitted:', this.form.value);
//}
//}

import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
selector: 'app-remittance-form',
standalone: true,
templateUrl: './remittance-form.component.html',
styleUrls: ['./remittance-form.component.css'],
imports: [ReactiveFormsModule] // Import ReactiveFormsModule
})
export class RemittanceFormComponent {
  // Define the form group
form: FormGroup;

  // Static list of countries
countries = [
{ code: 'US', name: 'United States' },
{ code: 'IN', name: 'India' },
{ code: 'CA', name: 'Canada' },
{ code: 'GB', name: 'United Kingdom' },
{ code: 'AU', name: 'Australia' }
];

  // Payment types
paymentTypes = ['Bank Account', 'Cash Pickup', 'Mobile Wallet'];

constructor(private fb: FormBuilder) {
    // Initialize the form with default values
this.form = this.fb.group({
receiverCountry: [''], // Selected country
paymentType: [''], // Selected payment type
amount: [''], // Payment amount
});
}

  // Method to handle form submission
onSubmit() {
console.log('Form Submitted:', this.form.value);
}
}
