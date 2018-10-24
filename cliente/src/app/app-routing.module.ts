import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListpersonasComponent } from './personas/listpersonas/listpersonas.component';
import { ListautosComponent } from './autos/listautos/listautos.component';
import { CreatepersonasComponent } from './personas/createpersonas/createpersonas.component';

const routes: Routes = [
  {
    path: 'personas', component: ListpersonasComponent,
  },
  {
      path: 'autos', component: ListautosComponent,
  },
  {
      path: 'persona', component: CreatepersonasComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
