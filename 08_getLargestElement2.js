//배열을 입력받아 가장 큰 요소를 리턴
function getLargestElement(arr) {
  let max = arr[0];
  for(let i = 0; i < arr.length; i++) {
    if(max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}