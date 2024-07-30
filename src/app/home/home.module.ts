import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContactModule } from '../contact/contact.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HeaderComponent,FooterComponent,ContactModule
  ],
  exports:[
    HeaderComponent,
    FooterComponent
  ]
})
export class HomeModule { }
