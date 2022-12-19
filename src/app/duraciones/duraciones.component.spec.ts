import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DuracionesComponent } from './duraciones.component';

describe('DuracionesComponent', () => {
  let component: DuracionesComponent;
  let fixture: ComponentFixture<DuracionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DuracionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DuracionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
