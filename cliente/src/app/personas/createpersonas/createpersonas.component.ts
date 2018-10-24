import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../personasservice/persona.service';
import { Persona } from '../models/persona';
import { MatTableDataSource } from '@angular/material';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-createpersonas',
  templateUrl: './createpersonas.component.html',
  styleUrls: ['./createpersonas.component.css']
})
export class CreatepersonasComponent implements OnInit {
  persona = new FormGroup
   ({
     nombre: new FormControl(''),
     apellido_paterno: new FormControl(''),
     apellido_materno: new FormControl(''),
     fecha_nacimiento: new FormControl('')
   });

  constructor(private servicepersona : PersonaService) { }

  ngOnInit() {
    this.crearPersonas();
  }

  crearPersonas() {
    this.servicepersona.postPersona().subscribe((result: any) => {
      this.persona = new FormGroup(result);
      //alert("Succesfully Added Product details")
    });
  }

}
