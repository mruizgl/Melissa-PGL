import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'app-gente',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './gente.component.html',
  styleUrls: ['./gente.component.css']
})
export class GenteComponent {
  personas = [
    { id: 1, nombre: 'Ana', edad: 25 },
    { id: 2, nombre: 'Mario', edad: 30 },
    { id: 3, nombre: 'Marta', edad: 22 },
    { id: 4, nombre: 'Carlos', edad: 28 }
  ];
}