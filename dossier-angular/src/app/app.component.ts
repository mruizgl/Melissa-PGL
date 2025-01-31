import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GenteComponent } from './gente/gente.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Practica7Component } from "./practica7/practica7.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    GenteComponent,
    ReactiveFormsModule,
    Practica7Component
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Personas';
}