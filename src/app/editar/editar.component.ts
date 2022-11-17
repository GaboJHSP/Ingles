import { Component, OnInit } from '@angular/core';

import { FormGroup,FormBuilder } from '@angular/forms';
import { CrudService } from '../servicio/crud.service';

import { Router,ActivatedRoute } from '@angular/router'

@Component({
  selector: 'app-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  formularioLibros:FormGroup;
  elID: any;

  constructor(
    public formulario:FormBuilder,
    private activeRoute:ActivatedRoute,
    private crudService:CrudService,
    private ruteador:Router
  ) {
    this.elID=this.activeRoute.snapshot.paramMap.get('id');
    this.crudService.ObtenerLibro(this.elID).subscribe(
      respuesta=>{
        console.log(respuesta);
        this.formularioLibros.setValue({
          titulo:respuesta[0]['titulo'],
          date:respuesta[0]['fecha'],
          costo:respuesta[0]['costo'],
          disponibles:respuesta[0]['disponibles']
        });
      }
    );

    this.formularioLibros=this.formulario.group(
      {
        titulo:[''],
        date:[''],
        costo:[''],
        disponibles:['']
      }
    );
  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    this.crudService.EditarLibro(this.elID,this.formularioLibros.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/lista');
    });
  }

}
