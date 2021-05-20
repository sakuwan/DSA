/* === English readable integer ===
 *
 * Convert a given non-negative integer N to its English readable
 * representation.
 *
 * Runtimes:
 *  Iteration: O(n)
*/

// eslint-disable-next-line import/prefer-default-export
export const englishIntegerIteration = (N) => {
  if (N < 0) return '';
  if (N === 0) return 'Zero';

  const baseDigits = [
    '', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten',
    'Eleven', 'Twelve', 'Thirteen', 'Fourteen', 'Fifteen', 'Sixteen', 'Seventeen', 'Eighteen',
    'Nineteen',
  ];

  const baseTens = [
    '', '', 'Twenty', 'Thirty', 'Forty', 'Fifty', 'Sixty', 'Seventy', 'Eighty', 'Ninety',
  ];

  const baseScale = [
    '', 'Thousand', 'Million', 'Billion',
  ];

  const formatNumber = (num) => {
    if (num === 0) return '';
    if (num < 20) return `${baseDigits[num]} `;
    if (num < 100) return `${baseTens[Math.trunc(num / 10)]} ${formatNumber(num % 10)}`;

    return `${baseDigits[Math.trunc(num / 100)]} Hundred ${formatNumber(num % 100)}`;
  };

  let scaleCounter = 0;
  let currentNumber = N;
  let formattedString = '';

  while (currentNumber > 0) {
    const currentSet = currentNumber % 1000;
    if (currentSet !== 0) {
      formattedString = `${formatNumber(currentSet)}${baseScale[scaleCounter]} ${formattedString}`;
    }

    scaleCounter += 1;
    currentNumber = Math.trunc(currentNumber / 1000);
  }

  return formattedString.trim();
};
