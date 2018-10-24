import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListpersonasComponent } from './listpersonas.component';

describe('ListpersonasComponent', () => {
  let component: ListpersonasComponent;
  let fixture: ComponentFixture<ListpersonasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListpersonasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListpersonasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
