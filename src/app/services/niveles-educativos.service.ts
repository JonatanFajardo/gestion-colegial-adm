import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';
import { PR_tbNivelesEducativos_ListResult } from '../models/PR_tbNivelesEducativos_ListResult';
import { PR_tbNivelesEducativos_DropdownResult } from '../models/PR_tbNivelesEducativos_DropdownResult';

@Injectable({
  providedIn: 'root'
})
export class NivelesEducativosService {
  constructor(public http: HttpClient) { }
  obtenerNivelEducativoDropdown():Observable<PR_tbNivelesEducativos_DropdownResult[]> {
    debugger
    return this.http.get(`${environment.Api}Alumnos/NivelesEducativosDropdown`).pipe(map(datos=>datos as PR_tbNivelesEducativos_DropdownResult[]));
  }
}
