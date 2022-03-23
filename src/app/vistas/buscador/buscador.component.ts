import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged, filter, tap, map } from 'rxjs/operators';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
  styleUrls: ['./buscador.component.css']
})
export class BuscadorComponent implements OnInit {

  inputSearch = new FormControl('');
  inputSearchCategoria = new FormControl('');
  @Output() submitted = new EventEmitter<string>();

  

  constructor() { }

  ngOnInit(): void {
    this.onChange();
  }
  onChange(): void {
    this.inputSearch.valueChanges
      .pipe(
        map((search: string) => search.trim()),
        debounceTime(350),
        distinctUntilChanged(),
        filter((search: string) => search !== ''),
        tap((search: string) => this.submitted.emit(search))
      )
      .subscribe();
      this.inputSearchCategoria.valueChanges
      .pipe(
        map((search: string) => search.trim()),
        debounceTime(350),
        distinctUntilChanged(),
        filter((search: string) => search !== ''),
        tap((search: string) => this.submitted.emit(search))
      )
      .subscribe();
  }
}
