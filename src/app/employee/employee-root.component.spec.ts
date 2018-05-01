import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRootComponent } from './employee-root.component';

describe('EmployeeRootComponent', () => {
  let component: EmployeeRootComponent;
  let fixture: ComponentFixture<EmployeeRootComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EmployeeRootComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EmployeeRootComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
