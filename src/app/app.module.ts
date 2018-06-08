import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { AnimalsComponent } from './animals/animals.component';
import { FormsModule } from '@angular/forms';
import { AnimalDetailComponent } from './animal-detail/animal-detail.component';
import { AnimalService } from './services/animal.service';
import { MessagesComponent } from './messages/messages.component';
import { MessageService } from './services/message.service';
import { SongService } from './services/song.service';

@NgModule({
  declarations: [
    AppComponent,
    AnimalsComponent,
    AnimalDetailComponent,
    MessagesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    AnimalService,
    MessageService,
    SongService],
  bootstrap: [AppComponent]
})
export class AppModule { }
