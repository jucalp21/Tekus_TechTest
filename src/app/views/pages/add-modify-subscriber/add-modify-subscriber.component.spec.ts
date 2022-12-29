import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddModifySubscriberComponent } from './add-modify-subscriber.component';

describe('AddModifySubscriberComponent', () => {
  let component: AddModifySubscriberComponent;
  let fixture: ComponentFixture<AddModifySubscriberComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddModifySubscriberComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddModifySubscriberComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
