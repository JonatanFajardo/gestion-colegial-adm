import { HorarioAlumnosFormularioComponent } from './pages/horario-alumnos/horario-alumnos-formulario/horario-alumnos-formulario.component';
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
import { DxButtonModule, DxDataGridModule, DxFormModule, DxLookupModule, DxTextBoxModule } from 'devextreme-angular';
import { HttpClientModule } from '@angular/common/http';
import { AlumnosFormularioComponent } from './pages/alumnos/alumnos-formulario/alumnos-formulario.component';
import { CargosFormularioComponent } from './pages/cargos/cargos-formulario/cargos-formulario.component';
import { CursosFormularioComponent } from './pages/cursos/cursos-formulario/cursos-formulario.component';
import { DiasFormularioComponent } from './pages/dias/dias-formulario/dias-formulario.component';
import { DuracionesFormularioComponent } from './pages/duraciones/duraciones-formulario/duraciones-formulario.component';
import { EstadosFormularioComponent } from './pages/estados/estados-formulario/estados-formulario.component';
import { HomeFormularioComponent } from './pages/home/home-formulario/home-formulario.component';
import { HorasFormularioComponent } from './pages/horas/horas-formulario/horas-formulario.component';
import { MateriasFormularioComponent } from './pages/materias/materias-formulario/materias-formulario.component';
import { ModalidadesFormularioComponent } from './pages/modalidades/modalidades-formulario/modalidades-formulario.component';
import { NotasFormularioComponent } from './pages/notas/notas-formulario/notas-formulario.component';
import { ParcialesFormularioComponent } from './pages/parciales/parciales-formulario/parciales-formulario.component';
import { ParentescosFormularioComponent } from './pages/parentescos/parentescos-formulario/parentescos-formulario.component';
import { SeccionesFormularioComponent } from './pages/secciones/secciones-formulario/secciones-formulario.component';
import { SemestresFormularioComponent } from './pages/semestres/semestres-formulario/semestres-formulario.component';
import { TitulosFormularioComponent } from './pages/titulos/titulos-formulario/titulos-formulario.component';
import { EmpleadosFormularioComponent } from './pages/empleados/empleados-formulario/empleados-formulario.component';
import { EncargadosFormularioComponent } from './pages/encargados/encargados-formulario/encargados-formulario.component';
import { CursosNivelesFormularioComponent } from './pages/cursos-niveles/cursos-niveles-formulario/cursos-niveles-formulario.component';
import { NivelesEducativosFormularioComponent } from './pages/niveles-educativos/niveles-educativos-formulario/niveles-educativos-formulario.component';

@NgModule({
  declarations: [
    AppComponent, 
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
    MateriasComponent, 
    ModalidadesComponent,
    NivelesEducativosComponent,
    NotasComponent,
    ParcialesComponent,
    ParentescosComponent,
    SeccionesComponent,
    SemestresComponent,
    TitulosComponent,
    AlumnosFormularioComponent,
    CargosFormularioComponent,
    CursosFormularioComponent,
    CursosNivelesFormularioComponent,
    DiasFormularioComponent,
    DuracionesFormularioComponent,
    EmpleadosFormularioComponent,
    EncargadosFormularioComponent,
    EstadosFormularioComponent,
    HomeFormularioComponent,
    HorarioAlumnosFormularioComponent,
    HorarioProfesoresComponent,
    HorasFormularioComponent,
    MateriasFormularioComponent,
    ModalidadesFormularioComponent,
    NivelesEducativosFormularioComponent,
    NotasFormularioComponent,
    ParcialesFormularioComponent,
    ParentescosFormularioComponent,
    SeccionesFormularioComponent,
    SemestresFormularioComponent,
    TitulosFormularioComponent, 
    CursosNivelesFormularioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxButtonModule,
    DxTextBoxModule,
    DxFormModule,
    HttpClientModule,
    DxDataGridModule,
    DxLookupModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
