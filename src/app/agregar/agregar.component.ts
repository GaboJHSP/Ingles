import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from '../servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.css']
})
export class AgregarComponent implements OnInit {

  formularioLibros:FormGroup;
  
  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
    ) { 

    this.formularioLibros=this.formulario.group({
      titulo:[''],
      date:[''],
      costo:[''],
      disponibles:['']
    });

  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    this.crudService.AgregarLibros(this.formularioLibros.value).subscribe(()=>{
      this.ruteador.navigateByUrl('/lista');
    });
  }

}
