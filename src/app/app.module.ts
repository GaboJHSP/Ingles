import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NavmenuComponent } from './navmenu/navmenu.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './footer/footer.component';
import { RegularComponent } from './regular/regular.component';
import { IntensivoComponent } from './intensivo/intensivo.component';
import { InfantilComponent } from './infantil/infantil.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { LogestComponent } from './logest/logest.component';
import { LogprofComponent } from './logprof/logprof.component';
import { LibrosComponent } from './libros/libros.component';
import { AglibrosComponent } from './aglibros/aglibros.component';
import { AgregarComponent } from './agregar/agregar.component';
import { EditarComponent } from './editar/editar.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    NavmenuComponent,
    IndexComponent,
    FooterComponent,
    RegularComponent,
    IntensivoComponent,
    InfantilComponent,
    NosotrosComponent,
    InscripcionComponent,
    NoticiasComponent,
    LogestComponent,
    LogprofComponent,
    LibrosComponent,
    AglibrosComponent,
    AgregarComponent,
    EditarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
