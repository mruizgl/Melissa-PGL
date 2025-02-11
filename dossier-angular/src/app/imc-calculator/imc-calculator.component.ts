import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IMCService } from '../person.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-imc-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule], // Importa FormsModule aquí
  templateUrl: './imc-calculator.component.html'
})
export class IMCCalculatorComponent {
  name = '';
  weight: number = 0;
  height: number = 0;

  constructor(private imcService: IMCService) {}

  calculateIMC() {
    if (this.weight > 0 && this.height > 0) {
      const imc = this.weight / (this.height * this.height);
      this.imcService.addPerson({ name: this.name, weight: this.weight, height: this.height, imc });
      this.clearForm();
    }
  }

  clearForm() {
    this.name = '';
    this.weight = 0;
    this.height = 0;
  }
}
