import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CrudComponent } from './crud/crud.component';
import { LogoutComponent } from './logout/logout.component';
import { MesvoituresComponent } from './mesvoitures/mesvoitures.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { NouveauvoitureComponent } from './nouveauvoiture/nouveauvoiture.component';


const routes: Routes = [
  {path : "Acceil", component :MesvoituresComponent},
  {path : "Profile/:numSerie", component : NouveauvoitureComponent},
  {path : "LogIn", component : LogoutComponent },
  {path : "MonEspace", component : CrudComponent },
  {path : "**", component : NotfoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
