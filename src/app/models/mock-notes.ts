import { Note } from './note';
import { SOUNDS } from './mock-sounds';

// SOUNDS: Sound[] = [
//   0, 'brr'
//   1, 'birip'
//   2, 'brrah'
//   3, 'croac'
//   4, 'fiu'
//   5, 'plop'
//   6, 'pep'
//   7, 'cric-cric'
//   8, 'trri-trri'
//   9, 'bri-bri'
// ];


export const NOTESSONG1: Note[] = [
  { order: 1, sound: SOUNDS[0]},
  { order: 2, sound: SOUNDS[4]},
  { order: 3, sound: SOUNDS[7]},
  { order: 4, sound: SOUNDS[2]}
];

export const NOTESSONG2: Note[] = [
  { order: 1, sound: SOUNDS[6]},
  { order: 2, sound: SOUNDS[1]},
  { order: 3, sound: SOUNDS[8]},
  { order: 4, sound: SOUNDS[3]}
];

export const NOTESSONG3: Note[] = [
  { order: 1, sound: SOUNDS[9]},
  { order: 2, sound: SOUNDS[5]},
  { order: 3, sound: SOUNDS[7]},
  { order: 4, sound: SOUNDS[2]}
];