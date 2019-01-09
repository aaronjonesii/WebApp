import { TestBed } from '@angular/core/testing';

import { MusickitapiService } from './musickitapi.service';

describe('MusickitapiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusickitapiService = TestBed.get(MusickitapiService);
    expect(service).toBeTruthy();
  });
});
