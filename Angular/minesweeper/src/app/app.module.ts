import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, PatternValidator } from '@angular/forms';

import { AppComponent } from './app.component';
import { GameComponent } from './components/game/game.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CellComponent } from './components/cell/cell.component';

import { GameService } from './services/game.service';
import { SettingsService } from './services/settings.service';

const appRoutes: Routes = [  
  { path: 'game', component: GameComponent},
  { path: 'settings', component: SettingsComponent},
  { path: '', component: GameComponent } 
];


@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    SettingsComponent,
    CellComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [SettingsService, GameService, PatternValidator],
  bootstrap: [AppComponent]
})
export class AppModule { }
