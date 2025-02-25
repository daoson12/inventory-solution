import { NgModule } from '@angular/core';
import { materials } from './angular-material/material.module';
// import { ChartsModule } from 'ng2-charts';


@NgModule({
  declarations: [],
  imports: [
    ...materials,
    
    
  ]
})
export class SharedModule { }
