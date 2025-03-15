import { Component } from '@angular/core';
import { ImcComponent } from './imc/imc.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ImcComponent],
  template: `<app-imc></app-imc>`,
})
export class AppComponent {}
