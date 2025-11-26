import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Createtask } from './createtask';
import { Taskservice } from '../../services/tasks/taskservice';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('Createtask', () => {
  let component: Createtask;
  let fixture: ComponentFixture<Createtask>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Createtask],
      imports: [HttpClientTestingModule,ReactiveFormsModule],
      providers: [Taskservice]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Createtask);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
