import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { CargosComponent } from './cargos/cargos.component';
import { CursosNivelesComponent } from './cursos-niveles/cursos-niveles.component';
import { CursosComponent } from './cursos/cursos.component';
import { DiasComponent } from './dias/dias.component';
import { DuracionesComponent } from './duraciones/duraciones.component';
import { EmpleadosComponent } from './empleados/empleados.component';
import { EncargadosComponent } from './encargados/encargados.component';
import { EstadosComponent } from './estados/estados.component';
import { HorarioAlumnosComponent } from './horario-alumnos/horario-alumnos.component';
import { HorarioProfesoresComponent } from './horario-profesores/horario-profesores.component';
import { HorasComponent } from './horas/horas.component';
import { MateriasComponent } from './materias/materias.component';
import { ModalidadesComponent } from './modalidades/modalidades.component';
import { NivelesEducativosComponent } from './niveles-educativos/niveles-educativos.component';
import { NotasComponent } from './notas/notas.component';
import { ParcialesComponent } from './parciales/parciales.component';
import { ParentescosComponent } from './parentescos/parentescos.component';
import { SeccionesComponent } from './secciones/secciones.component';
import { SemestresComponent } from './semestres/semestres.component';
import { TitulosComponent } from './titulos/titulos.component';

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
