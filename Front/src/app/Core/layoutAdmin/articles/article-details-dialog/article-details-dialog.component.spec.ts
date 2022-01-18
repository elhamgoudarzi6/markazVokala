import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleDetailsDialogComponent } from './article-details-dialog.component';

describe('ArticleDetailsDialogComponent', () => {
  let component: ArticleDetailsDialogComponent;
  let fixture: ComponentFixture<ArticleDetailsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleDetailsDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleDetailsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
