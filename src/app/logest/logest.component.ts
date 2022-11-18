import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from '../servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logest',
  templateUrl: './logest.component.html',
  styleUrls: ['./logest.component.css']
})
export class LogestComponent implements OnInit {
  formularioInscripcion:FormGroup;
  
  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
    ) { 

    this.formularioInscripcion=this.formulario.group({
      usuario:[''],
      contrasenia:['']
    });

  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    this.crudService.IniciarSesion(this.formularioInscripcion.value).subscribe((respuesta)=>{
      this.ruteador.navigateByUrl('/contenido/1');
    });
  }
}
