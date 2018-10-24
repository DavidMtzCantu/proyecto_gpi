import { Component, OnInit } from '@angular/core';
import { PersonaService } from '../personasservice/persona.service';
import { Persona } from '../models/persona';
import { MatTableDataSource } from '@angular/material';
@Component({
  selector: 'app-listpersonas',
  templateUrl: './listpersonas.component.html',
  styleUrls: ['./listpersonas.component.css'],
})
export class ListpersonasComponent implements OnInit {

  displayedColumns  = ['Nombre','Apellido1','Apellido2','FechaNacimiento','Editar','Eliminar'];
  dataPersonas : MatTableDataSource<Persona>;

  constructor(private servicepersona : PersonaService) { }

  ngOnInit() {
    this.listPersonas();
  }

  listPersonas() {
    this.servicepersona.getPersonas().subscribe((result: Persona[]) => {
      this.dataPersonas = new MatTableDataSource(result);
      console.log(result);
    });
  }
}
