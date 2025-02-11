import { Component, Input } from '@angular/core';
import { IMCService } from '../person.service';  
import { FormsModule } from '@angular/forms'; 

@Component({
  selector: 'app-imc-calculator',
  templateUrl: './imc-calculator.component.html',
  standalone: true,
  imports: [FormsModule], 
})
export class ImcCalculatorComponent {
  @Input() name: string = '';
  @Input() weight: number | null = null;
  @Input() height: number | null = null;

  constructor(private imcService: IMCService) {}  

  calculateIMC() {
    if (this.weight && this.height && this.name) {
      const imc = this.weight / (this.height * this.height);
      const person = { name: this.name, weight: this.weight, height: this.height, imc };
      
      this.imcService.addPerson(person);  


      this.name = '';
      this.weight = null;
      this.height = null;
    } else {
      alert('Por favor ingresa todos los datos.');
    }
  }
}
