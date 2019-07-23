import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponentedComponent } from './componented.component';

describe('ComponentedComponent', () => {
  let component: ComponentedComponent;
  let fixture: ComponentFixture<ComponentedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComponentedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComponentedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
