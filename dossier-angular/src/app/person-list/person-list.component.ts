import { Component } from '@angular/core';
import { IMCService } from '../person.service';
import { CommonModule } from '@angular/common';
import { ImcCalculatorComponent } from '../imc-calculator/imc-calculator.component';

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html',
  standalone: true,
  imports: [CommonModule, ImcCalculatorComponent],
})
export class PersonListComponent {
  name: string = '';
  weight: number | null = null;
  height: number | null = null;

  constructor(public imcService: IMCService) {}

  loadPersonData(person: any) {
    this.name = person.name;
    this.weight = person.weight;
    this.height = person.height;
  }
}
