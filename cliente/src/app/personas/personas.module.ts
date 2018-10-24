import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListpersonasComponent } from './listpersonas/listpersonas.component';
import { PersonaService } from './personasservice/persona.service';
import { MaterialModule } from '../material/material.module';
import { CreatepersonasComponent } from './createpersonas/createpersonas.component'
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
  ],
  declarations: [ListpersonasComponent, CreatepersonasComponent],
  providers: [PersonaService]
})
export class PersonasModule { }
