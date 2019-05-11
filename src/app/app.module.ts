import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule, MatInputModule, MatExpansionModule, MatSelectModule, MatButtonModule, MatChipsModule, MatListModule, MatButtonToggleModule } from '@angular/material';
import { FormBasicoComponent } from './form-basico/form-basico.component';
import { FormAgrupadoComponent } from './form-agrupado/form-agrupado.component';
import { FormDinamicoComponent } from './form-dinamico/form-dinamico.component';
import { FormQueriesComponent } from './form-queries/form-queries.component';




@NgModule({
  declarations: [
    AppComponent,
    FormBasicoComponent,
    FormAgrupadoComponent,
    FormDinamicoComponent,
    FormQueriesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule, MatButtonModule, MatChipsModule, MatListModule, MatButtonToggleModule, MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
