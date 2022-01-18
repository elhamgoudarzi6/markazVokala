import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoazedatComponent } from './moazedat.component';

describe('MoazedatComponent', () => {
  let component: MoazedatComponent;
  let fixture: ComponentFixture<MoazedatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoazedatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoazedatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
