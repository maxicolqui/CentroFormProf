import { Component } from '@angular/core';
import { LocationComponent } from '../location/location.component';
import { ContactosComponent } from '../contactos/contactos.component';

@Component({
  selector: 'app-house',
  standalone: true,
  imports: [LocationComponent,
    ContactosComponent
  ],
  templateUrl: './house.component.html',
  styleUrl: './house.component.css'
})
export class HouseComponent {

}
