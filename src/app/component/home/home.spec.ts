import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Home } from './home';
import { TaskList } from '../task-list/task-list';
import { provideMockStore } from '@ngrx/store/testing';
import { Userservice } from '../../services/users/userservice';
import { FormsModule } from '@angular/forms';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Home, TaskList],
      imports: [HttpClientTestingModule,FormsModule],
      providers: [
        Userservice,
        provideMockStore({}) // Provide a mock store for testing
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
