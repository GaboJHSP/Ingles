import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { CrudService } from '../servicio/crud.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {

  formularioInscripcion:FormGroup;
  
  constructor(
    public formulario:FormBuilder,
    private crudService:CrudService,
    private ruteador:Router
    ) { 

    this.formularioInscripcion=this.formulario.group({
      nombre:[''],
      correo:[''],
      razon:[''],
      comentario:['']
    });

  }

  ngOnInit(): void {
  }

  enviarDatos():any{
    this.crudService.AgregarInscripcion(this.formularioInscripcion.value).subscribe(()=>{
      alert("Su solicitud de inscripcion ya fue procesada. Se comunicarán con usted a travez de su correo electroncio. Gracias");
      this.ruteador.navigateByUrl('/index');
    });
  }

}
