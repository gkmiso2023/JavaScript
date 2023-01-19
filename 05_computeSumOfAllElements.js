//배열을 입력받아 배열의 모든 요소의 합을 리턴
//입력받은 배열이 빈 배열인 경우, 0을 리턴
function computeSumOfAllElements(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      sum = sum + arr[i];
    }
    return sum;
  }