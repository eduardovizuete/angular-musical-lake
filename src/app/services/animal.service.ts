import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Animal } from '../models/animal';
import { ANIMALS } from '../models/mock-animals';
import { MessageService } from '../services/message.service';

@Injectable()
export class AnimalService {

  constructor(private messageService: MessageService) { }

  getAnimals(): Observable<Animal[]> {
    return of(ANIMALS);
  }

}
