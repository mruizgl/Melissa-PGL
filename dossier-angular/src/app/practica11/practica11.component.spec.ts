import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Practica11Component } from './practica11.component';

describe('Practica11Component', () => {
  let component: Practica11Component;
  let fixture: ComponentFixture<Practica11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Practica11Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Practica11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
