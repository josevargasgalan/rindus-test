import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class ApiService {
  private baseUrl = 'https://jsonplaceholder.typicode.com';

  constructor(private httpService: HttpClient) {}

  get(url: string): Observable<any>{
    return this.httpService.get(`${this.baseUrl}/${url}`)
  }

  post(url: string): Observable<any>{
    return this.httpService.get(`${this.baseUrl}/${url}`)
  }

  update(url: string): Observable<any>{
    return this.httpService.get(`${this.baseUrl}/${url}`)
  }

  delete(url: string): Observable<any>{
    return this.httpService.get(`${this.baseUrl}/${url}`)
  }
}
