import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})
export class PersonaService {

  public ruta="http://localhost:8080/api"

  constructor(private http: HttpClient) { }
  
  public listar(): Observable<Persona[]>{
    return this.http.get<Persona[]>(this.ruta+"/personas");
  }

  public crear(persona: Persona): Observable<Persona> {
    return this.http.post<Persona>(this.ruta+"/persona",persona)
  }

  public delete(id: string): Observable<any> {
    return this.http.delete<any>(this.ruta + "/persona/" + id);
  }

  public buscarPorId(id: string): Observable<Persona> {
    return this.http.get<Persona>(this.ruta + "/persona/" + id);
  }

}
