import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestbookListItemComponent } from './guestbook-list-item.component';

describe('GuestbookListItemComponent', () => {
  let component: GuestbookListItemComponent;
  let fixture: ComponentFixture<GuestbookListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GuestbookListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestbookListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
