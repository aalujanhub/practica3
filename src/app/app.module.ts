import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentedComponent } from './componentes/componented/componented.component';
import { Directivap3Directive } from './directivas/directivap3.directive';


@NgModule({
  declarations: [
    AppComponent,
    ComponentedComponent,
    Directivap3Directive
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
