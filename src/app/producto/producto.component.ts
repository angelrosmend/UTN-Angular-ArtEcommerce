import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
  @Input() data: any = {}

  constructor() { }

  ngOnInit(): void {
  }

}
