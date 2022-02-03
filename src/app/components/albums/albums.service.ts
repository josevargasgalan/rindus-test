import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ApiService } from "src/api/api.service";
import { Album } from "./models";

@Injectable()
export class AlbumsService {

  constructor(private apiSevice: ApiService) {}

  getAlbums(): Observable<Album[]> {
    return this.apiSevice.get('albums');
  }
}
