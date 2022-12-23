import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CursosNivelesComponent } from './cursos-niveles.component';

describe('CursosNivelesComponent', () => {
  let component: CursosNivelesComponent;
  let fixture: ComponentFixture<CursosNivelesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CursosNivelesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CursosNivelesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
