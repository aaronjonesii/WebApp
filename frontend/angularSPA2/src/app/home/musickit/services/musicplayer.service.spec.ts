import { TestBed } from '@angular/core/testing';

import { MusicplayerService } from './musicplayer.service';

describe('MusicplayerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MusicplayerService = TestBed.get(MusicplayerService);
    expect(service).toBeTruthy();
  });
});
