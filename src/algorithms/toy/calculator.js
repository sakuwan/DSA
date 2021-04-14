/* === Calculator ===
 *
 * Functional composition calculator stream. Given a sequence of operations,
 * solve them with the ability to stream together multiple sequences.
*/

import { compose } from '../functional/compose';

const isValid = (x) => !Number.isNaN(x) && Number.isFinite(x);
const toNumber = (x) => (typeof x === 'number' ? x : Number(x));

const validateBinary = (x, y, fn) => {
  const xValue = toNumber(x);
  const yValue = toNumber(y);

  return isValid(xValue) && isValid(yValue) ? fn(xValue, yValue) : NaN;
};

const validateUnary = (x, fn) => {
  const xValue = toNumber(x);

  return isValid(xValue) ? fn(xValue) : NaN;
};

export const addOperation = (y) => (x) => validateBinary(x, y, (a, b) => a + b);
export const subOperation = (y) => (x) => validateBinary(x, y, (a, b) => a - b);
export const mulOperation = (y) => (x) => validateBinary(x, y, (a, b) => a * b);
export const divOperation = (y) => (x) => validateBinary(x, y, (a, b) => a / b);

export const sqOperation = () => (x) => validateUnary(x, (a) => a ** 2);
export const sqrtOperation = () => (x) => validateUnary(x, (a) => Math.sqrt(a));

export const invOperation = () => (x) => validateUnary(x, (a) => 1 / a);

export const signOperation = () => (x) => validateUnary(x, (a) => -a);

// eslint-disable-next-line no-sequences
export const stream = (op, sequence = []) => (sequence.unshift(op), sequence);
export const solve = (sequence, initial = 0) => compose(...sequence)(initial);
