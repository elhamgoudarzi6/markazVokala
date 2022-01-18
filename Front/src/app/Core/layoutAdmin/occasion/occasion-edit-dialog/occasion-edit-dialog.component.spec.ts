import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OccasionEditDialogComponent } from './occasion-edit-dialog.component';

describe('OccasionEditDialogComponent', () => {
  let component: OccasionEditDialogComponent;
  let fixture: ComponentFixture<OccasionEditDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccasionEditDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OccasionEditDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
