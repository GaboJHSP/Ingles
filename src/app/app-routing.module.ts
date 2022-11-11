import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { InfantilComponent } from './infantil/infantil.component';
import { IntensivoComponent } from './intensivo/intensivo.component';
import { RegularComponent } from './regular/regular.component';

const routes: Routes = [
  { path: '', redirectTo: 'index', pathMatch: 'full' },
  { path: 'index', component: IndexComponent },
  { path: 'regular', component: RegularComponent },
  { path: 'intensivo', component: IntensivoComponent },
  { path: 'infantil', component: InfantilComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
