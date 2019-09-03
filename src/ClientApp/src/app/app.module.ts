import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LampComponent } from './lamp/lamp.component';

import { UiSwitchModule } from 'ngx-ui-switch'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LampComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    UiSwitchModule.forRoot({
      size: 'large',
      checkedLabel: 'Ligado',
      uncheckedLabel: 'Desligado'
    }),
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
