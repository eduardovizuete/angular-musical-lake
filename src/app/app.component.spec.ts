import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { MessagesComponent } from './messages/messages.component';
import { AnimalService } from './services/animal.service';
import { MessageService } from './services/message.service';
import { SongService } from './services/song.service';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        AnimalsComponent,
        MessagesComponent,
        AnimalDetailComponent
      ],
      providers: [
        AnimalService,
        MessageService,
        SongService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('Musical Lake');
  }));
});
