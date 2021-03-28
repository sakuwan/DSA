export default function make2DArray(rows, cols, init = 0) {
  const rowObject = { length: rows };
  const colObject = { length: cols };

  const arrayFn = typeof init === 'function' ? init : () => init;

  const colFn = (row) => (_, col) => arrayFn(row, col);
  const rowFn = (_, row) => Array.from(colObject, colFn(row));

  return Array.from(rowObject, rowFn);
}
