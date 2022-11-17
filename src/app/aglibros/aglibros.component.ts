import { Component, OnInit } from '@angular/core';

import { CrudService } from '../servicio/crud.service';

@Component({
  selector: 'app-aglibros',
  templateUrl: './aglibros.component.html',
  styleUrls: ['./aglibros.component.css']
})
export class AglibrosComponent implements OnInit {
  Libros:any;

  constructor(
    private crudeService:CrudService
  ) { }

  ngOnInit(): void {
    this.crudeService.ObtenerLibros().subscribe(respuesta=>{
      this.Libros=respuesta;
    })
  }
  
  borrarRegistro (id:any,iControl:any) {
    if(window.confirm("Desea borrar este registro?")){
    this.crudeService.BorrarLibros(id).subscribe((respuesta)=>{
      this.Libros.splice(iControl,1)
    });
    }
  }

}
