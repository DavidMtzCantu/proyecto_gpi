import { Component, OnInit } from '@angular/core';
import { AutoService } from '../autosservice/auto.service';
import { Auto } from '../models/auto';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-listautos',
  templateUrl: './listautos.component.html',
  styleUrls: ['./listautos.component.css']
})
export class ListautosComponent implements OnInit {

  displayedColumnsAutos  = ['Marca','Modelo','Año','Persona'];
  dataAutos : MatTableDataSource<Auto>;

  constructor(private serviceauto : AutoService) { }

  ngOnInit() {
    this.listAutos();
  }

  listAutos() {
    this.serviceauto.getAutos().subscribe((result: Auto[]) => {
      this.dataAutos = new MatTableDataSource(result);
      console.log(result);
    });
  }

}
