import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BarraSuperiorComponent } from './components/barra-superior/barra-superior.component';
import { PrimeraCardComponent } from './components/primera-card/primera-card.component';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { ExperienciaLaboralComponent } from './components/experiencia-laboral/experiencia-laboral.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    BarraSuperiorComponent,
    PrimeraCardComponent,
    DescripcionComponent,
    ExperienciaLaboralComponent,
    EducacionComponent,
    HabilidadesComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
