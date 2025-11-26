import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { Userservice } from './userservice';
import { AuthService } from '../auth/authservice';

describe('Userservice', () => {
  let service: Userservice;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers:[AuthService]
    });
    service = TestBed.inject(Userservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
