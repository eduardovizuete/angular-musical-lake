import { TestBed, inject } from '@angular/core/testing';

import { AnimalService } from './animal.service';
import { MessageService } from '../services/message.service';

describe('AnimalService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ AnimalService, MessageService ]
    });
  });

  it('should be created', inject([AnimalService], (service: AnimalService) => {
    expect(service).toBeTruthy();
  }));
});
