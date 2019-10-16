import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { StorageService } from './services/storage.service';
import { StorageServiceModule } from 'angular-webstorage-service';

import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CharactersComponent } from './characters/characters.component';
import { PlanetsComponent } from './planets/planets.component';
import { StarshipsComponent } from './starships/starships.component';
import { LoadingSpinnerComponent } from './ui/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    CharactersComponent,
    PlanetsComponent,
    StarshipsComponent,
    LoadingSpinnerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    StorageServiceModule
  ],
  providers: [HttpClientModule, StorageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
