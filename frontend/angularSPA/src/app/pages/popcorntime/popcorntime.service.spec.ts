import { TestBed } from '@angular/core/testing';

import { PopcorntimeService } from './popcorntime.service';

describe('PopcorntimeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PopcorntimeService = TestBed.get(PopcorntimeService);
    expect(service).toBeTruthy();
  });
});
