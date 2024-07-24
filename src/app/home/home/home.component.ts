import { Component } from '@angular/core';
import { SliderComponent } from '../slider/slider.component';
import { SectionComponent } from '../section/section.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [SliderComponent,
    SectionComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
