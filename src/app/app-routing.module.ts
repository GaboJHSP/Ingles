import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AglibrosComponent } from './aglibros/aglibros.component';
import { IndexComponent } from './index/index.component';
import { InfantilComponent } from './infantil/infantil.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { IntensivoComponent } from './intensivo/intensivo.component';
import { LogestComponent } from './logest/logest.component';
import { LogprofComponent } from './logprof/logprof.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { RegularComponent } from './regular/regular.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'regular', component: RegularComponent },
  { path: 'intensivo', component: IntensivoComponent },
  { path: 'infantil', component: InfantilComponent },
  { path: 'nosotros', component: NosotrosComponent },
  { path: 'inscripcion', component: InscripcionComponent },
  { path: 'estudiantes', component: LogestComponent },
  { path: 'docentes', component: LogprofComponent },
  { path: 'agregar', component: AglibrosComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
