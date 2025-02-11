import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisorComponentComponent } from './visor-component.component';

describe('VisorComponentComponent', () => {
  let component: VisorComponentComponent;
  let fixture: ComponentFixture<VisorComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisorComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisorComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
