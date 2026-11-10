import { Component, OnInit } from '@angular/core';
import { PR_tbNivelesEducativos_DropdownResult } from 'src/app/models/PR_tbNivelesEducativos_DropdownResult';
import { PR_tbNivelesEducativos_ListResult } from 'src/app/models/PR_tbNivelesEducativos_ListResult';
import { NivelesEducativosService } from 'src/app/services/niveles-educativos.service';

@Component({
  selector: 'app-alumnos-formulario',
  templateUrl: './alumnos-formulario.component.html',
  styleUrls: ['./alumnos-formulario.component.scss']
})
export class AlumnosFormularioComponent implements OnInit {
  // companies: Company[];

  labelMode: string;

  labelLocation: string;

  readOnly: boolean;

  showColon: boolean;

  minColWidth: number;

  colCount: number;

  width: any;
  
  
  
  
  
  
  
  getCompanySelectorLabelMode() {
    return this.labelMode === 'outside'
      ? 'hidden'
      : this.labelMode;
  }
  
  
  emailValue: string;
  rules: any;

  employee: any;
  NivelEducativo:any;
  NivelesEducativos:PR_tbNivelesEducativos_DropdownResult[];
  constructor(private NivelesEducativosService:NivelesEducativosService) { 
    this.labelMode = 'floating';
    this.labelLocation = 'left';
    this.readOnly = false;
    this.showColon = true;
    this.minColWidth = 300;
    this.colCount = 2;
    // this.companies = service.getCompanies();
    
    
    
    
    
    
    this.emailValue = 'smith@corp.com';
    this.rules = { X: /[02-9]/ };
    this.obtenerNivelEducativoDropdown();
    console.log(this.NivelesEducativos);
    
  }

  ngOnInit(): void {
  }
  obtenerNivelEducativoDropdown() {
    this.NivelesEducativosService.obtenerNivelEducativoDropdown().subscribe(
      (datos:PR_tbNivelesEducativos_DropdownResult[]) => {
        this.NivelesEducativos = datos;
        console.log(JSON.stringify(datos));
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
