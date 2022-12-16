import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown-register-page',
  templateUrl: './dropdown-register-page.component.html',
  styleUrls: ['./dropdown-register-page.component.css']
})
export class DropdownRegisterPageComponent implements OnInit {

  @Input() PageSize!: number;

  @Output() eeRpp = new EventEmitter<number>();
  constructor() { }

  ngOnInit(): void {
  }

  onChangeRpp(nRpp:number){
    this.eeRpp.emit(nRpp);
  }
}
