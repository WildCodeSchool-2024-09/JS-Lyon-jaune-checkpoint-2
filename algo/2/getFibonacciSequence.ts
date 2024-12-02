function getFibonacciSequence(size: number): number[] {
  if (size <= 0) {
    return [];
  }

  const sequence: number[] = [0, 1];

  for (let i = 2; i < size; i++) {
    const nextValue = sequence[i - 1] + sequence[i - 2];
    sequence.push(nextValue);
  }

  return sequence.slice(0, size);
}

export default getFibonacciSequence;
