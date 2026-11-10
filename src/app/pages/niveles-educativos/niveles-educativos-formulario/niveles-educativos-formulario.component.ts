import { NivelesEducativosService } from './../../../services/niveles-educativos.service';
import { Component, OnInit } from '@angular/core';
import { PR_tbNivelesEducativos_ListResult } from 'src/app/models/PR_tbNivelesEducativos_ListResult';

@Component({
  selector: 'app-niveles-educativos-formulario',
  templateUrl: './niveles-educativos-formulario.component.html',
  styleUrls: ['./niveles-educativos-formulario.component.scss']
})
export class NivelesEducativosFormularioComponent implements OnInit {
  
  NivelesEducativos:PR_tbNivelesEducativos_ListResult[];
  constructor(private NivelesEducativosService:NivelesEducativosService) { }

  ngOnInit(): void {
  }
  obtenerNivelEducativoDropdown() {
    this.NivelesEducativosService.obtenerNivelEducativoDropdown().subscribe(
      (datos) => {
        this.NivelesEducativos = datos;
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
