import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CepListComponent } from './cep-list/cep-list.component';



const routes: Routes = [
  { path: '', component: CepListComponent}
  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
