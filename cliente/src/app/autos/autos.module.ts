import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListautosComponent } from './listautos/listautos.component';
import { AutoService } from './autosservice/auto.service';
import { MaterialModule } from '../material/material.module';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [ListautosComponent],
  providers: [AutoService]
})
export class AutosModule { }
