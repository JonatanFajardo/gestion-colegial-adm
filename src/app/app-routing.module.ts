import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './pages/alumnos/alumnos.component';
import { CargosComponent } from './pages/cargos/cargos.component';
import { CursosNivelesComponent } from './pages/cursos-niveles/cursos-niveles.component';
import { CursosComponent } from './pages/cursos/cursos.component';
import { DiasComponent } from './pages/dias/dias.component';
import { DuracionesComponent } from './pages/duraciones/duraciones.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { EncargadosComponent } from './pages/encargados/encargados.component';
import { EstadosComponent } from './pages/estados/estados.component';
import { HorarioAlumnosComponent } from './pages/horario-alumnos/horario-alumnos.component';
import { HorarioProfesoresComponent } from './pages/horario-profesores/horario-profesores.component';
import { HorasComponent } from './pages/horas/horas.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { ModalidadesComponent } from './pages/modalidades/modalidades.component';
import { NivelesEducativosComponent } from './pages/niveles-educativos/niveles-educativos.component';
import { NotasComponent } from './pages/notas/notas.component';
import { ParcialesComponent } from './pages/parciales/parciales.component';
import { ParentescosComponent } from './pages/parentescos/parentescos.component';
import { SeccionesComponent } from './pages/secciones/secciones.component';
import { SemestresComponent } from './pages/semestres/semestres.component';
import { TitulosComponent } from './pages/titulos/titulos.component';

const routes: Routes = [
  {path: 'duraciones', component: DuracionesComponent},
  {path: 'empleados', component: EmpleadosComponent},
  {path: 'encargados', component: EncargadosComponent},
  {path: 'estados', component: EstadosComponent},
  {path: 'horarioalumnos', component: HorarioAlumnosComponent},
  {path: 'horarioprofesores', component: HorarioProfesoresComponent},
  {path: 'horas', component: HorasComponent},
  {path: 'materias', component: MateriasComponent},
  {path: 'modalidades', component: ModalidadesComponent},
  {path: 'niveleseducativos', component: NivelesEducativosComponent},
  {path: 'notas', component: NotasComponent},
  {path: 'parciales', component: ParcialesComponent},
  {path: 'parentescos', component: ParentescosComponent},
  {path: 'secciones', component: SeccionesComponent},
  {path: 'semestres', component: SemestresComponent},
  {path: 'titulos', component: TitulosComponent},
  {path: 'alumnos', component: AlumnosComponent},
  {path: 'cargos', component: CargosComponent},
  {path: 'cursos', component: CursosComponent},
  {path: 'cursosniveles', component: CursosNivelesComponent},
  {path: 'dias', component: DiasComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
