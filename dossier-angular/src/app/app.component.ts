import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { GenteComponent } from './gente/gente.component';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Practica7Component } from "./practica7/practica7.component";
import { ImcCalculatorComponent } from "./imc-calculator/imc-calculator.component";
import { PersonListComponent } from "./person-list/person-list.component";
import { FormsModule } from '@angular/forms';
import { IMCService } from './person.service';
import { VisorComponentComponent } from "./visor-component/visor-component.component";




@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    FormsModule,
    ReactiveFormsModule,
    ImcCalculatorComponent,
    PersonListComponent,
    VisorComponentComponent
],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Lista de Personas';
}
