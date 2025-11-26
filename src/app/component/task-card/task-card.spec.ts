import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Taskcard } from './task-card';

describe('TaskCard', () => {
  let component: Taskcard;
  let fixture: ComponentFixture<Taskcard>;
  

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Taskcard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Taskcard);
    component = fixture.componentInstance;
    component.task = { id:1, title: 'A', status:'pending' };
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
