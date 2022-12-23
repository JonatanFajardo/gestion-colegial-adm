import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormularioComponent } from './Materias/formulario/formulario.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { ModalidadesComponent } from './pages/modalidades/modalidades.component';
import { NivelesEducativosComponent } from './pages/niveles-educativos/niveles-educativos.component';
import { NotasComponent } from './pages/notas/notas.component';
import { ParcialesComponent } from './pages/parciales/parciales.component';
import { ParentescosComponent } from './pages/parentescos/parentescos.component';
import { SeccionesComponent } from './pages/secciones/secciones.component';
import { SemestresComponent } from './pages/semestres/semestres.component';
import { TitulosComponent } from './pages/titulos/titulos.component';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { CargosComponent } from './pages/cargos/cargos.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { CursosNivelesComponent } from './pages/cursos-niveles/cursos-niveles.component';
import { DiasComponent } from './pages/dias/dias.component';
import { DuracionesComponent } from './pages/duraciones/duraciones.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { EncargadosComponent } from './pages/encargados/encargados.component';
import { EstadosComponent } from './pages/estados/estados.component';
import { HomeComponent } from './pages/home/home.component';
import { HorarioAlumnosComponent } from './pages/horario-alumnos/horario-alumnos.component';
import { HorarioProfesoresComponent } from './pages/horario-profesores/horario-profesores.component';
import { HorasComponent } from './pages/horas/horas.component';
import { DxButtonModule, DxTextBoxModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    // FormularioComponent,
    MateriasComponent,
    // ListadoComponent,
    ModalidadesComponent,
    NivelesEducativosComponent,
    NotasComponent,
    ParcialesComponent,
    ParentescosComponent,
    SeccionesComponent,
    SemestresComponent,
    TitulosComponent,
    AlumnosComponent,
    CargosComponent,
    CursosComponent,
    CursosNivelesComponent,
    DiasComponent,
    DuracionesComponent,
    EmpleadosComponent,
    EncargadosComponent,
    EstadosComponent,
    HomeComponent,
    HorarioAlumnosComponent,
    HorarioProfesoresComponent,
    HorasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxTextBoxModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
