import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsPopupDialogComponent } from './news-popup-dialog.component';

describe('NewsPopupDialogComponent', () => {
  let component: NewsPopupDialogComponent;
  let fixture: ComponentFixture<NewsPopupDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewsPopupDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewsPopupDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
