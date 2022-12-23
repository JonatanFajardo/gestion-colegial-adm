import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HorarioAlumnosComponent } from './horario-alumnos.component';

describe('HorarioAlumnosComponent', () => {
  let component: HorarioAlumnosComponent;
  let fixture: ComponentFixture<HorarioAlumnosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HorarioAlumnosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HorarioAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
