import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Imagen, PixabayService } from './services/servicioPixabay/pixabay.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  imagenes$ !:Observable<Imagen[]>; 
  constructor(private readonly pixabayService: PixabayService){
  }

  onSearch(palabra:string, categoria:string):void {
    this.imagenes$ = this.pixabayService.search(palabra, categoria);
  }
}