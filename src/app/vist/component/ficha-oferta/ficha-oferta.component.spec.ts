import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FichaOfertaComponent } from './ficha-oferta.component';

describe('FichaOfertaComponent', () => {
  let component: FichaOfertaComponent;
  let fixture: ComponentFixture<FichaOfertaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FichaOfertaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FichaOfertaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
