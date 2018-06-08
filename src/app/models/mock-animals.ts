import { Animal } from './animal';
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

export const ANIMALS: Animal[] = [
  { id: 1, name: 'frog', sounds: [SOUNDS[0], SOUNDS[1], SOUNDS[2], SOUNDS[3]]},
  { id: 2, name: 'dragonfly', sounds: [SOUNDS[4], SOUNDS[5], SOUNDS[6]]},
  { id: 3, name: 'criket', sounds: [SOUNDS[7], SOUNDS[8], SOUNDS[9]]}
];