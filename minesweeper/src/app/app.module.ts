import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { SettingsComponent } from './components/settings/settings.component';

import { SettingsService } from './services/settings.service'

const appRoutes: Routes = [  
  { path: 'game', component: GameComponent},
  { path: 'settings', component: SettingsComponent},
  { path: '', component: GameComponent } 
];


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    SettingsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
