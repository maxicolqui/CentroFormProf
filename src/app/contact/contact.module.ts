import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LocationComponent } from './location/location.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,LocationComponent
  ],
  exports:[LocationComponent]
})
export class ContactModule { }
