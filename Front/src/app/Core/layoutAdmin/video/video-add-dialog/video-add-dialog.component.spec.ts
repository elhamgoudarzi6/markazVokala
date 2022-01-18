import { ComponentFixture, TestBed } from '@angular/core/testing';
import { VideoAddDialogComponent } from './video-add-dialog.component';

describe('VideoAddDialogComponent', () => {
  let component: VideoAddDialogComponent;
  let fixture: ComponentFixture<VideoAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VideoAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VideoAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
