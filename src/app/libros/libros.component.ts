import { Component, OnInit } from '@angular/core';
import { CrudService } from '../servicio/crud.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styleUrls: ['./libros.component.css']
})
export class LibrosComponent implements OnInit {
  Libros:any;

  constructor(
    private crudService:CrudService
  ) {
    this.crudService.ObtenerLibros().subscribe(respuesta=>{
      this.Libros=respuesta;
    })
   }

  ngOnInit(): void {
  }

  Reservar (id:any,iControl:any) {
    if(window.confirm("Desea reservar este producto?")){
    this.crudService.Reservar(id).subscribe((respuesta)=>{
      alert("Su reserva ya fue procesada");
    });
    }
  }

}
