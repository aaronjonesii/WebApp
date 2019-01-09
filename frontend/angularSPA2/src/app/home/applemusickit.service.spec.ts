import { TestBed } from '@angular/core/testing';

import { ApplemusickitService } from './applemusickit.service';

describe('ApplemusickitService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ApplemusickitService = TestBed.get(ApplemusickitService);
    expect(service).toBeTruthy();
  });
});
