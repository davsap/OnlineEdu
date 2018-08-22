import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoursformComponent } from './coursform.component';

describe('CoursformComponent', () => {
  let component: CoursformComponent;
  let fixture: ComponentFixture<CoursformComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoursformComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
