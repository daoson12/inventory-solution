import { NgModule } from '@angular/core';
import { materials } from './angular-material/material.module';



@NgModule({
  declarations: [],
  imports: [
    ...materials
  ]
})
export class SharedModule { }
