import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiService {
  baseUrl = 'https://jsonplaceholder.typicode.com/';

  constructor(private httpService: HttpClient) {}

  get(url: string){
    return this.httpService.get(`${this.baseUrl}/${url}`)
  }
}
