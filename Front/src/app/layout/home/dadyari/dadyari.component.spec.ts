import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DadyariComponent } from './dadyari.component';

describe('DadyariComponent', () => {
  let component: DadyariComponent;
  let fixture: ComponentFixture<DadyariComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DadyariComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DadyariComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
