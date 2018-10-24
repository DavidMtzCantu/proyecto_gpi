import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatepersonasComponent } from './createpersonas.component';

describe('CreatepersonasComponent', () => {
  let component: CreatepersonasComponent;
  let fixture: ComponentFixture<CreatepersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatepersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatepersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
