import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { FormularioComponent } from './Materias/formulario/formulario.component';
import { MateriasComponent } from './materias/materias.component';
import { ModalidadesComponent } from './modalidades/modalidades.component';
import { NivelesEducativosComponent } from './niveles-educativos/niveles-educativos.component';
import { NotasComponent } from './notas/notas.component';
import { ParcialesComponent } from './parciales/parciales.component';
import { ParentescosComponent } from './parentescos/parentescos.component';
import { SeccionesComponent } from './secciones/secciones.component';
import { SemestresComponent } from './semestres/semestres.component';
import { TitulosComponent } from './titulos/titulos.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CargosComponent } from './cargos/cargos.component';
import { CursosComponent } from './cursos/cursos.component';
import { CursosNivelesComponent } from './cursos-niveles/cursos-niveles.component';
import { DiasComponent } from './dias/dias.component';
import { DuracionesComponent } from './duraciones/duraciones.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EncargadosComponent } from './encargados/encargados.component';
import { EstadosComponent } from './estados/estados.component';
import { HomeComponent } from './home/home.component';
import { HorarioAlumnosComponent } from './horario-alumnos/horario-alumnos.component';
import { HorarioProfesoresComponent } from './horario-profesores/horario-profesores.component';
import { HorasComponent } from './horas/horas.component';
import { DxButtonModule, DxTextBoxModule } from 'devextreme-angular';

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
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
