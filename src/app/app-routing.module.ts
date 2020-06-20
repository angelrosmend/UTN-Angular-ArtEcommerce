import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes , RouterModule } from '@angular/router'
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { ProductoDetalleComponent } from './producto-detalle/producto-detalle.component';

const routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component:LoginComponent},
  {path: 'signup', component:RegistroComponent},
  {path: 'producto/:id', component: ProductoDetalleComponent}
];



@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
