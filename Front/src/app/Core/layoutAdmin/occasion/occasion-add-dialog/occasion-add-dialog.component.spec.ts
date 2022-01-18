import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OccasionAddDialogComponent } from './occasion-add-dialog.component';

describe('OccasionAddDialogComponent', () => {
  let component: OccasionAddDialogComponent;
  let fixture: ComponentFixture<OccasionAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OccasionAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OccasionAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
