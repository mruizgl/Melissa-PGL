import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Gato } from './Gato';

@Component({
  selector: 'app-practica7',
  standalone: true,
  imports: [
    ReactiveFormsModule
    ],
  templateUrl: './practica7.component.html',
  styleUrl: './practica7.component.css'
})


  
export class Practica7Component {
  gatoFormData = new FormGroup({
  nombre: new FormControl(''),
  peso: new FormControl(''),
  edad: new FormControl(0),
});
  

  guardarGato() {
    let gato = new Gato();
    gato.nombre = this.gatoFormData.value.nombre??"";
    gato.peso = parseInt(this.gatoFormData.value.peso?? '0');
    gato.edad = this.gatoFormData.value.edad??0;
    this.gatos.push(gato);
    
    
  }

  gatos: Gato[] = [];
}


