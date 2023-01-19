import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumnos-formulario',
  templateUrl: './alumnos-formulario.component.html',
  styleUrls: ['./alumnos-formulario.component.scss']
})
export class AlumnosFormularioComponent implements OnInit {
  employee: any;
  NivelEducativo:any;
  constructor() { }

  ngOnInit(): void {
  }

}
