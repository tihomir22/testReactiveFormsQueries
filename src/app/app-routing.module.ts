import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormBasicoComponent } from './form-basico/form-basico.component';
import { FormAgrupadoComponent } from './form-agrupado/form-agrupado.component';
import { FormDinamicoComponent } from './form-dinamico/form-dinamico.component';
import { FormQueriesComponent } from './form-queries/form-queries.component';

const routes: Routes = [
  { path: '', component: FormBasicoComponent },
  { path: 'agrupado', component: FormAgrupadoComponent },
  { path: 'dinamico', component: FormDinamicoComponent },
  { path: 'query', component: FormQueriesComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
