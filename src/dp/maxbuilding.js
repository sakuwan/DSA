/* === Maximum building height ===
 *
 * You want to build N new buildings in a city. The new buildings will be built
 * in a line and are labeled from 1 to N.
 *
 * However, there are city restrictions on the heights of the new buildings:
 *  - The height of each building must be a non-negative integer.
 *  - The height of the first building must be 0.
 *  - The height difference between any two adjacent buildings cannot exceed 1.
 *
 * Additionally, there are city restrictions on the maximum height of specific
 * buildings. These restrictions are given as a 2D integer array restrictions
 * where restrictions[i] = [idᵢ, maxHeightᵢ] indicates that building idᵢ must
 * have a height less than or equal to maxHeightᵢ.
 *
 * It is guaranteed that each building will appear at most once in restrictions,
 * and building 1 will not be in restrictions.
 *
 * Return the maximum possible height of the tallest building.
 *
 * Runtimes:
 *  Iteration: O(n log n)
*/

/*
int maxBuilding(N, A) {
  arr.push_back({1, 0});
  arr.push_back({n, n - 1});
  sort(arr.begin(), arr.end());
  int m = arr.size();

  for (int i = 1; i < m; ++i)
      arr[i][1] = min(arr[i][1], arr[i-1][1] + arr[i][0] - arr[i-1][0]);
  for (int i = m - 2; i >= 0; --i)
      arr[i][1] = min(arr[i][1], arr[i+1][1] + arr[i+1][0] - arr[i][0]);

  int ans = 0, l, h1, r, h2;
  for (int i = 1; i < m; ++i) {
      l = arr[i-1][0], r = arr[i][0], h1 = arr[i-1][1], h2 = arr[i][1];
      ans = max(ans, max(h1, h2) + (r - l - abs(h1 - h2)) / 2);
  }
  return ans;
}
*/

/* eslint-disable import/prefer-default-export, no-param-reassign */
export const buildingIteration = (N, A) => {
  if (N < 1) return 0;
  if (!A || A.length === 0) return N - 1;

  A.push([1, 0]);
  A.push([N, N - 1]);
  A.sort(([a], [b]) => a - b);

  const { length } = A;

  for (let i = 1; i < length; i += 1) {
    const [currentHeight, currentMax] = A[i];
    const [previousHeight, previousMax] = A[i - 1];

    A[i][1] = Math.min(currentMax, previousMax + currentHeight - previousHeight);
  }

  for (let i = length - 2; i >= 0; i -= 1) {
    const [currentHeight, currentMax] = A[i];
    const [nextHeight, nextMax] = A[i + 1];

    A[i][1] = Math.min(currentMax, nextMax + nextHeight - currentHeight);
  }

  let maxHeight = 0;
  for (let i = 1; i < length; i += 1) {
    const [currentHeight, currentMax] = A[i];
    const [previousHeight, previousMax] = A[i - 1];

    maxHeight = Math.max(
      maxHeight, (currentMax + previousMax + currentHeight - previousHeight) / 2,
    );
  }

  return maxHeight;
};
/* eslint-enable import/prefer-default-export, no-param-reassign */
