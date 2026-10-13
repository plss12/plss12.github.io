/**
 * Primer entorno de prueba del TFM: mapa de 12×12 con tres rovers y rutas reales del modelo
 * DDDQL entrenado, en sus dos modalidades. Transcrito de las figuras 5.9 y 5.10; los pasos
 * suman 83 y 41, igual que la tabla de resultados de la memoria.
 */

export type Cell = [row: number, col: number];

/** `.` terreno libre, `s` obstáculo pequeño, `L` obstáculo grande. */
export const grid = [
  'ssL...s.....',
  '.......s.s..',
  's...s..L....',
  '....s..L.ss.',
  's......s.s.s',
  '..s.........',
  '.....s..Ls..',
  '...sL.s..sL.',
  '.s......ss..',
  '.s.L....ss..',
  'L.s....L....',
  '.....s....s.',
];

/** Mezcladora: destino común donde cada rover entrega el mineral. */
export const base: Cell = [8, 7];

export interface Rover {
  start: Cell;
  mine: Cell;
  /** Ruta completa, celda a celda: salida → mina → mezcladora. */
  path: Cell[];
}

export type ScenarioMode = 'exploring' | 'informed';

const starts: Cell[] = [
  [1, 3],
  [6, 4],
  [5, 11],
];
const mines: Cell[] = [
  [0, 8],
  [5, 6],
  [7, 1],
];

const paths: Record<ScenarioMode, Cell[][]> = {
  /* Figura 5.9: los rovers no saben dónde están su mina ni la mezcladora y deben explorar. */
  exploring: [
    [
      [1, 3], [2, 3], [3, 3], [4, 3], [4, 4], [5, 4], [6, 4], [6, 5], [6, 6], [6, 7], [5, 7], [5, 8], [5, 9],
      [5, 10], [6, 10], [6, 9], [7, 9], [8, 9], [9, 9], [9, 8], [9, 7], [9, 6], [9, 5], [9, 4], [8, 4], [8, 3],
      [8, 2], [7, 2], [6, 2], [6, 3], [5, 3], [5, 4], [4, 4], [3, 4], [3, 5], [2, 5], [1, 5], [1, 6], [0, 6],
      [0, 7], [0, 8], [1, 8], [1, 9], [1, 10], [2, 10], [3, 10], [4, 10], [5, 10], [6, 10], [6, 9], [7, 9],
      [7, 8], [7, 7], [8, 7],
    ],
    [[6, 4], [6, 5], [5, 5], [5, 6], [6, 6], [7, 6], [8, 6], [8, 7]],
    [
      [5, 11], [5, 10], [4, 10], [4, 9], [4, 8], [4, 7], [4, 6], [4, 5], [4, 4], [4, 3], [5, 3], [5, 2], [6, 2],
      [6, 1], [7, 1], [7, 2], [7, 3], [6, 3], [6, 4], [6, 5], [7, 5], [7, 6], [8, 6], [8, 7],
    ],
  ],
  /* Figura 5.10: el mismo mapa, pero los rovers conocen de antemano dónde están sus objetivos. */
  informed: [
    [
      [1, 3], [1, 4], [1, 5], [1, 6], [1, 7], [1, 8], [0, 8], [1, 8], [2, 8], [3, 8], [4, 8], [5, 8], [5, 7],
      [6, 7], [7, 7], [8, 7],
    ],
    [[6, 4], [6, 5], [5, 5], [5, 6], [6, 6], [7, 6], [8, 6], [8, 7]],
    [
      [5, 11], [5, 10], [5, 9], [5, 8], [5, 7], [5, 6], [5, 5], [5, 4], [5, 3], [6, 3], [6, 2], [7, 2], [7, 1],
      [7, 2], [7, 3], [7, 4], [7, 5], [8, 5], [8, 6], [8, 7],
    ],
  ],
};

export function rovers(mode: ScenarioMode): Rover[] {
  return paths[mode].map((path, i) => ({ start: starts[i]!, mine: mines[i]!, path }));
}

export function totalSteps(mode: ScenarioMode): number {
  return paths[mode].reduce((sum, path) => sum + path.length - 1, 0);
}
