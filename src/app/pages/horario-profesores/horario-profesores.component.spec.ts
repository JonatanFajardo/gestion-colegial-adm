import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioProfesoresComponent } from './horario-profesores.component';

describe('HorarioProfesoresComponent', () => {
  let component: HorarioProfesoresComponent;
  let fixture: ComponentFixture<HorarioProfesoresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorarioProfesoresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorarioProfesoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
