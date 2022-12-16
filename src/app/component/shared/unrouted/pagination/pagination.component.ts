import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {

  @Input() pagesCount!: number;
  private totalPages!: number[];
  private numberPage: number =0;

  @Output() emitNumberPage = new EventEmitter<number>;

  getTotalPages(): number[] {
    return this.totalPages;
  }

  setNumberPage( paginaActual: number){
    this.numberPage = paginaActual;
    this.emitNumberPage.emit(this.numberPage);
  }

  getNumberPage(): number{
    return this.numberPage;
  }

  constructor() {}

  ngOnChanges(changes: SimpleChanges){
    this.totalPages = new Array(this.pagesCount);
  }

}
