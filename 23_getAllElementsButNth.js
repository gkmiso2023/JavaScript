//배열과 인덱스를 입력받아 해당 인덱스의 요소를 제외한 배열을 리턴
//배열의 길이보다 큰 인덱스를 입력받은 경우, 배열 그대로를 리턴
function getAllElementsButNth(arr, n) {
    let result = [];
  
    for (let i = 0; i < arr.length; i++) {
      if (i !== n) {
        result.push(arr[i]);
      }
    }
  
    return result;
  }