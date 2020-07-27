import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkeloadComponent } from './skeload.component';

describe('SkeloadComponent', () => {
  let component: SkeloadComponent;
  let fixture: ComponentFixture<SkeloadComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkeloadComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkeloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
