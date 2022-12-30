import { TestBed } from '@angular/core/testing';

import { ListSubsService } from './list-subs.service';

describe('ListSubsService', () => {
  let service: ListSubsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListSubsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
