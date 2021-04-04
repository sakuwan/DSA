export const bisectLeft = (array, value, minIndex = null, maxIndex = null) => {
  if (!array || !array.length) return -1;

  let lo = minIndex ?? 0;
  let hi = maxIndex ?? array.length;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (array[mid] < value) {
      lo = mid + 1;
    } else {
      hi = mid;
    }
  }

  return lo;
};

export const bisectRight = (array, value, minIndex = null, maxIndex = null) => {
  if (!array || !array.length) return -1;

  let lo = minIndex ?? 0;
  let hi = maxIndex ?? array.length;
  while (lo < hi) {
    const mid = Math.floor((lo + hi) / 2);
    if (array[mid] > value) {
      hi = mid;
    } else {
      lo = mid + 1;
    }
  }

  return lo;
};
