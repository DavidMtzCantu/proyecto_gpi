import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable()

export class PersonaService {
  URLPersonas : string = 'http://localhost:8000/personas/';
  URLPersonaCreate: string = 'http://localhost:8000/persona/';

  constructor(private http: HttpClient) { }

  getPersonas(): Observable<Persona[]>
  {
    return this.http.get<Persona[]>(this.URLPersonas);
  }

  postPersona(): Observable<any>{
  return this.http.post(this.URLPersonaCreate,Persona);
  }

  



}
