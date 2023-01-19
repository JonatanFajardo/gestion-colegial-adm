import { PR_tbAlumnos_ListResult } from './../../models/PR_tbAlumnos_ListResult';
import { HttpClient } from '@angular/common/http'; 
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  constructor(public http: HttpClient) { }
  obtenerAlumnos():Observable<PR_tbAlumnos_ListResult[]> {
    return this.http.get(`${environment.Api}Alumnos/ListAsync`).pipe(map(datos=>datos as PR_tbAlumnos_ListResult[]));
  }
// List
// Find
// Detail
// Create
// Edit
// Remove



}
