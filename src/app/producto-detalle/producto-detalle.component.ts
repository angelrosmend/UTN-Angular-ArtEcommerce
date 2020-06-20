import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductosService } from '../services/productos.service';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrls: ['./producto-detalle.component.css']
})
export class ProductoDetalleComponent implements OnInit {
  id; 
  producto: any = {}
  constructor(private activatedRoute:ActivatedRoute, private ProductosService:ProductosService) { 
    this.id=this.activatedRoute.snapshot.paramMap.get('id')
    console.log(this.id)
    this.ProductosService.getById(this.id).subscribe(data => {
      console.log(data)
       this.producto = data;
    })
  }

  ngOnInit(): void {
  }

}
