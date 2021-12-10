import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtualizaComponent } from './atualiza.component';

describe('AtualizaComponent', () => {
  let component: AtualizaComponent;
  let fixture: ComponentFixture<AtualizaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
