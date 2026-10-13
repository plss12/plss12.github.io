/**
 * Primer entorno de prueba del TFM (figura 5.9): mapa de 12×12, tres rovers sin
 * conocimiento previo de sus objetivos y rutas reales del modelo DDDQL entrenado.
 * Transcrito de la figura; los pasos suman 83, igual que la tabla de resultados.
 */

export type Cell = [row: number, col: number];

/** `.` libre, `s` obstáculo pequeño, `L` obstáculo grande. */
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
  id: string;
  start: Cell;
  mine: Cell;
  /** Ruta completa, celda a celda: salida → mina → mezcladora. */
  path: Cell[];
}

export const rovers: Rover[] = [
  {
    id: 'R1',
    start: [1, 3],
    mine: [0, 8],
    path: [
      [1, 3], [2, 3], [3, 3], [4, 3], [4, 4], [5, 4], [6, 4], [6, 5], [6, 6], [6, 7], [5, 7], [5, 8], [5, 9],
      [5, 10], [6, 10], [6, 9], [7, 9], [8, 9], [9, 9], [9, 8], [9, 7], [9, 6], [9, 5], [9, 4], [8, 4], [8, 3],
      [8, 2], [7, 2], [6, 2], [6, 3], [5, 3], [5, 4], [4, 4], [3, 4], [3, 5], [2, 5], [1, 5], [1, 6], [0, 6],
      [0, 7], [0, 8], [1, 8], [1, 9], [1, 10], [2, 10], [3, 10], [4, 10], [5, 10], [6, 10], [6, 9], [7, 9],
      [7, 8], [7, 7], [8, 7],
    ],
  },
  {
    id: 'R2',
    start: [6, 4],
    mine: [5, 6],
    path: [[6, 4], [6, 5], [5, 5], [5, 6], [6, 6], [7, 6], [8, 6], [8, 7]],
  },
  {
    id: 'R3',
    start: [5, 11],
    mine: [7, 1],
    path: [
      [5, 11], [5, 10], [4, 10], [4, 9], [4, 8], [4, 7], [4, 6], [4, 5], [4, 4], [4, 3], [5, 3], [5, 2], [6, 2],
      [6, 1], [7, 1], [7, 2], [7, 3], [6, 3], [6, 4], [6, 5], [7, 5], [7, 6], [8, 6], [8, 7],
    ],
  },
];

export const totalSteps = rovers.reduce((sum, r) => sum + r.path.length - 1, 0);
