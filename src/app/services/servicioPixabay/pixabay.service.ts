import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { pluck } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

interface PixabayResponse {
  hits: Imagen[];
}

export interface Imagen {
  largeImageURL: string;
  views: any;
  likes: any;
}


@Injectable({
  providedIn: 'root'
})
export class PixabayService {

  constructor(private readonly http: HttpClient) { }

  search(palabra: string, categoria: string):Observable<Imagen[]> {

    const params = {
      key: '13119377-fc7e10c6305a7de49da6ecb25',
      lang: 'es',
      q: palabra,
      category: categoria,
      origin: '*'

    }
    return this.http.get<PixabayResponse>(environment.api, {params})
    .pipe(
      pluck('hits')
    )
  }
}
