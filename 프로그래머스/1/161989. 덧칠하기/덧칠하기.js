function solution(n, m, section) {
  let count = 0;
  let wall = 0;

  section.forEach((n) => {
    if (n > wall) {
      wall = n + m - 1;
      count++;
    }
  });

  return count;
}