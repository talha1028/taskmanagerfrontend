import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Home } from '../home/home';
import { TaskList } from '../task-list/task-list';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('Home', () => {
  let component: Home;
  let fixture: ComponentFixture<Home>;
  let store: MockStore;
  const initialState = { tasks: { tasks: [] } }; // mock your state

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Home, TaskList],
      imports:[HttpClientTestingModule,FormsModule],
      providers: [provideMockStore({ initialState })]
    }).compileComponents();

    store = TestBed.inject(MockStore);
    fixture = TestBed.createComponent(Home);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
