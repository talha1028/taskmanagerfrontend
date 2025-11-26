import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { Taskservice } from './taskservice';
import { AuthService } from '../auth/authservice';

describe('Taskservice', () => {
  let service: Taskservice;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [AuthService]
    });

    service = TestBed.inject(Taskservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
