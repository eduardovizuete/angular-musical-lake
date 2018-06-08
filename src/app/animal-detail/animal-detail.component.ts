import { Component, OnInit, Input } from '@angular/core';
import { Animal } from '../models/animal';
import { SongService } from '../services/song.service';
import { MessageService } from '../services/message.service';

@Component({
  selector: 'app-animal-detail',
  templateUrl: './animal-detail.component.html',
  styleUrls: ['./animal-detail.component.css']
})
export class AnimalDetailComponent implements OnInit {

  @Input() animal: Animal;
  selectedSound: string;

  constructor(
    private songService: SongService,
    private messageService: MessageService) { }

  ngOnInit() {
  }

  onSelectSound(filterSound: any) {
    this.selectedSound = filterSound;
  }

  searchNextSoundsInSongs() {
    let songsFiltered;
    this.songService.searchNextSoundsInSongs(this.selectedSound)
      .subscribe(songs => songsFiltered = songs);
    this.printNextSoundsInSongs(songsFiltered);
  }

  printNextSoundsInSongs(songs) {
    this.messageService.clear();
    songs.forEach(song => {
      this.messageService.add('Sound found in song: ' + song.name);
      this.messageService.add('Next sounds in song: ');
      song.notes.forEach(note => {
        this.messageService.add(' ==> ' + note.sound.name);
      });
    });
  }

}
