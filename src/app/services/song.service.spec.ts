import { TestBed, inject } from '@angular/core/testing';

import { SongService } from './song.service';
import { MessageService } from '../services/message.service';

describe('SongService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ SongService, MessageService ]
    });
  });

  it('should be created', inject([SongService], (service: SongService) => {
    expect(service).toBeTruthy();
  }));
});
