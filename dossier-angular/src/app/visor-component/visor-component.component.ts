import { Component, inject } from '@angular/core';
import { GatosApiArray, GatosService } from '../gatos.service';
import { Gato } from '../practica7/Gato';

@Component({
  selector: 'app-visor-component',
  imports: [],
  templateUrl: './visor-component.component.html',
  styleUrl: './visor-component.component.css'
})
export class VisorComponentComponent {
  gatosApiArray: GatosApiArray[] = [];

  gatosService: GatosService = inject(GatosService);
  constructor() {
    this.gatosService.getGatosApi().subscribe((data) => {
      this.gatosApiArray = data;
    });
  }

}
