import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DispUserComponent } from './disp-user.component';

describe('DispUserComponent', () => {
  let component: DispUserComponent;
  let fixture: ComponentFixture<DispUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DispUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DispUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
