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

  post(url: string, body: any): Observable<any>{
    return this.httpService.post(`${this.baseUrl}/${url}`, body)
  }

  put(url: string, body: any): Observable<any>{
    return this.httpService.put(`${this.baseUrl}/${url}`, body)
  }

  delete(url: string): Observable<any>{
    return this.httpService.delete(`${this.baseUrl}/${url}`)
  }
}
