//배열을 입력받아 배열의 첫번째 요소를 리턴
//빈 배열을 입력받은 경우, undefined를 리턴
function getFirstElement(arr) {
    if (arr.length === 0) {
      return undefined;
    }
    return arr[0];
  }