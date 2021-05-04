import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormPersonaComponent } from './components/form-persona/form-persona.component';
import { ListadoPersonaComponent } from './components/listado-persona/listado-persona.component';

const routes: Routes = [
  { path: 'nueva-persona', component: FormPersonaComponent },
  { path: 'personas', component: ListadoPersonaComponent },
   {path: 'editar/:id',component:FormPersonaComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
