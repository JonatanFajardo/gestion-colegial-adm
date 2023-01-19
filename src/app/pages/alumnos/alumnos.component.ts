import { AlumnosService } from './../../services/grandes/alumnos.service';
import { Component, OnInit } from '@angular/core';
import { DxDataGridModule } from 'devextreme-angular';
import { PR_tbAlumnos_ListResult } from 'src/app/models/PR_tbAlumnos_ListResult';
import { JsonPipe } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.scss'],
})
export class AlumnosComponent implements OnInit {
startEdit($event: any) {
this.router.navigate(['/alumnos/form']);
console.log($event.data["alu_Id"])
}
updateCell() {
throw new Error('Method not implemented.');
}
  alumnos: PR_tbAlumnos_ListResult[];

  constructor(private AlumnosService: AlumnosService,private router: Router) {
    this.obtenerAlumnos();
    // console.log(JSON.parse(this.alumnos));
  }

  ngOnInit(): void {}

  obtenerAlumnos() {
    this.AlumnosService.obtenerAlumnos().subscribe(
      (datos) => {
        this.alumnos = datos;
      },
      (error) => {
        alert('Error'+ JSON.parse(error));
        // this.msj.mensajeError(
        //   'Ocurrio un error',
        //   'No se han podido cargar los datos solicitados'
        // );
      }
    );
  }
}
