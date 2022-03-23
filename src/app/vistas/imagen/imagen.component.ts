import { Component, Input, OnInit } from '@angular/core';
import { Imagen } from 'src/app/services/servicioPixabay/pixabay.service';

@Component({
  selector: 'app-imagen',
  templateUrl: './imagen.component.html',
  styleUrls: ['./imagen.component.css']
})
export class ImagenComponent {

  @Input()imagen!: Imagen;
  


}
