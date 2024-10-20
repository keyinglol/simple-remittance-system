import { Component } from '@angular/core';
import { RemittanceFormComponent } from './remittance-form/remittance-form.component';

@Component({
selector: 'app-root',
standalone: true,
templateUrl: './app.component.html',
styleUrls: ['./app.component.css'],
imports: [RemittanceFormComponent] // Import RemittanceFormComponent here
})
export class AppComponent {
title = 'Remittance App';
}
