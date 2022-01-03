import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MontresComponent } from './montres/montres.component';
import { LoginComponent } from './login/login.component';

import { AddMontreComponent } from './add-montre/add-montre.component';
import { UpdateMontreComponent } from './update-montre/update-montre.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { ForbiddenComponent } from './forbidden/forbidden.component';
import { MontreGuard } from './montre.guard';
const routes: Routes = [
{path: "montres", component : MontresComponent},
 
{ path: "", redirectTo: "montres", pathMatch: "full" },
{path: "updateMontre/:id", component: UpdateMontreComponent},
{path: "rechercheParCategorie", component : RechercheParCategorieComponent},
{path: 'login', component: LoginComponent},
{path: 'app-forbidden', component: ForbiddenComponent},


{path : "add-montre", component : AddMontreComponent, canActivate:[MontreGuard]}

];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
