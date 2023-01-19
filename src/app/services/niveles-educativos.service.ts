import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NivelesEducativosService {

  constructor(public http: HttpClient) { }
}
