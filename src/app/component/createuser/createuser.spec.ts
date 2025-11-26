import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

import { Createuser } from './createuser';
import { Userservice } from '../../services/users/userservice';

describe('Createuser (Integration Test)', () => {
  let component: Createuser;
  let fixture: ComponentFixture<Createuser>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [Createuser],
      imports: [HttpClientTestingModule, FormsModule],
      providers: [Userservice]
    }).compileComponents();

    fixture = TestBed.createComponent(Createuser);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call Userservice.createUser() and hit API', () => {
    component.user = {
      name: 'Talha',
      email: 'talha@test.com',
      password: '123456',
      role: 'user'
    };

    component.createUser();

    const req = httpMock.expectOne('http://localhost:3000/users/createuser');
    expect(req.request.method).toBe('POST');
    expect(req.request.body.name).toBe('Talha');

    req.flush({ message: 'User Created' });
  });

  afterEach(() => {
    httpMock.verify();
  });
});
