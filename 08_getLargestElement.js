//배열을 입력받아 가장 큰 요소를 리턴
function getLargestElement(arr) {
  let max = arr[0];
  for (let el of arr) {
    if (el > max) {
      max = el;
    }
  }
  return max;
}