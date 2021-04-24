import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
//model
import { responseGet } from 'src/app/models/images.interface';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl: string =
    'https://pixabay.com/api/?key=13119377-fc7e10c6305a7de49da6ecb25';

  constructor(private http: HttpClient) {}

  getImage(q: any, c: any, action?: any): Observable<responseGet> {
    let url = this.baseUrl + `&lang=es&q=${q}&category=${c}`;
    // console.log(action);
    return this.http.get<responseGet>(url);
  }
}
