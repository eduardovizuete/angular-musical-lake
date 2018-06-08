import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Song } from '../models/song';
import { SONGS } from '../models/mock-songs';
import { MessageService } from '../services/message.service';
import { SOUNDS } from '../models/mock-sounds';
import { Sound } from '../models/sound';
import { Note } from '../models/note';

@Injectable()
export class SongService {

  constructor(private messageService: MessageService) { }

  getSongs(): Observable<Song[]> {
    this.messageService.add('SongService: fetched songs');
    return of(SONGS);
  }

  searchNextSoundsInSongs(sound: string): Observable<Song[]> {

    const songsFiltered: Song[] = [];

    SONGS.forEach(song => {
      let next = false;
      const nextNotes: Note[] = [];
      song.notes.forEach(note => {
        if (next) {
          nextNotes.push(note);
        }
        if (note.sound.name === sound) {
          next = true;
        }
      });

      if (next) {
        const songFiltered = new Song(song.id, song.name, nextNotes);
        songsFiltered.push(songFiltered);
      }
    });

    return of(songsFiltered);
  }

}
