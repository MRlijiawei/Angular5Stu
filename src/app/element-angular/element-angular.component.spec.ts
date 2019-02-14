import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElementAngularComponent } from './element-angular.component';

describe('ElementAngularComponent', () => {
  let component: ElementAngularComponent;
  let fixture: ComponentFixture<ElementAngularComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElementAngularComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElementAngularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
