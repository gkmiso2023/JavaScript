//배열과 수를 입력받아 수가 인덱스로 가리키는 배열의 요소를 리턴
//빈 배열을 입력받은 경우, undefined를 리턴
//배열의 길이를 벗어나는 수를 입력받은 경우, 'out of index range'를 리턴
function getNthElement(arr, index) {
    if (arr.length === 0) {
      return undefined;
    } else if (arr.length - 1 < index) {
      return 'out of index range';
    } else {
      return arr[index];
    }
  }