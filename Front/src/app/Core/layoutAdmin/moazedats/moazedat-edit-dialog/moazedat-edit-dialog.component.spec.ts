import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoazedatEditDialogComponent } from './moazedat-edit-dialog.component';

describe('CommissionEditDialogComponent', () => {
  let component: MoazedatEditDialogComponent;
  let fixture: ComponentFixture<MoazedatEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoazedatEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MoazedatEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
