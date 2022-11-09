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
    AglibrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
