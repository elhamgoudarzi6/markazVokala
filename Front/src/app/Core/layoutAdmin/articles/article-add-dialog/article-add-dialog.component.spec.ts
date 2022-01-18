import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArticleAddDialogComponent } from './article-add-dialog.component';

describe('BlogAddDialogComponent', () => {
  let component: ArticleAddDialogComponent;
  let fixture: ComponentFixture<ArticleAddDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ArticleAddDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ArticleAddDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
