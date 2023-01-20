//배열과 요소를 입력받아 맨앞에 새로운 요소가 추가된 새로운 배열을 리턴
//입력받은 배열을 수정하지 않아야 합니다(immutability).
function addToFrontOfNew(arr, el) {
    const newArray = arr.slice();
    newArray.unshift(el);
    return newArray;
  }