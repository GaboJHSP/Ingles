import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from '../servicio/crud.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-logprof',
  templateUrl: './logprof.component.html',
  styleUrls: ['./logprof.component.css']
})
export class LogprofComponent implements OnInit {
  formularioInscripcion:FormGroup;

  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
    ) { 

    this.formularioInscripcion=this.formulario.group({
      correo:[''],
      contrasenia:['']
    });

  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    console.log(this.formularioInscripcion.value);
    this.crudService.InicioSesion(this.formularioInscripcion.value).subscribe((respuesta)=>{
      this.ruteador.navigateByUrl('/lista');
    });
  }

}
