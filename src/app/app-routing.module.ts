import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { CharactersComponent } from './characters/characters.component';
import { PlanetsComponent } from './planets/planets.component';
import { StarshipsComponent } from './starships/starships.component';


const routes: Routes = [
  {path: '', component: WelcomeComponent},
  {path: 'characters', component: CharactersComponent},
  {path: 'planets', component: PlanetsComponent},
  {path: 'starships', component: StarshipsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
