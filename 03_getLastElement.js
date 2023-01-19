//배열를 입력받아 배열의 마지막 요소를 리턴
//빈 배열을 입력받은 경우, undefined를 리턴
function getLastElement(arr) {
    if (arr.length > 0) {
      return arr[arr.length - 1];
    }
    return undefined;
  }