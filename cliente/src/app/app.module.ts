import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule, FormsModule,FormControl, FormGroup } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import {MatMenuModule} from '@angular/material/menu';
import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';
import { PersonasModule } from './personas/personas.module';
import { AutosModule } from './autos/autos.module';
import {MatIconModule} from '@angular/material/icon';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    PersonasModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AutosModule,
    MatMenuModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
