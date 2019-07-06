import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const endpoint = 'http://168.232.165.184/prueba/array';
const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class RestService {

  constructor(private http: HttpClient) {}

  private extractData(res: Response) {
    let body = res.json();
    return body || { };
  }

  getitems(): Observable<any> {
    return this.http.get(endpoint).pipe(
      map(this.extractData));
  }

}
