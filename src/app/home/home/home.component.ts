import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { SectionComponent } from '../section/section.component';
import { AntecedenteComponent } from '../antecedente/antecedente.component';
import { MisionComponent } from '../mision/mision.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,
    SectionComponent,
    AntecedenteComponent,
    MisionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
