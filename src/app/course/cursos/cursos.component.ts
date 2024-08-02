import { Component } from '@angular/core';
import { TurnosComponent } from '../turnos/turnos.component';
import { DatosComponent } from '../datos/datos.component';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [TurnosComponent,
    DatosComponent

  ],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

}
