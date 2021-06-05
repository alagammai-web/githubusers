import { TestBed } from '@angular/core/testing';

import { GithubusersService } from './githubusers.service';

describe('GithubusersService', () => {
  let service: GithubusersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithubusersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
