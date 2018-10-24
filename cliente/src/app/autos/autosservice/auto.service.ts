import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Auto } from '../models/auto';

@Injectable()
export class AutoService {
  URLAutos : string = 'http://localhost:8000/autos/';

  constructor (private http: HttpClient) { }

  getAutos(): Observable<Auto[]>
  {
    return this.http.get<Auto[]>(this.URLAutos);
  }
}
