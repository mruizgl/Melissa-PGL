import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IMCService } from '../person.service';

@Component({
  selector: 'app-person-list',
  standalone: true,
  imports: [CommonModule], // Importar CommonModule aquí
  templateUrl: './person-list.component.html'
})
export class PersonListComponent {
  constructor(public imcService: IMCService) {}
}
