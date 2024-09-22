import { CellState } from '../types';
import { randomInt } from './utils';

export default class Game {
  private _rows: number;
  private _cols: number;
  private _board: CellState[];
  private _counter: number;
  private _finished: boolean;

  public get rows() {
    return this._rows;
  }

  public get cols() {
    return this._cols;
  }

  public get board() {
    return [...this._board];
  }

  public get counter() {
    return this._counter;
  }

  public get finished() {
    return this._finished;
  }

  private toIndex(row: number, col: number) {
    if (!Number.isInteger(row) || !Number.isInteger(col)) {
      throw new Error('Cell indices must be integers.');
    }

    if (row < 0 || col < 0 || row > this._rows - 1 || col > this._cols - 1) {
      throw new Error('Cell indices must be within the board boundaries.');
    }

    return this._cols * row + col;
  }

  constructor(rows: number, cols: number) {
    if (!Number.isInteger(rows) || !Number.isInteger(cols) || rows < 1 || cols < 1) {
      throw new Error('Rows and cols must be positive integers.');
    }

    this._rows = rows;
    this._cols = cols;
    this._board = [];
    this._counter = 0;
    this._finished = false;

    this.reset();
  }

  public reset() {
    this._board = [];
    this._counter = 0;
    this._finished = false;

    for (let i = 0; i < this._rows * this._cols; i++) {
      this._board.push({ hasItem: false, clicked: false });
    }

    this._board[randomInt(this._rows * this._cols - 1, 0)].hasItem = true;
  }

  public click(row: number, col: number) {
    if (this._finished || this._board[this.toIndex(row, col)].clicked) {
      return;
    }

    this._board[this.toIndex(row, col)] = { ...this._board[this.toIndex(row, col)], clicked: true };
    this._counter++;

    if (this._board[this.toIndex(row, col)].hasItem) {
      this._finished = true;
    }
  }
}
